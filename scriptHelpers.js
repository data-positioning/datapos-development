// Dependencies - Vendor
const dotenv = require('dotenv');
const fs = require('fs').promises;

// Dependencies - Vendor (Promisify Exec)
const util = require('util');
const exec = util.promisify(require('child_process').exec);

// Module Variables
let issueCount = 0;

// Facilitators - Build Configuration
async function buildConfig() {
    const packageJSON = await readJSONFile('package.json');

    const dependencies = packageJSON.dependencies;
    const dependencyArray = [];

    for (const package of Object.entries(packageJSON.dependencies || {})) {
        if (package[0].startsWith('@datapos/datapos-')) {
            const segments = package[0].split('/');
            const childPackageJSON = await getJSONFileFromGithub(segments[1], 'package.json');
            for (const childPackage of Object.entries(childPackageJSON.dependencies || {})) {
                if (childPackage[0].startsWith('@datapos/datapos-')) continue;
                if (dependencies[childPackage[0]]) continue;
                dependencies[childPackage[0]] = childPackage[1];
                const childSegments = package[0].split('/');
                dependencyArray.push({ name: childPackage[0], repo: childSegments[1], version: childPackage[1] });
            }
        } else {
            dependencyArray.push({ name: package[0], repo: 'datapos-workbench', version: package[1] });
        }
    }
    dependencyArray.sort((left, right) => left.name.localeCompare(right.name));

    fs.writeFile('src/config.json', JSON.stringify({ id: packageJSON.name, dependencies, dependencyArray, version: packageJSON.version }, undefined, 4));
}

// Facilitators - Build Public Directory Index
async function buildPublicDirectoryIndex(id) {
    async function listDirectoryEntriesRecursively(directoryPath, names) {
        const entries = [];
        const localDirectoryPath = directoryPath.substring(`public/${id}`.length);
        index[localDirectoryPath.endsWith('/') ? localDirectoryPath : `${localDirectoryPath}/`] = entries;
        for (const name of names) {
            const itemPath = `${directoryPath}/${name}`;
            const stats = await fs.stat(itemPath);
            if (stats.isDirectory()) {
                const nextLevelChildren = await fs.readdir(itemPath);
                entries.push({ childCount: nextLevelChildren.length, name: `${name}/`, typeId: 'folder' });
                await listDirectoryEntriesRecursively(itemPath, nextLevelChildren);
            } else {
                entries.push({ lastModifiedAt: stats.mtimeMs, name, size: stats.size, typeId: 'object' });
            }
        }
        entries.sort((left, right) => right.typeId.localeCompare(left.typeId) || left.name.localeCompare(right.name));
    }

    const index = {};
    const toplevelNames = await fs.readdir(`public/${id}/`);
    await listDirectoryEntriesRecursively(`public/${id}/`, toplevelNames);
    fs.writeFile(`./public/${id}Index.json`, JSON.stringify(index), (error) => {
        if (error) return console.error(error);
    });
}

// Facilitators - Bump Version
async function bumpVersion() {
    const packageJSON = await readJSONFile('package.json');
    const versionSegments = packageJSON.version.split('.');
    packageJSON.version = `${versionSegments[0]}.${versionSegments[1]}.${Number(versionSegments[2]) + 1}`;
    fs.writeFile('package.json', JSON.stringify(packageJSON, undefined, 4));
    console.log(`Bumped to version ${packageJSON.version}.`);
}

// Facilitators - Clear Directory
async function clearDirectory(directoryPath) {
    for (const itemName of await fs.readdir(directoryPath)) {
        const itemPath = `${directoryPath}/${itemName}`;
        const stats = await fs.stat(itemPath);
        if (stats.isDirectory()) {
            await fs.rm(itemPath, { recursive: true, force: true });
        } else {
            await fs.unlink(itemPath);
        }
    }
}

// Facilitators - Compile Presenter
async function compilePresenter() {
    const packageJSON = await readJSONFile('package.json');
    const packageName = packageJSON.name;
    const dataJSON = await readJSONFile('src/presentations/data.json');
    const presenterConfig = { label: dataJSON.label || packageName, children: [], presentations: [] };
    // await clearDirectory('dist');
    await compilePresenterFolder('src/presentations', 'areas', presenterConfig.children, presenterConfig.presentations);
    fs.writeFile(`dist/${packageName}.json`, JSON.stringify(presenterConfig));
    if (issueCount > 0) console.warn(`WARNING: ${issueCount} issues(s) encountered.`);
}

