// Dependencies
const dotenv = require('dotenv');
const fs = require('fs').promises;
const { initializeApp } = require('firebase/app');
const MarkdownIt = require('markdown-it');
const path = require('path');
// const { collection, documentId, getDocs, query, where } = require('firebase/firestore');
const { doc, getDoc, getFirestore } = require('firebase/firestore');

// Dependencies - Promisify Exec
const util = require('util');
const exec = util.promisify(require('child_process').exec);

// Module Variables
let contextConfig;
let areaConfig;
let areaLevel1Config;
let areaLevel2Config;
let issueCount = 0;
let modelConfig;
let presentationsConfig;

// Helpers - Build Configuration
async function buildConfig(env) {
    const packageJSON = JSON.parse(await fs.readFile('package.json', 'utf8'));
    const engineDependency = packageJSON.dependencies['@datapos/datapos-engine'];
    const engineVersion = engineDependency ? engineDependency.substring(1) : undefined;
    fs.writeFile('src/config.json', JSON.stringify({ id: packageJSON.name, engineVersion, env, version: packageJSON.version }, undefined, 4));
}

// Helpers - Build Context
async function buildContext() {
    const contextData = await readJSONFile('src/data.json', 'utf8');
    contextConfig = { label: contextData.label, typeId: 'context', areas: [] };
    await buildContext_PrepareContext('src');
    await buildContext_OutputContext();
    if (issueCount > 0) console.warn(`WARNING: ${issueCount} issues(s) encountered.`);
}

// Helpers - Build Context - Prepare Context
const buildContext_PrepareContext = async (path) => {
    const markdownIt = new MarkdownIt();
    const itemNames = await fs.readdir(path);
    for (const itemName of itemNames) {
        const itemPath = `${path}/${itemName}`;
        const stats = await fs.stat(itemPath);
        if (stats.isDirectory()) {
            const itemPathSegments = itemPath.split('/');
            if (itemPathSegments.length === 2) {
                const areaId = itemPathSegments[1];
                const areaData = await readJSONFile(`${itemPath}/data.json`, 'utf8');
                areaData.description = { en: (await readTextFile(`${itemPath}/description.en.md`)) || '' };
                areaConfig = {
                    id: areaId,
                    label: areaData.label || { en: areaId },
                    description: { en: renderMarkdown(markdownIt, areaData.description) },
                    sequence: areaData.sequence,
                    typeId: 'area',
                    models: []
                };
                contextConfig.areas.push(areaConfig);
                await buildContext_PrepareContext(itemPath);
            } else if (itemPathSegments.length === 3) {
                const modelId = itemPathSegments[2];
                const modelData = await readJSONFile(`${itemPath}/data.json`, 'utf8');
                modelData.description = { en: (await readTextFile(`${itemPath}/description.en.md`)) || '' };
                modelConfig = {
                    id: modelId,
                    label: modelData.label || { en: modelId },
                    description: { en: renderMarkdown(markdownIt, modelData.description) },
                    sequence: modelData.sequence,
                    typeId: 'model',
                    dimensions: [],
                    entities: [],
                    views: []
                };
                const dimensionPaths = (await listDirectoryEntries(`${itemPath}/dimensions`)).filter((name) => name.endsWith('.json'));
                for (const dimensionPath of dimensionPaths) {
                    const dimensionId = dimensionPath.split('.')[0];
                    const dimensionData = await readJSONFile(`${itemPath}/dimensions/${dimensionId}.json`);
                    dimensionData.description = { en: (await readTextFile(`${itemPath}/dimensions/${dimensionId}.en.md`)) || '' };
                    const dimensionConfig = {
                        id: dimensionId,
                        label: dimensionData.label || { en: dimensionId },
                        description: { en: renderMarkdown(markdownIt, dimensionData.description) },
                        typeId: 'dimension',
                        levels: []
                    };
                    modelConfig.dimensions.push(dimensionConfig);
                }
                const entityPaths = (await listDirectoryEntries(`${itemPath}/entities`)).filter((name) => name.endsWith('.json'));
                for (const entityPath of entityPaths) {
                    const entityId = entityPath.split('.')[0];
                    const entityData = await readJSONFile(`${itemPath}/entities/${entityId}.json`);
                    entityData.description = { en: (await readTextFile(`${itemPath}/entities/${entityId}.en.md`)) || '' };
                    const entityConfig = {
                        id: entityId,
                        label: entityData.label || { en: entityId },
                        description: { en: renderMarkdown(markdownIt, entityData.description) },
                        typeId: 'entity',
                        characteristics: [],
                        computations: [],
                        events: []
                    };
                    for (const characteristic of entityData.characteristics || []) {
                        const characteristicConfig = {
                            entityTypeId: characteristic.entityTypeId,
                            id: characteristic.id,
                            label: characteristic.label || { en: characteristic.id },
                            description: characteristic.description || { en: '' },
                            typeId: 'characteristic',
                            type: characteristic.type
                        };
                        entityConfig.characteristics.push(characteristicConfig);
                    }
                    for (const computation of entityData.computations || []) {
                        const computationConfig = {
                            id: computation.id,
                            label: computation.label || { en: computation.id },
                            description: computation.description || { en: '' },
                            typeId: 'computation',
                            formula: computation.formula
                        };
                        entityConfig.computations.push(computationConfig);
                    }
                    for (const event of entityData.events || []) {
                        const eventConfig = {
                            id: event.id,
                            label: event.label || { en: event.id },
                            description: event.description || { en: '' },
                            typeId: 'event'
                        };
                        entityConfig.events.push(eventConfig);
                    }
                    modelConfig.entities.push(entityConfig);
                }
                areaConfig.models.push(modelConfig);
            } else {
                throw new Error(`Unexpected directory level: ${itemPath}.`);
            }
        }
    }
};

