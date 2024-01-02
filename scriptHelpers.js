// Dependencies
const dotenv = require('dotenv');
const fs = require('fs').promises;
const MarkdownIt = require('markdown-it');
const path = require('path');

// import { initializeApp } from 'firebase/app';
// import { loadEnv } from 'vitepress';
// import { collection, doc, getDoc, getDocs, getFirestore } from 'firebase/firestore';

const firebaseApp = require('firebase/app');
console.log('firebaseApp', firebaseApp);

// Dependencies - Promisify Exec
const util = require('util');
const exec = util.promisify(require('child_process').exec);

// Module Variables
let contextConfig;
let focusConfig;
let focusLevel1Config;
let focusLevel2Config;
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
    contextConfig = { label: contextData.label, typeId: 'context', focuses: [] };
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
                const focusId = itemPathSegments[1];
                const focusData = await readJSONFile(`${itemPath}/data.json`, 'utf8');
                focusData.description = { en: await readTextFile(`${itemPath}/description.en.md`) };
                focusConfig = {
                    id: focusId,
                    label: focusData.label || { en: focusId },
                    description: { en: renderMarkdown(markdownIt, focusData.description) },
                    typeId: 'focus',
                    models: []
                };
                contextConfig.focuses.push(focusConfig);
                await buildContext_PrepareContext(itemPath);
            } else if (itemPathSegments.length === 3) {
                const modelId = itemPathSegments[2];
                const modelData = await readJSONFile(`${itemPath}/data.json`, 'utf8');
                modelData.description = { en: await readTextFile(`${itemPath}/description.en.md`) };
                modelConfig = {
                    id: modelId,
                    label: modelData.label || { en: modelId },
                    description: { en: renderMarkdown(markdownIt, modelData.description) },
                    typeId: 'model',
                    dimensions: [],
                    entities: [],
                    views: []
                };
                const dimensionPaths = (await listDirectoryEntries(`${itemPath}/dimensions`)).filter((name) => name.endsWith('.json'));
                for (const dimensionPath of dimensionPaths) {
                    const dimensionId = dimensionPath.split('.')[0];
                    const dimensionData = await readJSONFile(`${itemPath}/dimensions/${dimensionId}.json`);
                    dimensionData.description = { en: await readTextFile(`${itemPath}/dimensions/${dimensionId}.en.md`) };
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
                    entityData.description = { en: await readTextFile(`${itemPath}/entities/${entityId}.en.md`) };
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
                            description: { en: renderMarkdown(markdownIt, characteristic.description) },
                            typeId: 'characteristic',
                            type: characteristic.type
                        };
                        entityConfig.characteristics.push(characteristicConfig);
                    }
                    for (const computation of entityData.computations || []) {
                        const computationConfig = {
                            id: computation.id,
                            label: computation.label || { en: computation.id },
                            description: { en: renderMarkdown(markdownIt, computation.description) },
                            typeId: 'computation',
                            formula: computation.formula
                        };
                        entityConfig.computations.push(computationConfig);
                    }
                    for (const event of entityData.events || []) {
                        const eventConfig = {
                            id: event.id,
                            label: event.label || { en: event.id },
                            description: { en: renderMarkdown(markdownIt, event.description) },
                            typeId: 'event'
                        };
                        entityConfig.events.push(eventConfig);
                    }
                    modelConfig.entities.push(entityConfig);
                }
                focusConfig.models.push(modelConfig);
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

    const context = { id: 'datapos-context-default', label: contextConfig.label, typeId: contextConfig.typeId, focuses: [] };
    for (const focus of contextConfig.focuses) {
        const focusId = `datapos-context-default-focus-${focus.id}`;
        const focusReference = { id: focusId, label: focus.label, models: [] };
        for (const model of focus.models) {
            const modelId = `datapos-context-default-model-${model.id}`;
            const modelConfig = {
                id: modelId,
                label: model.label,
                description: model.description,
                typeId: model.typeId,
                dimensions: [],
                entities: [],
                views: []
            };

            for (const dimension of model.dimensions) {
                const dimensionId = `datapos-context-default-dimension-${dimension.id}`;
                const dimensionConfig = {
                    id: dimensionId,
                    label: dimension.label,
                    description: dimension.description,
                    typeId: dimension.typeId,
                    levels: dimension.levels
                };
                fs.writeFile(`dist/${dimensionId}.json`, JSON.stringify(dimensionConfig));
                const dimensionReference = { id: dimensionId, label: dimension.label };
                modelConfig.dimensions.push(dimensionReference);
                dimensions.push({ ...dimensionReference, modelId: modelId, modelLabel: model.label, focusId: focusId, focusLabel: focus.label });
            }

            for (const entity of model.entities) {
                const entityId = `datapos-context-default-entity-${entity.id}`;
                const entityConfig = {
                    id: entityId,
                    label: entity.label,
                    description: entity.description,
                    typeId: entity.typeId,
                    characteristics: entity.characteristics,
                    computations: entity.computations,
                    events: entity.events
                };
                fs.writeFile(`dist/${entityId}.json`, JSON.stringify(entityConfig));
                const entityReference = { id: entityId, label: entity.label };
                modelConfig.entities.push(entityReference);
                entities.push({ ...entityReference, modelId: modelId, modelLabel: model.label, focusId: focusId, focusLabel: focus.label });
            }

            for (const view of model.views) {
                const viewId = `datapos-context-default-view-${view.id}`;
                const viewConfig = {
                    id: viewId,
                    label: view.label,
                    description: view.description,
                    typeId: view.typeId
                };
                fs.writeFile(`dist/${viewId}.json`, JSON.stringify(viewConfig));
                const viewReference = { id: viewId, label: view.label };
                modelConfig.views.push(viewReference);
                views.push({ ...viewReference, modelId: modelId, modelLabel: model.label, focusId: focusId, focusLabel: focus.label });
            }
            fs.writeFile(`dist/${modelId}.json`, JSON.stringify(modelConfig));
            const modelReference = { id: modelId, label: model.label };
            focusReference.models.push(modelReference);
            models.push({ ...modelReference, focusId: focusId, focusLabel: focus.label });
        }
        context.focuses.push(focusReference);
    }
    fs.writeFile('dist/datapos-context-default.json', JSON.stringify(context));
    fs.writeFile('dist/datapos-context-default-models.json', JSON.stringify(models));
    fs.writeFile('dist/datapos-context-default-dimensions.json', JSON.stringify(dimensions));
    fs.writeFile('dist/datapos-context-default-entities.json', JSON.stringify(entities));
    fs.writeFile('dist/datapos-context-default-characteristics.json', JSON.stringify(characteristics));
    fs.writeFile('dist/datapos-context-default-computations.json', JSON.stringify(computations));
    fs.writeFile('dist/datapos-context-default-events.json', JSON.stringify(events));
    fs.writeFile('dist/datapos-context-default-views.json', JSON.stringify(views));
};