// Facilitators - Sync with Github
async function syncWithGitHub() {
    const packageJSON = await readJSONFile('package.json');
    await exec('git add .');
    await exec(`git commit -m v${packageJSON.version}`);
    await exec('git push origin main:main');
}

// Facilitators - Upload Plugin
async function uploadPlugin() {
    const packageJSON = await readJSONFile('package.json');

    const result = dotenv.config({ path: '.env.local' });
    if (result.error) throw result.error;
    const env = result.parsed;

    const configJSON = await readJSONFile('src/config.json');
    configJSON.id = packageJSON.name;
    configJSON.dependencies = packageJSON.dependencies || {};
    configJSON.version = packageJSON.version;

    configJSON.description = await readTextFile('src/description.en.md');
    configJSON.logo = await readTextFile('src/logo.svg');

    await pushContentToGithub(packageJSON, env, JSON.stringify(configJSON), 'config.json');

    await uploadPluginFolder(packageJSON, env, 'dist');
}

/// Exports
module.exports = { buildConfig, buildPublicDirectoryIndex, bumpVersion, clearDirectory, compilePresenter, syncWithGitHub, uploadPlugin };

// Utilities - Compile Presenter Folder
const compilePresenterFolder = async (folderPath, levelTypeId, children, presentations) => {
    const itemNames = await fs.readdir(folderPath);
    for (const itemName of itemNames) {
        const itemPath = `${folderPath}/${itemName}`;
        const stats = await fs.stat(itemPath);
        if (stats.isDirectory()) {
            if (levelTypeId === 'areas') {
                const levelData = await readJSONFile(`${itemPath}/data.json`);
                const areaConfig = { id: itemName, label: levelData.label || { en: itemName }, children: [], presentations: [] };
                children.push(areaConfig);
                await compilePresenterFolder(itemPath, 'topics', areaConfig.children, areaConfig.presentations);
            } else if (levelTypeId === 'topics') {
                const levelData = await readJSONFile(`${itemPath}/data.json`);
                const topicConfig = { id: itemName, label: levelData.label || { en: itemName }, children: [], presentations: [] };
                children.push(topicConfig);
                await compilePresenterFolder(itemPath, 'subTopics', topicConfig.children, topicConfig.presentations);
            } else if (levelTypeId === 'subTopics') {
                const levelData = await readJSONFile(`${itemPath}/data.json`);
                const subTopicConfig = { id: itemName, label: levelData.label || { en: itemName }, presentations: [] };
                children.push(subTopicConfig);
                await compilePresenterFolder(itemPath, 'presentations', undefined, subTopicConfig.presentations);
            } else {
                issueCount++;
                console.warn(`WARN: Ignoring sub directory '${itemPath}'.`);
            }
        } else {
            if (itemName === 'data.json') continue;
            if (itemName.endsWith('.js')) {
                presentations.push({ id: itemName, typeId: 'javascript' });
            } else if (itemName.endsWith('.json')) {
                presentations.push({ id: itemName, typeId: 'json' });
            } else {
                issueCount++;
                console.warn(`WARN: Ignoring file '${itemPath}'.`);
            }
        }
    }
};

// Utilities - Get JSON File From Github
const getJSONFileFromGithub = async (repoName, filePath) => {
    const result = dotenv.config({ path: '.env.local' });
    if (result.error) throw result.error;
    const env = result.parsed;

    const url = `https://api.github.com/repos/data-positioning/${repoName}/contents/${filePath}?ref=main`;
    console.log('URL', url);
    const getResponse = await fetch(url, {
        headers: { Accept: 'application/vnd.github.v3+json', Authorization: `token ${env.GITHUB_API_TOKEN}` },
        method: 'GET'
    });
    if (!getResponse.ok) throw new Error(`HTTP error! status: ${getResponse.status}`);
    const data = await getResponse.json();
    if (data.type !== 'file') throw new Error('The content type is not a file');
    const base64Content = data.content;
    const jsonContent = Buffer.from(base64Content, 'base64').toString('utf8');
    const packageJson = JSON.parse(jsonContent);
    return packageJson;
};

