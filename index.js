// Dependencies
const fs = require('fs').promises;
const { nanoid } = require('nanoid');

// Dependencies - Promisify exec.
const util = require('util');
const exec = util.promisify(require('child_process').exec);

// Operations - Build configuration.
async function buildConfig(directoryPath) {
    const configJSON = await readJSONFile(`${directoryPath || ''}config.json`);
    const packageJSON = await readJSONFile('package.json');
    await fs.writeFile(`${directoryPath || ''}config.json`, JSON.stringify({ ...configJSON, id: packageJSON.name, version: packageJSON.version }, undefined, 4));
}

// Operations - Document interface.
async function documentInterface(directoryPath) {
    const configJSON = await readJSONFile(`${directoryPath || ''}config.json`);
    const indexCode = await fs.readFile(`${directoryPath || ''}src/index.ts`, 'utf8');
    // Match class methods and top-level functions, avoiding control flow
    const regex = /^\s{4}(?:async\s+)?(?:private\s+|public\s+|protected\s+)?([A-Za-z_]\w*)\s*\([^)]*\)\s*(?::\s*[^{]+)?\s*\{/gm;
    const matches = [...indexCode.matchAll(regex)].map((m) => m[1]);

    configJSON.interface = matches;
    console.log(matches);
    await fs.writeFile(`${directoryPath || ''}config.json`, JSON.stringify(configJSON, undefined, 4));
}

// Operations - Build public directory index.
async function buildPublicDirectoryIndex(id) {
    const index = {};

    async function listDirectoryEntriesRecursively(directoryPath, names) {
        const entries = [];
        const localDirectoryPath = directoryPath.substring(`public/${id}`.length);
        index[localDirectoryPath] = entries;
        for (const name of names) {
            const itemPath = `${directoryPath}/${name}`;
            try {
                const stats = await fs.stat(itemPath);
                if (stats.isDirectory()) {
                    const nextLevelChildren = await fs.readdir(itemPath);
                    entries.push({ childCount: nextLevelChildren.length, name: `${name}`, typeId: 'folder' });
                    await listDirectoryEntriesRecursively(itemPath, nextLevelChildren);
                } else {
                    entries.push({ id: nanoid(), lastModifiedAt: stats.mtimeMs, name, size: stats.size, typeId: 'object' });
                }
            } catch (error) {
                console.error(`Unable to get information for '${name}' in 'buildPublicDirectoryIndex'.`, error);
            }
        }
        // TODO: Prior version: entries.sort((left, right) => right.typeId.localeCompare(left.typeId) || left.name.localeCompare(right.name));
        entries.sort((left, right) => {
            const typeComparison = left.typeId.localeCompare(right.typeId);
            return typeComparison !== 0 ? typeComparison : left.name.localeCompare(right.name);
        });
    }

    const toplevelNames = await fs.readdir(`public/${id}`);
    await listDirectoryEntriesRecursively(`public/${id}`, toplevelNames);
    await fs.writeFile(`./public/${id}Index.json`, JSON.stringify(index), (error) => {
        if (error) return console.error(error);
    });
}

// Operations - Bump version.
async function bumpVersion() {
    const packageJSON = await readJSONFile('package.json');
    const versionSegments = packageJSON.version.split('.');
    packageJSON.version = `${versionSegments[0]}.${versionSegments[1]}.${Number(versionSegments[2]) + 1}`;
    await fs.writeFile('package.json', JSON.stringify(packageJSON, undefined, 4));
    console.log(`Bumped to version ${packageJSON.version}.`);
}

// Operations - Clear directory.
async function clearDirectory(directoryPath) {
    for (const itemName of await fs.readdir(directoryPath)) {
        const itemPath = `${directoryPath}/${itemName}`;
        try {
            const stats = await fs.stat(itemPath);
            if (stats.isDirectory()) {
                await fs.rm(itemPath, { recursive: true, force: true });
            } else {
                await fs.unlink(itemPath);
            }
        } catch (error) {
            console.error(`Unable to get information for '${itemPath}' in 'clearDirectory'.`, error);
        }
    }
}

// Operations - Send deployment notice.
async function sendDeploymentNotice() {
    const configJSON = await readJSONFile('config.json');
    const options = {
        body: JSON.stringify(configJSON),
        headers: { 'Content-Type': 'application/json' },
        method: 'PUT'
    };
    const response = await fetch(`https://api.datapos.app/states/${configJSON.id}`, options);
    if (!response.ok) console.log(await response.text());
}

// UtilitiesOperations - Sync with GitHub.
async function syncWithGitHub() {
    const packageJSON = await readJSONFile('package.json');
    await exec('git add .');
    await exec(`git commit -m v${packageJSON.version}`);
    await exec('git push origin main:main');
}

// Operations - Upload directory to Cloudflare R2.
async function uploadDirectoryToR2(sourceDirectory, uploadDirectory) {
    async function listDirectoryEntriesRecursively(currentSourceDirectory, currentDestinationDirectory, names) {
        for (const name of names) {
            const sourceItemPath = `${currentSourceDirectory}/${name}`;
            const destinationItemPath = `${currentDestinationDirectory}/${name}`;
            try {
                const stats = await fs.stat(sourceItemPath);
                if (stats.isDirectory()) {
                    const nextLevelChildren = await fs.readdir(sourceItemPath);
                    await listDirectoryEntriesRecursively(sourceItemPath, destinationItemPath, nextLevelChildren);
                } else {
                    const command = `wrangler r2 object put "datapos-sample-data-eu/${currentDestinationDirectory}/${name}" --file="${currentSourceDirectory}/${name}" --jurisdiction=eu --remote`;
                    const response = await exec(command);
                    console.log('Uploading:', `${currentSourceDirectory}/${name}`);
                    if (response.stderr) {
                        console.log('Command___:', command);
                        console.log('Error_____:', response.stderr);
                    }
                }
            } catch (error) {
                console.error(`Unable to get information for '${name}' in 'uploadDirectoryToR2'.`, error);
            }
        }
    }
    const toplevelNames = await fs.readdir(`${sourceDirectory}/${uploadDirectory}/`);
    await listDirectoryEntriesRecursively(`${sourceDirectory}/${uploadDirectory}`, uploadDirectory, toplevelNames);
}

// Operations - Upload module configuration.
async function uploadModuleConfig() {
    const configJSON = await readJSONFile('config.json');
    const stateId = configJSON.id;
    const options = {
        body: JSON.stringify(configJSON),
        headers: { 'Content-Type': 'application/json' },
        method: 'PUT'
    };
    const response = await fetch(`https://api.datapos.app/states/${stateId}`, options);
    if (!response.ok) console.log(await response.text());
}

// Operations - Upload module to Cloudflare R2.
async function uploadModuleToR2(fromPath, toPath) {
    const packageJSON = await readJSONFile('package.json');
    const toPathWithVersion = toPath.replace(/^(.*?\.)/, `$1v${packageJSON.version}.`);
    await exec(`wrangler r2 object put ${toPathWithVersion} --file=dist/${fromPath} --content-type application/javascript --jurisdiction=eu --remote`, { stdio: 'inherit' });
}

// Utilities - Read JSON file.
async function readJSONFile(path) {
    try {
        return JSON.parse(await fs.readFile(path, 'utf8'));
    } catch (error) {
        console.warn(`WARN: JSON file '${path}' not found or invalid.`, error);
        return {};
    }
}

// Exposures
export {
    buildConfig,
    buildPublicDirectoryIndex,
    bumpVersion,
    clearDirectory,
    documentInterface,
    sendDeploymentNotice,
    syncWithGitHub,
    uploadDirectoryToR2,
    uploadModuleConfig,
    uploadModuleToR2
};
