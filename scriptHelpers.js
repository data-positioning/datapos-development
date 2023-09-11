const util = require('util');

const dotenv = require('dotenv');
const exec = util.promisify(require('child_process').exec);
const fs = require('fs').promises;
const path = require('path');

let contextConfig;
let focusConfig;
let issueCount = 0;
let modelConfig;

async function buildContext() {
    const contextData = await fs.readFile('src/data.json', 'utf8');
    contextConfig = { label: contextData.label, typeId: 'context', focuses: [] };
    await buildContext_Prepare('src');
    await buildContext_Output();
    if (issueCount > 0) console.log(`WARNING: ${issueCount} issues(s) encountered.`);
}

const readMarkdownFile = async (itemPath) => {
    try {
        return await fs.readFile(`${itemPath}/description.en.md`, 'utf8');
    } catch (error) {
        issueCount++;
        console.log(`ERROR: Markdown file '${itemPath}' not found.`);
        return '';
    }
};

const buildContext_Prepare = async (path) => {
    const itemNames = await fs.readdir(path);
    for (const itemName of itemNames) {
        const itemPath = `${path}/${itemName}`;
        const stats = await fs.stat(itemPath);
        if (stats.isDirectory()) {
            const itemPathSegments = itemPath.split('/');
            console.log(1111, itemName, itemPath, itemPathSegments.length);
            if (itemPathSegments.length === 2) {
                const focusId = itemPathSegments[1];
                const focusData = JSON.parse(await fs.readFile(`${itemPath}/data.json`, 'utf8'));
                focusData.description = await readMarkdownFile(`${itemPath}/description.en.md`);
                focusConfig = { id: focusId, label: focusData.label, description: { en: focusData.description }, typeId: 'focus', models: [] };
                contextConfig.focuses.push(focusConfig);
                buildContext_Prepare(itemPath);
            } else if (itemPathSegments.length === 3) {
                //     const modelId = itemPathSegments[3];
                //     const modelData = readJSONFile(grunt, `${itemPath}/data.json`);
                //     modelData.description = readMarkdownFile(grunt, `${itemPath}/description.en.md`);
                //     console.log(modelId, modelData, modelData.description);
                //     modelConfig = { id: modelId, label: modelData.label, description: { en: modelData.description }, typeId: 'model', dimensions: [], entities: [], views: [] };
                //     const dimensionPaths = grunt.file.expand(`${itemPath}/dimensions/*.json`);
                //     dimensionPaths.forEach((dimensionPath) => {
                //         const dimensionPathSegments = dimensionPath.split('/');
                //         const dimensionId = dimensionPathSegments[5].split('.')[0];
                //         const dimensionData = readJSONFile(grunt, `${itemPath}/dimensions/${dimensionId}.json`);
                //         dimensionData.description = readMarkdownFile(grunt, `${itemPath}/dimensions/${dimensionId}.en.md`);
                //         const dimensionConfig = { id: dimensionId, label: dimensionData.label, description: { en: dimensionData.description }, typeId: 'dimension', levels: [] };
                //         modelConfig.dimensions.push(dimensionConfig);
                //     });
                //     const entityPaths = grunt.file.expand(`${itemPath}/entities/*.json`);
                //     entityPaths.forEach((entityPath) => {
                //         const entityPathSegments = entityPath.split('/');
                //         const entityId = entityPathSegments[5].split('.')[0];
                //         const entityData = readJSONFile(grunt, `${itemPath}/entities/${entityId}.json`);
                //         entityData.description = readMarkdownFile(grunt, `${itemPath}/entities/${entityId}.en.md`);
                //         const entityConfig = {
                //             id: entityId,
                //             label: entityData.label,
                //             description: { en: entityData.description },
                //             typeId: 'entity',
                //             characteristics: [],
                //             computations: [],
                //             events: []
                //         };
                //         for (const characteristic of entityData.characteristics || []) {
                //             const characteristicConfig = {
                //                 entityTypeId: characteristic.entityTypeId,
                //                 id: characteristic.id,
                //                 label: characteristic.label,
                //                 description: characteristic.description,
                //                 typeId: 'characteristic',
                //                 type: characteristic.type
                //             };
                //             entityConfig.characteristics.push(characteristicConfig);
                //         }
                //         for (const computation of entityData.computations || []) {
                //             const computationConfig = {
                //                 id: computation.id,
                //                 label: computation.label,
                //                 description: computation.description,
                //                 typeId: 'computation',
                //                 formula: computation.formula
                //             };
                //             entityConfig.computations.push(computationConfig);
                //         }
                //         for (const event of entityData.events || []) {
                //             const eventConfig = {
                //                 id: event.id,
                //                 label: event.label,
                //                 description: event.description,
                //                 typeId: 'event'
                //             };
                //             entityConfig.events.push(eventConfig);
                //         }
                //         modelConfig.entities.push(entityConfig);
                //     });
                //     focusConfig.models.push(modelConfig);
            } else {
                throw new Error(`Unexpected directory level: ${itemPath}.`);
            }
        }
    }
};