// Utilities - Push Content to Github
const pushContentToGithub = async (packageJSON, env, fileContent, itemPath) => {
    const url = `https://api.github.com/repos/data-positioning/datapos-plugins/contents/${packageJSON.name}/${itemPath}`;

    const getResponse = await fetch(url, {
        headers: { Accept: 'application/vnd.github.v3+json', Authorization: `token ${env.GITHUB_API_TOKEN}` },
        method: 'GET'
    });
    const sha = getResponse.ok ? (await getResponse.json()).sha : undefined; // The SHA-1 hash (Secure Hash Algorithm) of the Git object.

    const encodedContent = Buffer.from(fileContent).toString('base64');
    const putResponse = await fetch(url, {
        body: JSON.stringify({ content: encodedContent, message: `v${packageJSON.version}`, sha }),
        headers: { Accept: 'application/vnd.github.v3+json', Authorization: `token ${env.GITHUB_API_TOKEN}`, 'Content-Type': 'application/json' },
        method: 'PUT'
    });
    if (!putResponse.ok) console.log(await putResponse.text());
    console.log(`Pushed '${itemPath}' to Github.`);
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
        console.warn(`WARN: Text file '${path}' not found or invalid.`);
        return undefined;
    }
};

// Utilities - Upload Plugin Folder
const uploadPluginFolder = async (packageJSON, env, folderPath) => {
    for (const itemName of await fs.readdir(folderPath)) {
        const itemPath = `${folderPath}/${itemName}`;
        const stats = await fs.stat(itemPath);
        if (stats.isDirectory()) {
            if (!itemPath.startsWith('dist/types')) await uploadPluginFolder(packageJSON, env, itemPath);
        } else {
            const fileContent = await readTextFile(itemPath);
            await pushContentToGithub(packageJSON, env, fileContent, itemPath.substring(5));
        }
    }
};

