/**
 * Utilities.
 */

// Dependencies - Vendor.
import { promises as fs } from 'node:fs';
import type { ObjectEncodingOptions } from 'node:fs';
import type { PackageJson } from 'type-fest';

// Dependencies - Framework.
import type { ModuleConfig } from '@datapos/datapos-shared';
import { execCommand, getDirectoryEntries, getStatsForPath, readJSONFile } from './index';

// Utilities - Put state.
async function putState(): Promise<void> {
    const configJSON = await readJSONFile<ModuleConfig>('config.json');
    const options = {
        body: JSON.stringify(configJSON),
        headers: { 'Content-Type': 'application/json' },
        method: 'PUT'
    };
    const response = await fetch(`https://api.datapos.app/states/${configJSON.id}`, options);
    if (!response.ok) throw new Error(await response.text());
}

// Utilities - Upload directory to Cloudflare R2.
async function uploadDirectoryToR2(sourceDirectory: string, uploadDirectory: string): Promise<void> {
    console.info('🚀 Uploading directory to R2....');
    async function listDirectoryEntriesRecursively(currentSourceDirectory: string, currentDestinationDirectory: string, names: string[]): Promise<void> {
        for (const name of names) {
            const sourceItemPath = `${currentSourceDirectory}/${name}`;
            const destinationItemPath = `${currentDestinationDirectory}/${name}`;
            const stats = await getStatsForPath(sourceItemPath);
            if (stats.isDirectory()) {
                const nextLevelChildren = await getDirectoryEntries(sourceItemPath);
                await listDirectoryEntriesRecursively(sourceItemPath, destinationItemPath, nextLevelChildren);
            } else {
                console.info(`⚙️ Uploading '${currentSourceDirectory}/${name}'...`);
                const command = `wrangler r2 object put "datapos-sample-data-eu/${currentDestinationDirectory}/${name}" --file="${currentSourceDirectory}/${name}" --jurisdiction=eu --remote`;
                await execCommand(undefined, command);
            }
        }
    }
    const toplevelNames = await getDirectoryEntries(`${sourceDirectory}/${uploadDirectory}/`);
    await listDirectoryEntriesRecursively(`${sourceDirectory}/${uploadDirectory}`, uploadDirectory, toplevelNames);
}

// Utilities - Upload module configuration to Cloudflare 'state' durable object.
async function uploadModuleConfigToDO(): Promise<void> {
    console.info('🚀 Uploading module configuration....');
    const configJSON = await readJSONFile<ModuleConfig>('config.json');
    const stateId = configJSON.id;
    const options = {
        body: JSON.stringify(configJSON),
        headers: { 'Content-Type': 'application/json' },
        method: 'PUT'
    };
    const response = await fetch(`https://api.datapos.app/states/${stateId}`, options);
    if (!response.ok) throw new Error(await response.text());
}

// Utilities - Upload module to Cloudflare R2.
async function uploadModuleToR2(uploadDirectoryPath: string): Promise<void> {
    const packageJSON = JSON.parse(await fs.readFile('package.json', 'utf8')) as PackageJson;
    const version = `v${packageJSON.version}`;
    async function uploadDirectory(currentDirectory: string, prefix = ''): Promise<void> {
        const entries = await getDirectoryEntries(currentDirectory, { withFileTypes: true } as ObjectEncodingOptions);
        for (const entry of entries) {
            const fullPath = `${currentDirectory}/${entry.name}`;
            const relativePath = prefix ? `${prefix}/${entry.name}` : entry.name;
            if (entry.isDirectory()) continue;
            const r2Path = `${uploadDirectoryPath}_${version}/${relativePath}`.replaceAll('\\', '/');
            const nonJavaScripContentType = entry.name.endsWith('.css') ? 'text/css' : 'application/octet-stream';
            const contentType = entry.name.endsWith('.js') ? 'application/javascript' : nonJavaScripContentType;
            console.info(`⚙️ Uploading '${relativePath}' → '${r2Path}'...`);
            await execCommand(undefined, `wrangler r2 object put "${r2Path}" --file="${fullPath}" --content-type ${contentType} --jurisdiction=eu --remote`);
        }
    }
    await uploadDirectory('dist');
}

// Exposures
export { putState, uploadDirectoryToR2, uploadModuleConfigToDO, uploadModuleToR2 };
