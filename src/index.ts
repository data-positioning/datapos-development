/**
 * Development utilities.
 */

// Dependencies - Vendor.
import * as path from 'path';
import { exec as execCallback } from 'child_process';
import { promises as fs } from 'fs';
import { nanoid } from 'nanoid';
import type { PackageJson } from 'type-fest';
import { promisify } from 'util';

// Dependencies - Framework.
import type { ModuleConfig } from '@datapos/datapos-shared';
import { CONNECTOR_DESTINATION_OPERATIONS, CONNECTOR_SOURCE_OPERATIONS } from '@datapos/datapos-shared';
import type { ConnectorModuleConfig, ConnectorModuleOperation, ConnectorModuleUsageId } from '@datapos/datapos-shared';
import type { ContextModuleConfig, ContextModuleOperation } from '@datapos/datapos-shared';
import type { InformerModuleConfig, InformerModuleOperation } from '@datapos/datapos-shared';
import type { PresenterModuleConfig, PresenterModuleOperation } from '@datapos/datapos-shared';

import { moduleConfigSchema, ModuleConfigZ } from '@datapos/datapos-shared';

// Interfaces/Types - Directory entry.
interface DirectoryEntry {
    name: string;
    typeId: 'folder' | 'object';
}
interface DirectoryFolderEntry extends DirectoryEntry {
    childCount: number;
    typeId: 'folder';
}
interface DirectoryObjectEntry extends DirectoryEntry {
    id: string;
    lastModifiedAt: number;
    size: number;
    typeId: 'object';
}

// Initialisation
const exec = promisify(execCallback);

// Utilities - Build configuration.
async function buildConfig(): Promise<void> {
    try {
        console.info('🚀 Building configuration...');
        const packageJSON = JSON.parse(await fs.readFile('package.json', 'utf8')) as PackageJson;
        const configJSON = JSON.parse(await fs.readFile('config.json', 'utf8')) as ModuleConfig;
        moduleConfigSchema.parse(configJSON);
        if (packageJSON.name) configJSON.id = packageJSON.name;
        if (packageJSON.version) configJSON.version = packageJSON.version;
        await fs.writeFile('config.json', JSON.stringify(configJSON, undefined, 4), 'utf8');
        console.info('✅ Configuration built.');
    } catch (error) {
        console.error('❌ Error building configuration.', error);
    }
}

// Utilities - Build public directory index.
async function buildPublicDirectoryIndex(id: string): Promise<void> {
    try {
        console.info(`🚀 Building public directory index for identifier '${id}'...`);
        const index: Record<string, DirectoryEntry[]> = {};

        async function listDirectoryEntriesRecursively(directoryPath: string, names: string[]) {
            console.info(`⚙️ Processing directory '${directoryPath}'...`);
            const entries: DirectoryEntry[] = [];
            const localDirectoryPath = directoryPath.substring(`public/${id}`.length);
            index[localDirectoryPath] = entries;
            for (const name of names) {
                const itemPath = `${directoryPath}/${name}`;
                try {
                    const stats = await fs.stat(itemPath);
                    if (stats.isDirectory()) {
                        const nextLevelChildren = await fs.readdir(itemPath);
                        const folderEntry: DirectoryFolderEntry = { childCount: nextLevelChildren.length, name: `${name}`, typeId: 'folder' };
                        entries.push(folderEntry);
                        await listDirectoryEntriesRecursively(itemPath, nextLevelChildren);
                    } else {
                        const objectEntry: DirectoryObjectEntry = { id: nanoid(), lastModifiedAt: stats.mtimeMs, name, size: stats.size, typeId: 'object' };
                        entries.push(objectEntry);
                    }
                } catch (error) {
                    throw new Error(`Unable to get information for '${name}' in 'buildPublicDirectoryIndex'. ${String(error)}`);
                }
            }
            entries.sort((left, right) => {
                const typeComparison = left.typeId.localeCompare(right.typeId);
                return typeComparison !== 0 ? typeComparison : left.name.localeCompare(right.name);
            });
        }

        const toplevelNames = await fs.readdir(`public/${id}`);
        await listDirectoryEntriesRecursively(`public/${id}`, toplevelNames);
        await fs.writeFile(`./public/${id}Index.json`, JSON.stringify(index), 'utf8');
        console.info('✅ Public directory index built.');
    } catch (error) {
        console.error('❌ Error building public directory index.', error);
    }
}