// // Helpers - Build Context - Prepare Context
// const buildContext_PrepareContext = async (path) => {
//     const markdownIt = new MarkdownIt();
//     const itemNames = await fs.readdir(path);
//     for (const itemName of itemNames) {
//         const itemPath = `${path}/${itemName}`;
//         const stats = await fs.stat(itemPath);
//         if (stats.isDirectory()) {
//             const itemPathSegments = itemPath.split('/');
//             if (itemPathSegments.length === 2) {
//                 const areaId = itemPathSegments[1];
//                 const areaData = await readJSONFile(`${itemPath}/data.json`, 'utf8');
//                 areaData.description = { en: (await readTextFile(`${itemPath}/description.en.md`)) || '' };
//                 areaConfig = {
//                     id: areaId,
//                     label: areaData.label || { en: areaId },
//                     description: { en: renderMarkdown(markdownIt, areaData.description) },
//                     sequence: areaData.sequence,
//                     typeId: 'area',
//                     models: []
//                 };
//                 contextConfig.areas.push(areaConfig);
//                 await buildContext_PrepareContext(itemPath);
//             } else if (itemPathSegments.length === 3) {
//                 const modelId = itemPathSegments[2];
//                 const modelData = await readJSONFile(`${itemPath}/data.json`, 'utf8');
//                 modelData.description = { en: (await readTextFile(`${itemPath}/description.en.md`)) || '' };
//                 modelData.entityDiagram = (await readTextFile(`${itemPath}/entities/diagram.svg`)) || '';
//                 modelConfig = {
//                     id: modelId,
//                     label: modelData.label || { en: modelId },
//                     description: { en: renderMarkdown(markdownIt, modelData.description) },
//                     entityDiagram: modelData.entityDiagram,
//                     sequence: modelData.sequence,
//                     typeId: 'model',
//                     dimensions: [],
//                     entities: [],
//                     views: []
//                 };
//                 const dimensionPaths = (await listDirectoryEntries(`${itemPath}/dimensions`)).filter((name) => name.endsWith('.json'));
//                 for (const dimensionPath of dimensionPaths) {
//                     const dimensionId = dimensionPath.split('.')[0];
//                     const dimensionData = await readJSONFile(`${itemPath}/dimensions/${dimensionId}.json`);
//                     dimensionData.description = { en: (await readTextFile(`${itemPath}/dimensions/${dimensionId}.en.md`)) || '' };
//                     const dimensionConfig = {
//                         id: dimensionId,
//                         label: dimensionData.label || { en: dimensionId },
//                         description: { en: renderMarkdown(markdownIt, dimensionData.description) },
//                         typeId: 'dimension',
//                         levels: []
//                     };
//                     modelConfig.dimensions.push(dimensionConfig);
//                 }
//                 const entityPaths = (await listDirectoryEntries(`${itemPath}/entities`)).filter((name) => name.endsWith('.json'));
//                 for (const entityPath of entityPaths) {
//                     const entityId = entityPath.split('.')[0];
//                     const entityData = await readJSONFile(`${itemPath}/entities/${entityId}.json`);
//                     entityData.description = { en: (await readTextFile(`${itemPath}/entities/${entityId}.en.md`)) || '...' };
//                     const entityConfig = {
//                         id: entityId,
//                         label: entityData.label || { en: entityId },
//                         description: { en: renderMarkdown(markdownIt, entityData.description) },
//                         typeId: 'entity',
//                         characteristics: [],
//                         computations: [],
//                         events: []
//                     };
//                     for (const characteristic of entityData.characteristics || []) {
//                         const characteristicConfig = {
//                             entityTypeId: characteristic.entityTypeId,
//                             id: characteristic.id,
//                             label: characteristic.label || { en: characteristic.id },
//                             description: characteristic.description || { en: '' },
//                             typeId: 'characteristic',
//                             type: characteristic.type
//                         };
//                         entityConfig.characteristics.push(characteristicConfig);
//                     }
//                     for (const computation of entityData.computations || []) {
//                         const computationConfig = {
//                             id: computation.id,
//                             label: computation.label || { en: computation.id },
//                             description: computation.description || { en: '' },
//                             typeId: 'computation',
//                             formula: computation.formula
//                         };
//                         entityConfig.computations.push(computationConfig);
//                     }
//                     for (const event of entityData.events || []) {
//                         const eventConfig = {
//                             id: event.id,
//                             label: event.label || { en: event.id },
//                             description: event.description || { en: '' },
//                             typeId: 'event'
//                         };
//                         entityConfig.events.push(eventConfig);
//                     }
//                     modelConfig.entities.push(entityConfig);
//                 }
//                 areaConfig.models.push(modelConfig);
//             } else {
//                 throw new Error(`Unexpected directory level: ${itemPath}.`);
//             }
//         }
//     }
// };

// // Helpers - Build Context - Output Context
// const buildContext_OutputContext = async () => {
//     const characteristics = [];
//     const computations = [];
//     const dimensions = [];
//     const entities = [];
//     const events = [];
//     const models = [];
//     const views = [];

//     await clearDirectory('dist');

//     const contextIndex = { id: 'default', label: contextConfig.label, typeId: contextConfig.typeId, areas: [] };
//     for (const areaConfig of contextConfig.areas) {
//         const areaId = `${areaConfig.id}`;
//         const areaReference = { id: areaId, label: areaConfig.label, areaSequence: areaConfig.sequence, models: [] };
//         for (const model of areaConfig.models) {
//             const modelId = `${model.id}`;
//             const modelConfig = {
//                 id: modelId,
//                 label: model.label,
//                 description: model.description,
//                 entityDiagram: model.entityDiagram,
//                 sequence: model.sequence,
//                 typeId: model.typeId,
//                 dimensions: [],
//                 entities: [],
//                 views: []
//             };

//             for (const dimension of model.dimensions) {
//                 const dimensionId = `${dimension.id}`;
//                 const dimensionConfig = {
//                     id: dimensionId,
//                     label: dimension.label,
//                     description: dimension.description,
//                     typeId: dimension.typeId,
//                     levels: dimension.levels
//                 };
//                 fs.writeFile(`dist/datapos-context-default-dimension-${dimensionId}.json`, JSON.stringify(dimensionConfig));
//                 const dimensionReference = { id: dimensionId, label: dimension.label };
//                 modelConfig.dimensions.push(dimensionReference);
//                 dimensions.push({
//                     ...dimensionReference,
//                     modelId: modelId,
//                     modelLabel: model.label,
//                     areaId: areaConfig.Id,
//                     areaLabel: areaConfig.label,
//                     areaSequence: areaConfig.sequence
//                 });
//             }