// Helpers - Build Context - Output Context
const buildContext_OutputContext = async () => {
    const characteristics = [];
    const computations = [];
    const dimensions = [];
    const entities = [];
    const events = [];
    const models = [];
    const views = [];

    await clearDirectory('dist');

    const contextIndex = { id: 'default', label: contextConfig.label, typeId: contextConfig.typeId, areas: [] };
    for (const areaConfig of contextConfig.areas) {
        const areaId = `${areaConfig.id}`;
        const areaReference = { id: areaId, label: areaConfig.label, areaSequence: areaConfig.sequence, models: [] };
        for (const model of areaConfig.models) {
            const modelId = `${model.id}`;
            const modelConfig = {
                id: modelId,
                label: model.label,
                description: model.description,
                sequence: model.sequence,
                typeId: model.typeId,
                dimensions: [],
                entities: [],
                views: []
            };

            for (const dimension of model.dimensions) {
                const dimensionId = `${dimension.id}`;
                const dimensionConfig = {
                    id: dimensionId,
                    label: dimension.label,
                    description: dimension.description,
                    typeId: dimension.typeId,
                    levels: dimension.levels
                };
                fs.writeFile(`dist/datapos-context-default-dimension-${dimensionId}.json`, JSON.stringify(dimensionConfig));
                const dimensionReference = { id: dimensionId, label: dimension.label };
                modelConfig.dimensions.push(dimensionReference);
                dimensions.push({
                    ...dimensionReference,
                    modelId: modelId,
                    modelLabel: model.label,
                    areaId: areaConfig.Id,
                    areaLabel: areaConfig.label,
                    areaSequence: areaConfig.sequence
                });
            }

            for (const entity of model.entities) {
                const entityId = `${entity.id}`;
                const entityConfig = {
                    id: entityId,
                    label: entity.label,
                    description: entity.description,
                    typeId: entity.typeId,
                    characteristics: entity.characteristics,
                    computations: entity.computations,
                    events: entity.events
                };
                fs.writeFile(`dist/datapos-context-default-entity-${entityId}.json`, JSON.stringify(entityConfig));
                const entityReference = { id: entityId, label: entity.label };
                modelConfig.entities.push(entityReference);
                entities.push({ ...entityReference, modelId: modelId, modelLabel: model.label, areaId: areaId, areaLabel: areaConfig.label, areaSequence: areaConfig.sequence });
            }

            for (const view of model.views) {
                const viewId = `${view.id}`;
                const viewConfig = {
                    id: viewId,
                    label: view.label,
                    description: view.description,
                    typeId: view.typeId
                };
                fs.writeFile(`dist/datapos-context-default-view-${viewId}.json`, JSON.stringify(viewConfig));
                const viewReference = { id: viewId, label: view.label };
                modelConfig.views.push(viewReference);
                views.push({ ...viewReference, modelId: modelId, modelLabel: model.label, areaId: areaId, areaLabel: areaConfig.label, areaSequence: areaConfig.sequence });
            }
            fs.writeFile(`dist/datapos-context-default-model-${modelId}.json`, JSON.stringify(modelConfig));
            const modelReference = { id: modelId, label: model.label, sequence: model.sequence };
            areaReference.models.push(modelReference);
            models.push({ ...modelReference, areaId: areaId, areaLabel: areaConfig.label, areaSequence: areaConfig.sequence });
        }
        contextIndex.areas.push(areaReference);
    }
    fs.writeFile('dist/datapos-context-default.json', JSON.stringify(contextIndex));
    fs.writeFile('dist/datapos-context-default-models.json', JSON.stringify({ models: models }));
    fs.writeFile('dist/datapos-context-default-dimensions.json', JSON.stringify({ dimensions: dimensions }));
    fs.writeFile('dist/datapos-context-default-entities.json', JSON.stringify({ entities: entities }));
    fs.writeFile('dist/datapos-context-default-characteristics.json', JSON.stringify({ characteristics: characteristics }));
    fs.writeFile('dist/datapos-context-default-computations.json', JSON.stringify({ computations: computations }));
    fs.writeFile('dist/datapos-context-default-events.json', JSON.stringify({ events: events }));
    fs.writeFile('dist/datapos-context-default-views.json', JSON.stringify({ views: views }));
};

