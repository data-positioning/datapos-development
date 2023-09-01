const util = require('util');
const exec = util.promisify(require('child_process').exec);
const fs = require('fs').promises;
const path = require('path');

async function bumpVersion() {
    const packageData = await fs.readFile('package.json', 'utf8');
    const packageJSON = JSON.parse(packageData);
    const versionSegments = packageJSON.version.split('.');
    packageJSON.version = `${versionSegments[0]}.${versionSegments[1]}.${Number(versionSegments[2]) + 1}`;
    fs.writeFile('package.json', JSON.stringify(packageJSON, undefined, 4));
}

async function getBackendConfig() {
    const packageJSON = JSON.parse(await fs.readFile('package.json', 'utf8'));
    fs.writeFile('src/config.json', JSON.stringify({ name: packageJSON.name, version: packageJSON.version }, undefined, 4));
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
    const envJSON = JSON.parse(await fs.readFile('.env.local', 'utf8'));
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
    const url = `https://api-5ykjycpiha-ew.a.run.app/connectors`;
    const response = await fetch(url, { method: 'POST', headers: { Authorization: envJSON.DATAPOS_CONNECTOR_UPLOAD_TOKEN }, body: formData });
    if (!response.ok) throw new Error(await response.text());
}

async function uploadContext() {
    console.log('Upload context requested...');
}

module.exports = { bumpVersion, getBackendConfig, syncWithGitHub, uploadConnector, uploadContext };