const buildContext_Output = () => {
    const characteristics = [];
    const computations = [];
    const dimensions = [];
    const entities = [];
    const events = [];
    const models = [];
    const views = [];

    // const context = { id: 'datapos-context-default', label: contextConfig.label, typeId: contextConfig.typeId, focuses: [] };
    // for (const focus of contextConfig.focuses) {
    //     const focusId = `datapos-context-default-focus-${focus.id}`;
    //     const focusReference = { id: focusId, label: focus.label, models: [] };
    //     for (const model of focus.models) {
    //         const modelId = `datapos-context-default-model-${model.id}`;
    //         const modelConfig = {
    //             id: modelId,
    //             label: model.label,
    //             description: model.description,
    //             typeId: model.typeId,
    //             dimensions: [],
    //             entities: [],
    //             views: []
    //         };

    //         for (const dimension of model.dimensions) {
    //             const dimensionId = `datapos-context-default-dimension-${dimension.id}`;
    //             const dimensionConfig = {
    //                 id: dimensionId,
    //                 label: dimension.label,
    //                 description: dimension.description,
    //                 typeId: dimension.typeId,
    //                 levels: dimension.levels
    //             };
    //             grunt.file.write(`./dist/${dimensionId}.json`, JSON.stringify(dimensionConfig));
    //             const dimensionReference = { id: dimensionId, label: dimension.label };
    //             modelConfig.dimensions.push(dimensionReference);
    //             dimensions.push({ ...dimensionReference, modelId: modelId, modelLabel: model.label, focusId: focusId, focusLabel: focus.label });
    //         }

    //         for (const entity of model.entities) {
    //             const entityId = `datapos-context-default-entity-${entity.id}`;
    //             const entityConfig = {
    //                 id: entityId,
    //                 label: entity.label,
    //                 description: entity.description,
    //                 typeId: entity.typeId,
    //                 characteristics: entity.characteristics,
    //                 computations: entity.computations,
    //                 events: entity.events
    //             };
    //             grunt.file.write(`./dist/${entityId}.json`, JSON.stringify(entityConfig));
    //             const entityReference = { id: entityId, label: entity.label };
    //             modelConfig.entities.push(entityReference);
    //             entities.push({ ...entityReference, modelId: modelId, modelLabel: model.label, focusId: focusId, focusLabel: focus.label });
    //         }

    //         for (const view of model.views) {
    //             const viewId = `datapos-context-default-view-${view.id}`;
    //             const viewConfig = {
    //                 id: viewId,
    //                 label: view.label,
    //                 description: view.description,
    //                 typeId: view.typeId
    //             };
    //             grunt.file.write(`./dist/${viewId}.json`, JSON.stringify(viewConfig));
    //             const viewReference = { id: viewId, label: view.label };
    //             modelConfig.views.push(viewReference);
    //             views.push({ ...viewReference, modelId: modelId, modelLabel: model.label, focusId: focusId, focusLabel: focus.label });
    //         }
    //         grunt.file.write(`./dist/${modelId}.json`, JSON.stringify(modelConfig));
    //         const modelReference = { id: modelId, label: model.label };
    //         focusReference.models.push(modelReference);
    //         models.push({ ...modelReference, focusId: focusId, focusLabel: focus.label });
    //     }
    //     context.focuses.push(focusReference);
    // }
    // grunt.file.write('./dist/datapos-context-default.json', JSON.stringify(context));
    // grunt.file.write('./dist/datapos-context-default-models.json', JSON.stringify(models));
    // grunt.file.write('./dist/datapos-context-default-dimensions.json', JSON.stringify(dimensions));
    // grunt.file.write('./dist/datapos-context-default-entities.json', JSON.stringify(entities));
    // grunt.file.write('./dist/datapos-context-default-views.json', JSON.stringify(views));
};