// Helpers - Build Presentations
async function buildPresentations() {
    const presentationsData = await readJSONFile('src/data.json', 'utf8');
    presentationsConfig = { label: presentationsData.label, areas: [] };
    await clearDirectory('dist');
    await buildPresentations_PreparePresentations('src');
    await buildPresentations_OutputPresentations();
    if (issueCount > 0) console.warn(`WARNING: ${issueCount} issues(s) encountered.`);
}

// Helpers - Build Presentations - Prepare Presentations
const buildPresentations_PreparePresentations = async (path) => {
    const itemNames = await fs.readdir(path);
    for (const itemName of itemNames) {
        const itemPath = `${path}/${itemName}`;
        const stats = await fs.stat(itemPath);
        if (stats.isDirectory()) {
            const itemPathSegments = itemPath.split('/');
            if (itemPathSegments.length === 2) {
                const areaId = itemPathSegments[1];
                const areaData = await readJSONFile(`${itemPath}/data.json`, 'utf8');
                areaConfig = {
                    id: areaId,
                    label: areaData.label || { en: areaId },
                    folders: []
                };
                presentationsConfig.areas.push(areaConfig);
                await buildPresentations_PreparePresentations(itemPath);
            } else if (itemPathSegments.length === 3) {
                const areaLevel2Id = itemPathSegments[2];
                const areaLevel2Data = await readJSONFile(`${itemPath}/data.json`, 'utf8');
                areaLevel1Config = {
                    id: areaLevel2Id,
                    label: areaLevel2Data.label || { en: areaLevel2Id },
                    folders: []
                };
                areaConfig.folders.push(areaLevel1Config);
                await buildPresentations_PreparePresentations(itemPath);
            } else if (itemPathSegments.length === 4) {
                const areaLevel3Id = itemPathSegments[3];
                const areaLevel3Data = await readJSONFile(`${itemPath}/data.json`, 'utf8');
                areaLevel2Config = {
                    id: areaLevel3Id,
                    label: areaLevel3Data.label || { en: areaLevel3Id },
                    folders: [],
                    presentations: []
                };
                areaLevel1Config.folders.push(areaLevel2Config);
                const presentationPaths = (await listDirectoryEntries(`${itemPath}`)).filter((name) => !name.endsWith('data.json'));
                for (const presentationPath of presentationPaths) {
                    const presentationId = presentationPath.slice(0, -5);
                    const presentationData = await readJSONFile(`${itemPath}/${presentationPath}`, 'utf8');
                    fs.writeFile(`dist/datapos-presentations-default-${presentationId}.json`, JSON.stringify(presentationData));
                    areaLevel2Config.presentations.push({ id: presentationId });
                }
            } else {
                throw new Error(`Unexpected directory level: ${itemPath}.`);
            }
        }
    }
    fs.writeFile('dist/datapos-presentations-default.json', JSON.stringify(presentationsConfig));
};

