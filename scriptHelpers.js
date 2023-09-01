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
        const configAsJSON = JSON.parse(await fs.readFile('src/config.json', 'utf8'));
        const descriptionEN = await fs.readFile('src/description.en.md', 'utf8');
        const envAsJSON = JSON.parse(await fs.readFile('.env.local', 'utf8'));
        const logo = await fs.readFile('src/logo.svg', 'utf8');
        const packageAsJSON = JSON.parse(await fs.readFile('package.json', 'utf8'));

        const formData = new FormData();
        formData.append('config', JSON.stringify({ ...configAsJSON, description: { en: descriptionEN }, logo, version: packageAsJSON.version }));
        const itemNames = await fs.readdir('dist');
        for (const itemName of itemNames) {
            const itemPath = path.join('dist', itemName);
            const stats = await fs.stat(itemPath);
            if (stats.isDirectory()) continue;
            const contentAsBlob = new Blob([await fs.readFile(itemPath, 'utf8')], { type: 'text/plain' });
            formData.append(itemName, contentAsBlob, itemName);
        }

        const url = `https://api-5ykjycpiha-ew.a.run.app/ping`;
        // const response = await fetch(url, { method: 'POST', headers: { Authorization: envAsJSON.DATAPOS_CONNECTOR_UPLOAD_TOKEN }, body: formData });
        const response = await fetch(url, { method: 'GET' });
        if (!response.ok) throw new Error(await response.text());
        console.log('RESPONSE', response);
    } catch (error) {
        console.log(error);
    }
}

module.exports = { syncWithGitHub, uploadConnector };