async function bumpVersion() {
    const packageData = await fs.readFile('package.json', 'utf8');
    const packageJSON = JSON.parse(packageData);
    const versionSegments = packageJSON.version.split('.');
    packageJSON.version = `${versionSegments[0]}.${versionSegments[1]}.${Number(versionSegments[2]) + 1}`;
    fs.writeFile('package.json', JSON.stringify(packageJSON, undefined, 4));
}

async function generateFileStoreIndex() {
    async function readDirectoryRecursively(directoryPath, itemNames) {
        const items = [];
        index[directoryPath.substring(16)] = items;
        for (const itemName of itemNames) {
            const itemPath = path.join(directoryPath, itemName);
            const stats = await fs.stat(itemPath);
            if (stats.isDirectory()) {
                const nextLevelChildren = await fs.readdir(itemPath);
                items.push({ childCount: nextLevelChildren.length, itemName, typeId: 'folder' });
                await readDirectoryRecursively(itemPath, nextLevelChildren);
            } else {
                items.push({ lastModifiedAt: stats.mtimeMs, itemName, size: stats.size, typeId: 'object' });
            }
        }
    }

    const index = {};
    const toplevelChildren = await fs.readdir('public/fileStore/');
    await readDirectoryRecursively('public/fileStore/', toplevelChildren);
    fs.writeFile('./public/fileStoreIndex.json', JSON.stringify(index, undefined, 4), (error) => {
        if (error) return console.error(error);
    });
}

async function getBackendConfig() {
    const packageJSON = JSON.parse(await fs.readFile('package.json', 'utf8'));
    fs.writeFile('src/config.json', JSON.stringify({ name: packageJSON.name, version: packageJSON.version }, undefined, 4));
}

async function getWorkbenchConfig() {
    const packageJSON = JSON.parse(await fs.readFile('package.json', 'utf8'));
    const engineVersion = packageJSON.dependencies['@datapos/datapos-engine'].substring(1);
    fs.writeFile('src/config.json', JSON.stringify({ engineVersion, version: packageJSON.version }, undefined, 4));
}

async function syncWithGitHub() {
    const packageData = await fs.readFile('package.json', 'utf8');
    const packageJSON = JSON.parse(packageData);
    await exec('git add .');
    await exec(`git commit -m v${packageJSON.version}`);
    await exec('git push origin main:main');
}

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

    // TODO: Need to get 'api-5ykjycpiha-ew.a.run.app' or portion of it from token.
    const url = 'https://api-5ykjycpiha-ew.a.run.app/connectors';
    const response = await fetch(url, { method: 'POST', headers: { Authorization: process.env.DATAPOS_CONNECTOR_UPLOAD_TOKEN }, body: formData });
    if (!response.ok) throw new Error(await response.text());
}

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
        console.log('ITEM', item.itemName, item.itemPath);
        // const data = JSON.parse(await fs.readFile(item.itemPath, 'utf8'));
        // const url = 'https://api-5ykjycpiha-ew.a.run.app/connectors/contexts';
        // const response = await fetch(url, {
        //     method: 'POST',
        //     headers: { Authorization: process.env.DATAPOS_CONTEXT_UPLOAD_TOKEN, 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ name: item.itemName.slice(0, -5), config: data })
        // });
        // if (!response.ok) throw new Error(await response.text());
    }
}

module.exports = { buildContext, bumpVersion, generateFileStoreIndex, getBackendConfig, getWorkbenchConfig, syncWithGitHub, uploadConnector, uploadContext };
