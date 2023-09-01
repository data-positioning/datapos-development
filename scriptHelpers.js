const exec = require('child_process').exec;
const fs = require('fs').promises;
const path = require('path');
const util = require('util');

async function syncWithGitHub() {
    const packageData = await fs.readFile('package.json', 'utf8');
    const packageAsJSON = JSON.parse(packageData);
    const versionSegments = packageAsJSON.version.split('.');
    const newVersion = `${versionSegments[0]}.${versionSegments[1]}.${Number(versionSegments[2]) + 1}`;
    packageAsJSON.version = newVersion;
    fs.writeFile('package.json', JSON.stringify(packageAsJSON, undefined, 4));
    exec('git add .', (error, stdout, stderr) => {
        if (stderr) return console.error(stderr);
        console.log(stdout);
        exec(`git commit -m v${newVersion}`, (error, stdout, stderr) => {
            if (stderr) return console.error(stderr);
            console.log(stdout);
            exec('git push origin main:main', (error, stdout, stderr) => {
                if (stderr) return console.error(stderr);
                console.log(stdout);
            });
        });
    });
}

async function uploadConnector() {
    try {
        const formData = new FormData();

        const envData = await fs.readFile('.env.local', 'utf8');
        const envAsJSON = JSON.parse(envData);
        console.log('envAsJSON', envAsJSON);

        const packageData = await fs.readFile('package.json', 'utf8');
        const packageAsJSON = JSON.parse(packageData);
        console.log('packageAsJSON', packageAsJSON);

        const configData = await fs.readFile('src/config.json', 'utf8');
        const configAsJSON = JSON.parse(configData);
        console.log('configAsJSON', configAsJSON);

        let descriptionEN;
        try {
            descriptionEN = await fs.readFile('src/description.en.md', 'utf8');
        } catch (error) {
            descriptionEN = '';
        }

        let logo;
        try {
            logo = await fs.readFile('src/logo.svg', 'utf8');
        } catch (error) {
            logo = '';
        }

        formData.append('config', JSON.stringify({ config: configAsJSON, description: { en: descriptionEN }, logo, version: packageAsJSON.version }));

        const itemNames = await fs.readdir('dist');
        for (const itemName of itemNames) {
            const itemPath = path.join('dist', itemName);
            const stats = await fs.stat(itemPath);
            if (stats.isDirectory()) return;
            console.log(itemPath, itemName);
            const contentAsBlob = new Blob([await fs.readFile(itemPath, 'utf8')], { type: 'text/plain' });
            formData.append(itemName, contentAsBlob, itemName);
        }

        const url = `https://europe-west1-datapos-${envAsJSON.DATAPOS_PROJECT_ID}.cloudfunctions.net/api/connectors`;
        const response = await fetch(url, { method: 'POST', headers: { Authorization: envAsJSON.DATAPOS_CONNECTOR_UPLOAD_TOKEN }, body: formData });
        if (!response.ok) throw new Error(await response.text());

        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}
module.exports = { syncWithGitHub, uploadConnector };