//             for (const entity of model.entities) {
//                 const entityId = `${entity.id}`;
//                 const entityConfig = {
//                     id: entityId,
//                     label: entity.label,
//                     description: entity.description,
//                     typeId: entity.typeId,
//                     characteristics: entity.characteristics,
//                     computations: entity.computations,
//                     events: entity.events
//                 };
//                 fs.writeFile(`dist/datapos-context-default-entity-${entityId}.json`, JSON.stringify(entityConfig));
//                 const entityReference = { id: entityId, label: entity.label };
//                 modelConfig.entities.push(entityReference);
//                 entities.push({ ...entityReference, modelId: modelId, modelLabel: model.label, areaId: areaId, areaLabel: areaConfig.label, areaSequence: areaConfig.sequence });
//             }

//             for (const view of model.views) {
//                 const viewId = `${view.id}`;
//                 const viewConfig = {
//                     id: viewId,
//                     label: view.label,
//                     description: view.description,
//                     typeId: view.typeId
//                 };
//                 fs.writeFile(`dist/datapos-context-default-view-${viewId}.json`, JSON.stringify(viewConfig));
//                 const viewReference = { id: viewId, label: view.label };
//                 modelConfig.views.push(viewReference);
//                 views.push({ ...viewReference, modelId: modelId, modelLabel: model.label, areaId: areaId, areaLabel: areaConfig.label, areaSequence: areaConfig.sequence });
//             }
//             fs.writeFile(`dist/datapos-context-default-model-${modelId}.json`, JSON.stringify(modelConfig));
//             const modelReference = { id: modelId, label: model.label, sequence: model.sequence };
//             areaReference.models.push(modelReference);
//             models.push({ ...modelReference, areaId: areaId, areaLabel: areaConfig.label, areaSequence: areaConfig.sequence });
//         }
//         contextIndex.areas.push(areaReference);
//     }
//     fs.writeFile('dist/datapos-context-default.json', JSON.stringify(contextIndex));
//     fs.writeFile('dist/datapos-context-default-models.json', JSON.stringify({ models: models }));
//     fs.writeFile('dist/datapos-context-default-dimensions.json', JSON.stringify({ dimensions: dimensions }));
//     fs.writeFile('dist/datapos-context-default-entities.json', JSON.stringify({ entities: entities }));
//     fs.writeFile('dist/datapos-context-default-characteristics.json', JSON.stringify({ characteristics: characteristics }));
//     fs.writeFile('dist/datapos-context-default-computations.json', JSON.stringify({ computations: computations }));
//     fs.writeFile('dist/datapos-context-default-events.json', JSON.stringify({ events: events }));
//     fs.writeFile('dist/datapos-context-default-views.json', JSON.stringify({ views: views }));
// };

// // Helpers - Download Context
// async function downloadContext(contextId, outDir) {
//     const result = dotenv.config({ path: '.env.local' });
//     if (result.error) throw result.error;
//     const env = result.parsed;

//     const app = initializeApp({
//         apiKey: env.VITE_FIREBASE_API_KEY,
//         authDomain: env.VITE_FIREBASE_AUTH_DOMAIN,
//         projectId: env.VITE_FIREBASE_PROJECT_ID,
//         storageBucket: env.VITE_FIREBASE_STORAGE_BUCKET,
//         messagingSenderId: env.VITE_FIREBASE_MESSAGING_SENDER_ID,
//         appId: env.VITE_FIREBASE_APP_ID
//     });
//     const db = getFirestore(app);

//     await clearDirectory(outDir);

//     await fs.writeFile(`${outDir}/overview.md`, '# Context\n\n...');

//     const contextIndex = (await getDoc(doc(db, 'components', contextId))).data();
//     await fs.writeFile(`${outDir}/contextIndex.json`, JSON.stringify(contextIndex));