// Helpers - Build Presentations - Output Presentations
const buildPresentations_OutputPresentations = async () => {};

// Helpers - Build Public Directory Index
async function buildPublicDirectoryIndex(id) {
    async function listDirectoryEntriesRecursively(directoryPath, names) {
        const entries = [];
        index[directoryPath.substring(`public/${id}`.length)] = entries;
        for (const name of names) {
            const itemPath = path.join(directoryPath, name);
            const stats = await fs.stat(itemPath);
            if (stats.isDirectory()) {
                const nextLevelChildren = await fs.readdir(itemPath);
                entries.push({ childCount: nextLevelChildren.length, name, typeId: 'folder' });
                await listDirectoryEntriesRecursively(itemPath, nextLevelChildren);
            } else {
                entries.push({ lastModifiedAt: stats.mtimeMs, name, size: stats.size, typeId: 'object' });
            }
        }
    }

    const index = {};
    const toplevelNames = await fs.readdir(`public/${id}/`);
    await listDirectoryEntriesRecursively(`public/${id}/`, toplevelNames);
    fs.writeFile(`./public/${id}Index.json`, JSON.stringify(index), (error) => {
        if (error) return console.error(error);
    });
}

// Helpers - Bump Version
async function bumpVersion() {
    const packageData = await fs.readFile('package.json', 'utf8');
    const packageJSON = JSON.parse(packageData);
    const versionSegments = packageJSON.version.split('.');
    packageJSON.version = `${versionSegments[0]}.${versionSegments[1]}.${Number(versionSegments[2]) + 1}`;
    fs.writeFile('package.json', JSON.stringify(packageJSON, undefined, 4));
}