// Helpers - Build Presentations
async function buildPresentations() {
    const presentationsData = await readJSONFile('src/data.json', 'utf8');
    presentationsConfig = { label: presentationsData.label, focuses: [] };
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
                const focusId = itemPathSegments[1];
                const focusData = await readJSONFile(`${itemPath}/data.json`, 'utf8');
                focusConfig = {
                    id: focusId,
                    label: focusData.label || { en: focusId },
                    folders: []
                };
                presentationsConfig.focuses.push(focusConfig);
                await buildPresentations_PreparePresentations(itemPath);
            } else if (itemPathSegments.length === 3) {
                const focusLevel2Id = itemPathSegments[2];
                const focusLevel2Data = await readJSONFile(`${itemPath}/data.json`, 'utf8');
                focusLevel1Config = {
                    id: focusLevel2Id,
                    label: focusLevel2Data.label || { en: focusLevel2Id },
                    folders: []
                };
                focusConfig.folders.push(focusLevel1Config);
                await buildPresentations_PreparePresentations(itemPath);
            } else if (itemPathSegments.length === 4) {
                const focusLevel3Id = itemPathSegments[3];
                const focusLevel3Data = await readJSONFile(`${itemPath}/data.json`, 'utf8');
                focusLevel2Config = {
                    id: focusLevel3Id,
                    label: focusLevel3Data.label || { en: focusLevel3Id },
                    folders: [],
                    presentations: []
                };
                focusLevel1Config.folders.push(focusLevel2Config);
                const presentationPaths = (await listDirectoryEntries(`${itemPath}`)).filter((name) => !name.endsWith('data.json'));
                for (const presentationPath of presentationPaths) {
                    const presentationId = presentationPath.slice(0, -5);
                    const presentationData = await readJSONFile(`${itemPath}/${presentationPath}`, 'utf8');
                    fs.writeFile(`dist/datapos-presentations-default-${presentationId}.json`, JSON.stringify(presentationData));
                    focusLevel2Config.presentations.push({ id: presentationId });
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
    console.log('Download context...', contextId, outDir);
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
    const result = dotenv.config({ path: '.env.local' });
    if (result.error) throw result.error;
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

// Utilities - Clear Directory
const clearDirectory = async (directoryPath) => {
    for (const itemName of await fs.readdir(directoryPath)) {
        const itemPath = `${directoryPath}/${itemName}`;
        const stats = await fs.stat(itemPath);
        if (stats.isDirectory()) {
            await fs.rmdir(itemPath);
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