//     for (const areaConfig of contextIndex.areas) {
//         await fs.mkdir(`${outDir}/${areaConfig.id}`);
//         await fs.writeFile(`${outDir}/${areaConfig.id}/index.md`, `# ${areaConfig.label.en} Context\n...`);
//         for (const modelConfig of areaConfig.models) {
//             const modelConfig2 = (await getDoc(doc(db, 'componentItems', `${contextId}-model-${modelConfig.id}`))).data();
//             await fs.mkdir(`${outDir}/${areaConfig.id}/${modelConfig.id}`);
//             let modelMarkdown = '';
//             modelMarkdown += `<script setup lang="ts">\n`;
//             modelMarkdown += `import CharacteristicTable from '/.vitePress/theme/components/CharacteristicTable.vue';\n`;
//             modelMarkdown += `import ComputationTable from '/.vitePress/theme/components/ComputationTable.vue';\n`;
//             modelMarkdown += `import EventTable from '/.vitePress/theme/components/EventTable.vue';\n`;
//             modelMarkdown += `</script>\n\n`;
//             modelMarkdown += `# ${modelConfig.label.en} Model\n${modelConfig2.description.en}\n`;
//             modelMarkdown += '## Entities\n\n';

//             modelMarkdown += `${modelConfig2.entityDiagram}\n\n`;

//             for (const entityConfig of modelConfig2.entities.sort((left, right) => left.label.en.localeCompare(right.label.en))) {
//                 const entityConfig2 = (await getDoc(doc(db, 'componentItems', `${contextId}-entity-${entityConfig.id}`))).data();
//                 modelMarkdown += `### ${entityConfig.label.en} Entity\n${entityConfig2.description.en}\n`;

//                 modelMarkdown += '#### Events\n';
//                 modelMarkdown += `<EventTable :eventConfigs="[\n`;
//                 for (const eventConfig of entityConfig2.events) {
//                     modelMarkdown += `    {label: '${eventConfig.label.en}', description: '${eventConfig.description.en.replace("'", "\\'")}'},\n`;
//                 }
//                 modelMarkdown += `]"/>\n\n`;

//                 modelMarkdown += '#### Computations\n';
//                 modelMarkdown += `<ComputationTable :computationConfigs="[\n`;
//                 for (const computationConfig of entityConfig2.computations) {
//                     modelMarkdown += `    {label: '${computationConfig.label.en}', description: '${computationConfig.description.en.replace("'", "\\'")}'},\n`;
//                 }
//                 modelMarkdown += `]"/>\n\n`;

//                 modelMarkdown += '#### Characteristics\n';
//                 modelMarkdown += `<CharacteristicTable :characteristicConfigs="[\n`;
//                 for (const characteristicConfig of entityConfig2.characteristics) {
//                     modelMarkdown += `    {label: '${characteristicConfig.label.en}', description: '${characteristicConfig.description.en.replace("'", "\\'")}'},\n`;
//                 }
//                 modelMarkdown += `]"/>\n\n`;
//             }
//             modelMarkdown += '## Dimensions\n';
//             for (const dimensionConfig of modelConfig2.dimensions.sort((left, right) => left.label.en.localeCompare(right.label.en))) {
//                 modelMarkdown += `| ${dimensionConfig.label.en} |\n`;
//             }
//             modelMarkdown += '## Views\n';
//             for (const viewConfig of modelConfig2.views.sort((left, right) => left.label.en.localeCompare(right.label.en))) {
//                 modelMarkdown += `- ${viewConfig.label.en}\n`;
//             }
//             await fs.writeFile(`${outDir}/${areaConfig.id}/${modelConfig2.id}/index.md`, modelMarkdown);
//         }
//     }

//     // Generate characteristics index page.
//     let characteristicIndexMarkdown = '# Characteristic Index\n';
//     const characteristicIndex = (await getDoc(doc(db, 'componentItems', `${contextId}-characteristics`))).data();
//     for (const characteristicConfig of characteristicIndex.characteristics.sort((left, right) => left.label.en.localeCompare(right.label.en))) {
//         characteristicIndexMarkdown += `- ${characteristicConfig.label.en}\n`;
//     }
//     await fs.writeFile(`${outDir}/characteristicIndex.md`, characteristicIndexMarkdown);