// Utilities - Build connector configuration.
async function buildConnectorConfig(): Promise<void> {
    try {
        console.info('🚀 Building connector configuration...');
        const packageJSON = JSON.parse(await fs.readFile('package.json', 'utf8')) as PackageJson;
        const configJSON = JSON.parse(await fs.readFile('config.json', 'utf8')) as ConnectorModuleConfig;
        const indexCode = await fs.readFile('src/index.ts', 'utf8');

        let destinationOperations = false;
        let sourceOperations = false;
        const regex = /^\s{4}(?:async\s+)?(private\s+)?(?:public\s+|protected\s+)?([A-Za-z_]\w*)\s*\(/gm;
        const operations = [...indexCode.matchAll(regex)]
            .filter((m) => !m[1] && m[2] !== 'constructor') // m[1] is 'private ' if present.
            .map((m) => {
                const operation = m[2] as ConnectorModuleOperation;
                destinationOperations = destinationOperations || CONNECTOR_DESTINATION_OPERATIONS.includes(operation);
                sourceOperations = sourceOperations || CONNECTOR_SOURCE_OPERATIONS.includes(operation);
                return operation;
            });
        if (operations.length > 0) console.info(`ℹ️  Implements ${operations.length} operations.`);
        else console.warn('⚠️  Implements no operations.');
        const usageId: ConnectorModuleUsageId | null =
            sourceOperations && destinationOperations ? 'bidirectional' : sourceOperations ? 'source' : destinationOperations ? 'destination' : null;
        if (usageId) console.info(`ℹ️  Supports ${usageId} usage.`);
        else console.warn('⚠️  No usage identified.');

        if (packageJSON.name) configJSON.id = packageJSON.name;
        configJSON.operations = operations;
        configJSON.usageId = usageId;
        if (packageJSON.version) configJSON.version = packageJSON.version;

        await fs.writeFile('config.json', JSON.stringify(configJSON, undefined, 4), 'utf8');
        console.info('✅ Connector configuration built.');
    } catch (error) {
        console.error('❌ Error building connector configuration.', error);
    }
}

// Utilities - Build context configuration.
async function buildContextConfig(): Promise<void> {
    try {
        console.info('🚀 Building context configuration...');
        const packageJSON = JSON.parse(await fs.readFile('package.json', 'utf8')) as PackageJson;
        const configJSON = JSON.parse(await fs.readFile('config.json', 'utf8')) as ContextModuleConfig;
        const indexCode = await fs.readFile('src/index.ts', 'utf8');

        const regex = /^\s{4}(?:async\s+)?(private\s+)?(?:public\s+|protected\s+)?([A-Za-z_]\w*)\s*\(/gm;
        const operations = [...indexCode.matchAll(regex)]
            .filter((m) => !m[1] && m[2] !== 'constructor') // m[1] is 'private ' if present.
            .map((m) => m[2]) as ContextModuleOperation[];

        if (packageJSON.name) configJSON.id = packageJSON.name;
        configJSON.operations = operations;
        if (packageJSON.version) configJSON.version = packageJSON.version;

        await fs.writeFile('config.json', JSON.stringify(configJSON, undefined, 4), 'utf8');
        console.info('✅ Context configuration built.');
    } catch (error) {
        console.error('❌ Error building context configuration.', error);
    }
}

// Utilities - Build informer configuration.
async function buildInformerConfig(): Promise<void> {
    try {
        console.info('🚀 Building informer configuration...');
        const packageJSON = JSON.parse(await fs.readFile('package.json', 'utf8')) as PackageJson;
        const configJSON = JSON.parse(await fs.readFile('config.json', 'utf8')) as InformerModuleConfig;
        const indexCode = await fs.readFile('src/index.ts', 'utf8');

        const regex = /^\s{4}(?:async\s+)?(private\s+)?(?:public\s+|protected\s+)?([A-Za-z_]\w*)\s*\(/gm;
        const operations = [...indexCode.matchAll(regex)]
            .filter((m) => !m[1] && m[2] !== 'constructor') // m[1] is 'private ' if present.
            .map((m) => m[2]) as InformerModuleOperation[];

        if (packageJSON.name) configJSON.id = packageJSON.name;
        configJSON.operations = operations;
        if (packageJSON.version) configJSON.version = packageJSON.version;

        await fs.writeFile('config.json', JSON.stringify(configJSON, undefined, 4), 'utf8');
        console.info('✅ Informer configuration built.');
    } catch (error) {
        console.error('❌ Error building informer configuration.', error);
    }
}

// Utilities - Build presenter configuration.
async function buildPresenterConfig(): Promise<void> {
    try {
        console.info('🚀 Building presenter configuration...');
        const packageJSON = JSON.parse(await fs.readFile('package.json', 'utf8')) as PackageJson;
        const configJSON = JSON.parse(await fs.readFile('config.json', 'utf8')) as PresenterModuleConfig;
        const indexCode = await fs.readFile('src/index.ts', 'utf8');

        const regex = /^\s{4}(?:async\s+)?(private\s+)?(?:public\s+|protected\s+)?([A-Za-z_]\w*)\s*\(/gm;
        const operations = [...indexCode.matchAll(regex)]
            .filter((m) => !m[1] && m[2] !== 'constructor') // m[1] is 'private ' if present.
            .map((m) => m[2]) as PresenterModuleOperation[];

        if (packageJSON.name) configJSON.id = packageJSON.name;
        configJSON.operations = operations;
        if (packageJSON.version) configJSON.version = packageJSON.version;

        await fs.writeFile('config.json', JSON.stringify(configJSON, undefined, 4), 'utf8');
        console.info('✅ Presenter configuration built.');
    } catch (error) {
        console.error('❌ Error building context configuration.', error);
    }
}

// Utilities - Bump version.
async function bumpVersion(): Promise<void> {
    try {
        console.info('🚀 Bumping version...');
        const packageJSON = JSON.parse(await fs.readFile('package.json', 'utf8')) as PackageJson;
        if (packageJSON.version) {
            const oldVersion = packageJSON.version;
            const versionSegments = packageJSON.version.split('.');
            packageJSON.version = `${versionSegments[0]}.${versionSegments[1]}.${Number(versionSegments[2]) + 1}`;
            await fs.writeFile('package.json', JSON.stringify(packageJSON, undefined, 4), 'utf8');
            console.info(`✅ Version bumped from ${oldVersion} to ${packageJSON.version}.`);
        } else {
            packageJSON.version = '0.0.001';
            await fs.writeFile('package.json', JSON.stringify(packageJSON, undefined, 4), 'utf8');
            console.warn(`⚠️ Version initialised to ${packageJSON.version}.`);
        }
    } catch (error) {
        console.error('❌ Error bumping package version.', error);
    }
}

// Utilities - Echo not implemented.
function echoScriptNotImplemented(name: string): void {
    console.error(`❌ ${name} script not implemented.`);
}

// Utilities - Send deployment notice.
async function sendDeploymentNotice(): Promise<void> {
    try {
        console.info('🚀 Sending deployment notice...');
        const configJSON = JSON.parse(await fs.readFile('config.json', 'utf8')) as ModuleConfig;
        const options = {
            body: JSON.stringify(configJSON),
            headers: { 'Content-Type': 'application/json' },
            method: 'PUT'
        };
        const response = await fetch(`https://api.datapos.app/states/${configJSON.id}`, options);
        if (!response.ok) throw new Error(await response.text());
        console.info('✅ Deployment notice sent.');
    } catch (error) {
        console.error('❌ Error sending deployment notice.', error);
    }
}

// Utilities - Synchronise with GitHub.
async function syncWithGitHub(): Promise<void> {
    try {
        console.info('🚀 Synchronising with GitHub....');
        const packageJSON = JSON.parse(await fs.readFile('package.json', 'utf8')) as PackageJson;
        await exec('git add .');
        await exec(`git commit -m "v${packageJSON.version}"`);
        await exec('git push origin main:main');
        console.info(`✅ Synchronised version ${packageJSON.version} with GitHub.`);
    } catch (error) {
        console.error('❌ Error synchronising with GitHub.', error);
    }
}

// Utilities - Upload directory to Cloudflare R2.
async function uploadDirectoryToR2(sourceDirectory: string, uploadDirectory: string): Promise<void> {
    try {
        console.info('🚀 Uploading directory to R2....');
        async function listDirectoryEntriesRecursively(currentSourceDirectory: string, currentDestinationDirectory: string, names: string[]) {
            for (const name of names) {
                const sourceItemPath = `${currentSourceDirectory}/${name}`;
                const destinationItemPath = `${currentDestinationDirectory}/${name}`;
                const stats = await fs.stat(sourceItemPath);
                if (stats.isDirectory()) {
                    const nextLevelChildren = await fs.readdir(sourceItemPath);
                    await listDirectoryEntriesRecursively(sourceItemPath, destinationItemPath, nextLevelChildren);
                } else {
                    console.info(`⚙️ Uploading '${currentSourceDirectory}/${name}'.`);
                    const command = `wrangler r2 object put "datapos-sample-data-eu/${currentDestinationDirectory}/${name}" --file="${currentSourceDirectory}/${name}" --jurisdiction=eu --remote`;
                    const response = await exec(command);
                    if (response.stderr) throw new Error(response.stderr);
                }
            }
        }
        const toplevelNames = await fs.readdir(`${sourceDirectory}/${uploadDirectory}/`);
        await listDirectoryEntriesRecursively(`${sourceDirectory}/${uploadDirectory}`, uploadDirectory, toplevelNames);
        console.info('✅ Directory uploaded to R2.');
    } catch (error) {
        console.error('❌ Error uploading directory to R2.', error);
    }
}

// Utilities - Upload module configuration ro Cloudflare 'state' durable object..
async function uploadModuleConfigToDO(): Promise<void> {
    try {
        console.info('🚀 Uploading module configuration....');
        const configJSON = JSON.parse(await fs.readFile('config.json', 'utf8')) as ModuleConfigZ;
        const stateId = configJSON.id;
        const options = {
            body: JSON.stringify(configJSON),
            headers: { 'Content-Type': 'application/json' },
            method: 'PUT'
        };
        const response = await fetch(`https://api.datapos.app/states/${stateId}`, options);
        if (!response.ok) throw new Error(await response.text());
        console.info('✅ Module configuration uploaded.');
    } catch (error) {
        console.error('❌ Error uploading module configuration.', error);
    }
}

// Utilities - Upload module to Cloudflare R2.
async function uploadModuleToR21(fromPath: string, toPath: string): Promise<void> {
    try {
        console.info('🚀 Uploading module to R2....');
        const packageJSON = JSON.parse(await fs.readFile('package.json', 'utf8')) as PackageJson;
        const toPathWithVersion = toPath.replace(/^(.*?\.)/, `$1v${packageJSON.version}.`);

        const { stderr } = await exec(`wrangler r2 object put ${toPathWithVersion} --file=dist/${fromPath} --content-type application/javascript --jurisdiction=eu --remote`);
        if (stderr) throw new Error(stderr);

        console.info('✅ Module uploaded to R2.');
    } catch (error) {
        console.error('❌ Error uploading module to R2.', error);
    }
}

// Utilities - Upload module to Cloudflare R2.
async function uploadModuleToR2(distDir: string, presenterDir: string): Promise<void> {
    try {
        console.info('🚀 Uploading module to R2...');
        const packageJSON = JSON.parse(await fs.readFile('package.json', 'utf8')) as PackageJson;
        const versionedDir = `v${packageJSON.version}`;
        async function uploadDir(dir: string) {
            const entries = await fs.readdir(dir, { withFileTypes: true });
            for (const entry of entries) {
                console.log(1111, entry);
                console.log(2222, path);
                // const fullPath = path.join(dir, entry.name);
                // if (entry.isDirectory()) {
                //     await uploadDir(fullPath);
                // } else {
                //     const relativePath = path.relative('dist', fullPath);
                //     const r2Path = path.join(presenterDir, versionedDir, relativePath).replace(/\\/g, '/');
                //     const contentType = fullPath.endsWith('.js') ? 'application/javascript' : fullPath.endsWith('.css') ? 'text/css' : 'application/octet-stream';
                //     // const { stderr } = await exec(`wrangler r2 object put ${r2Path} --file=${fullPath} --content-type ${contentType} --jurisdiction=eu --remote`);
                //     // if (stderr) throw new Error(stderr);
                //     console.info(`✅ Uploaded ${relativePath} to ${r2Path}`);
                // }
            }
        }
        await uploadDir('dist');
        console.info('✅ Module uploaded to R2.');
    } catch (error) {
        console.error('❌ Error uploading module to R2.', error);
    }
}
// Exposures
export {
    buildConfig,
    buildConnectorConfig,
    buildContextConfig,
    buildInformerConfig,
    buildPresenterConfig,
    buildPublicDirectoryIndex,
    bumpVersion,
    echoScriptNotImplemented,
    sendDeploymentNotice,
    syncWithGitHub,
    uploadDirectoryToR2,
    uploadModuleConfigToDO,
    uploadModuleToR2
};