// Helpers - Download Context
async function downloadContext(contextId, outDir) {
    const result = dotenv.config({ path: '.env.local' });
    if (result.error) throw result.error;
    const env = result.parsed;

    const app = initializeApp({
        apiKey: env.VITE_FIREBASE_API_KEY,
        authDomain: env.VITE_FIREBASE_AUTH_DOMAIN,
        projectId: env.VITE_FIREBASE_PROJECT_ID,
        storageBucket: env.VITE_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: env.VITE_FIREBASE_MESSAGING_SENDER_ID,
        appId: env.VITE_FIREBASE_APP_ID
    });
    const db = getFirestore(app);

    await clearDirectory(outDir);

    await fs.writeFile(`${outDir}/whatIsContext.md`, '# What is a Context?\n...');

    const contextIndex = (await getDoc(doc(db, 'components', contextId))).data();
    await fs.writeFile(`${outDir}/contextIndex.json`, JSON.stringify(contextIndex));

    for (const areaConfig of contextIndex.areas) {
        await fs.mkdir(`${outDir}/${areaConfig.id}`);
        await fs.writeFile(`${outDir}/${areaConfig.id}/index.md`, `# ${areaConfig.label.en} Context Area\n...`);
        for (const modelConfig of areaConfig.models) {
            const modelConfig2 = (await getDoc(doc(db, 'componentItems', `${contextId}-model-${modelConfig.id}`))).data();
            await fs.mkdir(`${outDir}/${areaConfig.id}/${modelConfig.id}`);
            let modelMarkdown = `# ${modelConfig.label.en} Model\n${modelConfig2.description.en}\n`;
            modelMarkdown += '## Entities\n';
            for (const entityConfig of modelConfig2.entities.sort((left, right) => left.label.en.localeCompare(right.label.en))) {
                const entityConfig2 = (await getDoc(doc(db, 'componentItems', `${contextId}-entity-${entityConfig.id}`))).data();
                modelMarkdown += `### ${entityConfig.label.en} Entity\n${entityConfig2.description.en}\n`;
                modelMarkdown += '#### Events\n';
                modelMarkdown += '| Label | Description |\n';
                modelMarkdown += '| ----- | ----------- |\n';
                for (const eventConfig of entityConfig2.events.sort((left, right) => left.label.en.localeCompare(right.label.en))) {
                    modelMarkdown += `| ${eventConfig.label.en} | ${eventConfig.description.en} |\n`;
                }
                modelMarkdown += '#### Computations\n';
                modelMarkdown += '| Label | Description |\n';
                modelMarkdown += '| ----- | ----------- |\n';
                for (const computationConfig of entityConfig2.computations.sort((left, right) => left.label.en.localeCompare(right.label.en))) {
                    modelMarkdown += `| ${computationConfig.label.en} | |\n`;
                }
                modelMarkdown += '#### Characteristics\n';
                modelMarkdown += '| Label | Description |\n';
                modelMarkdown += '| ----- | ----------- |\n';
                for (const characteristicConfig of entityConfig2.characteristics.sort((left, right) => left.label.en.localeCompare(right.label.en))) {
                    modelMarkdown += `| ${characteristicConfig.label.en} | |\n`;
                }
            }
            modelMarkdown += '## Dimensions\n';
            for (const dimensionConfig of modelConfig2.dimensions.sort((left, right) => left.label.en.localeCompare(right.label.en))) {
                modelMarkdown += `| ${dimensionConfig.label.en} |\n`;
            }
            modelMarkdown += '## Views\n';
            for (const viewConfig of modelConfig2.views.sort((left, right) => left.label.en.localeCompare(right.label.en))) {
                modelMarkdown += `- ${viewConfig.label.en}\n`;
            }
            await fs.writeFile(`${outDir}/${areaConfig.id}/${modelConfig2.id}/index.md`, modelMarkdown);
        }
    }

    // Generate characteristics index page.
    let characteristicIndexMarkdown = '# Characteristic Index\n';
    const characteristicIndex = (await getDoc(doc(db, 'componentItems', `${contextId}-characteristics`))).data();
    for (const characteristicConfig of characteristicIndex.characteristics.sort((left, right) => left.label.en.localeCompare(right.label.en))) {
        characteristicIndexMarkdown += `- ${characteristicConfig.label.en}\n`;
    }
    await fs.writeFile(`${outDir}/characteristicIndex.md`, characteristicIndexMarkdown);

    // Generate computations index page.
    let computationIndexMarkdown = '# Computations Index\n';
    const computationsIndex = (await getDoc(doc(db, 'componentItems', `${contextId}-computations`))).data();
    for (const computationConfig of computationsIndex.computations.sort((left, right) => left.label.en.localeCompare(right.label.en))) {
        computationIndexMarkdown += `- ${computationConfig.label.en}\n`;
    }
    await fs.writeFile(`${outDir}/computationIndex.md`, computationIndexMarkdown);

    // Generate dimension index page.
    let dimensionIndexMarkdown = '# Dimension Index\n';
    const dimensionIndex = (await getDoc(doc(db, 'componentItems', `${contextId}-dimensions`))).data();
    for (const dimensionConfig of dimensionIndex.dimensions.sort((left, right) => left.label.en.localeCompare(right.label.en))) {
        dimensionIndexMarkdown += `- ${dimensionConfig.label.en}\n`;
    }
    await fs.writeFile(`${outDir}/dimensionIndex.md`, dimensionIndexMarkdown);

    // Generate entity index page.
    let entityIndexMarkdown = '# Entity Index\n';
    const entityIndex = (await getDoc(doc(db, 'componentItems', `${contextId}-entities`))).data();
    for (const entityConfig of entityIndex.entities.sort((left, right) => left.label.en.localeCompare(right.label.en))) {
        entityIndexMarkdown += `- ${entityConfig.label.en}\n`;
    }
    await fs.writeFile(`${outDir}/entityIndex.md`, entityIndexMarkdown);

    // Generate event index page.
    let eventIndexMarkdown = '# Event Index\n';
    const eventIndex = (await getDoc(doc(db, 'componentItems', `${contextId}-events`))).data();
    for (const eventConfig of eventIndex.events.sort((left, right) => left.label.en.localeCompare(right.label.en))) {
        eventIndexMarkdown += `- ${eventConfig.label.en}\n`;
    }
    await fs.writeFile(`${outDir}/eventIndex.md`, eventIndexMarkdown);

    // Generate model index page.
    let modelIndexMarkdown = '# Model Index\n';
    const modelIndex = (await getDoc(doc(db, 'componentItems', `${contextId}-models`))).data();
    for (const modelConfig of modelIndex.models.sort((left, right) => left.label.en.localeCompare(right.label.en))) {
        modelIndexMarkdown += `- ${modelConfig.label.en}\n`;
    }
    await fs.writeFile(`${outDir}/modelIndex.md`, modelIndexMarkdown);

    // const contextIdLength = contextId.length;
    // const contextIdLeadingChars = contextId.slice(0, contextIdLength - 1);
    // const contextIdLastChar = contextId.slice(contextIdLength - 1, contextId.length);
    // const nextContextId = contextIdLeadingChars + String.fromCharCode(contextIdLastChar.charCodeAt(0) + 1);

    // const querySnapshot = await getDocs(query(collection(db, 'componentItems'), where(documentId(), '>=', contextId), where(documentId(), '<', nextContextId)));
    // querySnapshot.forEach((doc) => {
    //     console.log(8888, doc.id);
    // });
}