//     // Generate computations index page.
//     let computationIndexMarkdown = '# Computations Index\n';
//     const computationsIndex = (await getDoc(doc(db, 'componentItems', `${contextId}-computations`))).data();
//     for (const computationConfig of computationsIndex.computations.sort((left, right) => left.label.en.localeCompare(right.label.en))) {
//         computationIndexMarkdown += `- ${computationConfig.label.en}\n`;
//     }
//     await fs.writeFile(`${outDir}/computationIndex.md`, computationIndexMarkdown);

//     // Generate dimension index page.
//     let dimensionIndexMarkdown = '# Dimension Index\n';
//     const dimensionIndex = (await getDoc(doc(db, 'componentItems', `${contextId}-dimensions`))).data();
//     for (const dimensionConfig of dimensionIndex.dimensions.sort((left, right) => left.label.en.localeCompare(right.label.en))) {
//         dimensionIndexMarkdown += `- ${dimensionConfig.label.en}\n`;
//     }
//     await fs.writeFile(`${outDir}/dimensionIndex.md`, dimensionIndexMarkdown);

//     // Generate entity index page.
//     let entityIndexMarkdown = '# Entity Index\n';
//     const entityIndex = (await getDoc(doc(db, 'componentItems', `${contextId}-entities`))).data();
//     for (const entityConfig of entityIndex.entities.sort((left, right) => left.label.en.localeCompare(right.label.en))) {
//         entityIndexMarkdown += `- ${entityConfig.label.en}\n`;
//     }
//     await fs.writeFile(`${outDir}/entityIndex.md`, entityIndexMarkdown);

//     // Generate event index page.
//     let eventIndexMarkdown = '# Event Index\n';
//     const eventIndex = (await getDoc(doc(db, 'componentItems', `${contextId}-events`))).data();
//     for (const eventConfig of eventIndex.events.sort((left, right) => left.label.en.localeCompare(right.label.en))) {
//         eventIndexMarkdown += `- ${eventConfig.label.en}\n`;
//     }
//     await fs.writeFile(`${outDir}/eventIndex.md`, eventIndexMarkdown);

//     // Generate model index page.
//     let modelIndexMarkdown = '# Model Index\n';
//     const modelIndex = (await getDoc(doc(db, 'componentItems', `${contextId}-models`))).data();
//     for (const modelConfig of modelIndex.models.sort((left, right) => left.label.en.localeCompare(right.label.en))) {
//         modelIndexMarkdown += `- ${modelConfig.label.en}\n`;
//     }
//     await fs.writeFile(`${outDir}/modelIndex.md`, modelIndexMarkdown);

//     // const contextIdLength = contextId.length;
//     // const contextIdLeadingChars = contextId.slice(0, contextIdLength - 1);
//     // const contextIdLastChar = contextId.slice(contextIdLength - 1, contextId.length);
//     // const nextContextId = contextIdLeadingChars + String.fromCharCode(contextIdLastChar.charCodeAt(0) + 1);

//     // const querySnapshot = await getDocs(query(collection(db, 'componentItems'), where(documentId(), '>=', contextId), where(documentId(), '<', nextContextId)));
//     // querySnapshot.forEach((doc) => {
//     //     console.log(8888, doc.id);
//     // });
// }

// // Helpers - Upload Connector
// async function uploadConnector() {
//     const input = await fs.readFile('src/config.json', 'utf8');

//     const configJSON = JSON.parse(input);
//     const descriptionEN = await fs.readFile('src/description.en.md', 'utf8');
//     // const result = dotenv.config({ path: '.env.local' });
//     // if (result.error) throw result.error;
//     const logo = await fs.readFile('src/logo.svg', 'utf8');
//     const packageJSON = JSON.parse(await fs.readFile('package.json', 'utf8'));

//     const formData = new FormData();
//     formData.append('config', JSON.stringify({ ...configJSON, description: { en: descriptionEN }, logo, version: packageJSON.version }));
//     const itemNames = await fs.readdir('dist');
//     for (const itemName of itemNames) {
//         const itemPath = path.join('dist', itemName);
//         const stats = await fs.stat(itemPath);
//         if (stats.isDirectory()) continue;
//         const contentBlob = new Blob([await fs.readFile(itemPath, 'utf8')], { type: 'text/plain' });
//         formData.append(itemName, contentBlob, itemName);
//     }