// Helpers - Sync with Github
async function syncWithGitHub() {
    const packageData = await fs.readFile('package.json', 'utf8');
    const packageJSON = JSON.parse(packageData);
    await exec('git add .');
    await exec(`git commit -m v${packageJSON.version}`);
    await exec('git push origin main:main');
}

// Helpers - Upload Connector
async function uploadConnector() {
    const configJSON = JSON.parse(await fs.readFile('src/config.json', 'utf8'));
    const descriptionEN = await fs.readFile('src/description.en.md', 'utf8');
    // const result = dotenv.config({ path: '.env.local' });
    // if (result.error) throw result.error;
    const logo = await fs.readFile('src/logo.svg', 'utf8');
    const packageJSON = JSON.parse(await fs.readFile('package.json', 'utf8'));

    const formData = new FormData();
    formData.append('config', JSON.stringify({ ...configJSON, description: { en: descriptionEN }, logo, version: packageJSON.version }));
    const itemNames = await fs.readdir('dist');
    for (const itemName of itemNames) {
        const itemPath = path.join('dist', itemName);
        const stats = await fs.stat(itemPath);
        if (stats.isDirectory()) continue;
        const contentBlob = new Blob([await fs.readFile(itemPath, 'utf8')], { type: 'text/plain' });
        formData.append(itemName, contentBlob, itemName);
    }

    // TODO: Need to get 'api-dwizkzi4ga-ew.a.run.app' or portion of it from token.
    const url = 'https://api-dwizkzi4ga-ew.a.run.app/connectors';
    const response = await fetch(url, { method: 'POST', headers: { Authorization: process.env.DATAPOS_CONNECTOR_UPLOAD_TOKEN }, body: formData });
    if (!response.ok) throw new Error(await response.text());
}

// Helpers - Upload Context
async function uploadContext() {
    const items = [];
    const itemNames = await fs.readdir('dist');
    for (const itemName of itemNames) {
        const itemPath = path.join('dist', itemName);
        const stats = await fs.stat(itemPath);
        if (stats.isDirectory()) continue;
        items.push({ itemPath, itemName });
    }

    for (const item of items) {
        const data = JSON.parse(await fs.readFile(item.itemPath, 'utf8'));
        const url = 'https://api-dwizkzi4ga-ew.a.run.app/contexts';
        const response = await fetch(url, {
            method: 'POST',
            headers: { Authorization: process.env.DATAPOS_CONTEXT_UPLOAD_TOKEN, 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: item.itemName.slice(0, -5), config: data })
        });
        if (!response.ok) throw new Error(await response.text());
    }
}

// Helpers - Upload Presentation
async function uploadPresentations() {
    const items = [];
    const itemNames = await fs.readdir('dist');
    for (const itemName of itemNames) {
        const itemPath = path.join('dist', itemName);
        const stats = await fs.stat(itemPath);
        if (stats.isDirectory()) continue;
        items.push({ itemPath, itemName });
    }

    for (const item of items) {
        const data = JSON.parse(await fs.readFile(item.itemPath, 'utf8'));
        const url = 'https://api-dwizkzi4ga-ew.a.run.app/presentations';
        const response = await fetch(url, {
            method: 'POST',
            headers: { Authorization: process.env.DATAPOS_CONTEXT_UPLOAD_TOKEN, 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: item.itemName.slice(0, -5), config: data })
        });
        if (!response.ok) throw new Error(await response.text());
    }
}

// // Utility - Check Directory Exists
// const checkDirectoryExists = async (directoryPath) => {
//     try {
//         await fs.stat(directoryPath);
//         return true;
//     } catch (err) {
//         return false;
//     }
// };

// Utilities - Clear Directory
const clearDirectory = async (directoryPath) => {
    for (const itemName of await fs.readdir(directoryPath)) {
        const itemPath = `${directoryPath}/${itemName}`;
        const stats = await fs.stat(itemPath);
        if (stats.isDirectory()) {
            await fs.rm(itemPath, { recursive: true, force: true });
        } else {
            await fs.unlink(itemPath);
        }
    }
};

// Utilities - List Directory Entries
const listDirectoryEntries = async (path) => {
    try {
        return await fs.readdir(`${path}`);
    } catch (error) {
        issueCount++;
        console.warn(`WARN: Directory '${path}' not found or invalid.`);
        return [];
    }
};

// Utilities - Read JSON File
const readJSONFile = async (path) => {
    try {
        return JSON.parse(await fs.readFile(path, 'utf8'));
    } catch (error) {
        issueCount++;
        console.warn(`WARN: JSON file '${path}' not found or invalid.`);
        return {};
    }
};

// Utilities - Read Text File
const readTextFile = async (path) => {
    try {
        return await fs.readFile(path, 'utf8');
    } catch (error) {
        issueCount++;
        console.warn(`WARN: Markdown file '${path}' not found or invalid.`);
        return '';
    }
};

// Utilities - Render Markdown
const renderMarkdown = (markdownIt, content) => (content && content.en ? markdownIt.render(content.en) : '');

/// Exports
module.exports = {
    buildConfig,
    buildContext,
    buildPresentations,
    buildPublicDirectoryIndex,
    bumpVersion,
    downloadContext,
    syncWithGitHub,
    uploadConnector,
    uploadContext,
    uploadPresentations
};