//     // TODO: Need to get 'api-dwizkzi4ga-ew.a.run.app' or portion of it from token.
//     const url = 'https://api-dwizkzi4ga-ew.a.run.app/connectors';
//     const response = await fetch(url, { method: 'POST', headers: { Authorization: process.env.DATAPOS_CONNECTOR_UPLOAD_TOKEN }, body: formData });
//     if (!response.ok) throw new Error(await response.text());

//     // ...
//     const result = dotenv.config({ path: '.env.local' });
//     if (result.error) throw result.error;
//     const env = result.parsed;

//     const itemNames2 = await fs.readdir('dist');
//     for (const itemName of itemNames2) {
//         console.log(1111, itemName);
//         const itemPath = path.join('dist', itemName);
//         const stats = await fs.stat(itemPath);
//         if (stats.isDirectory()) continue;

//         const response1 = await fetch(`https://api.github.com/repos/data-positioning/datapos-test/contents/${itemName}`, {
//             method: 'GET',
//             headers: { Accept: 'application/vnd.github.v3+json', Authorization: `token ${env.GITHUB_API_TOKEN}` }
//         });
//         const sha = response1.ok ? (await response1.json()).sha : undefined; // The SHA-1 hash (Secure Hash Algorithm) of the Git object.

//         const response2 = await fetch(`https://api.github.com/repos/data-positioning/datapos-test/contents/${itemName}`, {
//             method: 'PUT',
//             body: JSON.stringify({ content: btoa(input), message: `v${packageJSON.version}`, sha }),
//             headers: {
//                 Accept: 'application/vnd.github.v3+json',
//                 Authorization: `token ${env.GITHUB_API_TOKEN}`,
//                 'Content-Type': 'application/json'
//             }
//         });
//         if (!response2.ok) console.log(await response2.text());
//     }
// }

// // Helpers - Upload Context
// async function uploadContext() {
//     const items = [];
//     const itemNames = await fs.readdir('dist');
//     for (const itemName of itemNames) {
//         const itemPath = path.join('dist', itemName);
//         const stats = await fs.stat(itemPath);
//         if (stats.isDirectory()) continue;
//         items.push({ itemPath, itemName });
//     }

//     for (const item of items) {
//         const data = JSON.parse(await fs.readFile(item.itemPath, 'utf8'));
//         const url = 'https://api-dwizkzi4ga-ew.a.run.app/contexts';
//         const response = await fetch(url, {
//             method: 'POST',
//             headers: { Authorization: process.env.DATAPOS_CONTEXT_UPLOAD_TOKEN, 'Content-Type': 'application/json' },
//             body: JSON.stringify({ name: item.itemName.slice(0, -5), config: data })
//         });
//         if (!response.ok) throw new Error(await response.text());
//     }
// }

// // Helpers - Upload Presentation
// async function uploadPresentations() {
//     const items = [];
//     const itemNames = await fs.readdir('dist');
//     for (const itemName of itemNames) {
//         const itemPath = path.join('dist', itemName);
//         const stats = await fs.stat(itemPath);
//         if (stats.isDirectory()) continue;
//         items.push({ itemPath, itemName });
//     }

//     for (const item of items) {
//         const data = JSON.parse(await fs.readFile(item.itemPath, 'utf8'));
//         const url = 'https://api-dwizkzi4ga-ew.a.run.app/presentations';
//         const response = await fetch(url, {
//             method: 'POST',
//             headers: { Authorization: process.env.DATAPOS_CONTEXT_UPLOAD_TOKEN, 'Content-Type': 'application/json' },
//             body: JSON.stringify({ name: item.itemName.slice(0, -5), config: data })
//         });
//         if (!response.ok) throw new Error(await response.text());
//     }
// }

// // Utility - Check Directory Exists
// const checkDirectoryExists = async (directoryPath) => {
//     try {
//         await fs.stat(directoryPath);
//         return true;
//     } catch (err) {
//         return false;
//     }
// };

// // Utilities - Render Markdown
// const renderMarkdown = (markdownIt, content) => (content && content.en ? markdownIt.render(content.en) : '');
