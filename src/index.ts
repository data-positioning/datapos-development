/**
 * Development operations.
 */

/* eslint-disable security/detect-non-literal-fs-filename */

// Dependencies - Vendor.
import { exec } from 'node:child_process';
import { promises as fs } from 'node:fs';
import { nanoid } from 'nanoid';
import type { PackageJson } from 'type-fest';
import { promisify } from 'node:util';

// Dependencies - Framework.
import type { ModuleConfig } from '@datapos/datapos-shared';

/// Interfaces/Types - Directory entry.
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
const asyncExec = promisify(exec);

// Operations - Build public directory index.
async function buildPublicDirectoryIndex(id: string): Promise<void> {
    try {
        console.info(`🚀 Building public directory index for identifier '${id}'...`);
        const index: Record<string, DirectoryEntry[]> = {};

        async function listDirectoryEntriesRecursively(directoryPath: string, names: string[]): Promise<void> {
            console.info(`⚙️ Processing directory '${directoryPath}'...`);
            const entries: DirectoryEntry[] = [];
            const localDirectoryPath = directoryPath.slice(`public/${id}`.length);
            index[localDirectoryPath === '' ? '/' : localDirectoryPath] = entries;
            for (const name of names) {
                const itemPath = `${directoryPath}/${name}`;
                try {
                    const stats = await fs.stat(itemPath);
                    if (stats.isDirectory()) {
                        const nextLevelChildren = await fs.readdir(itemPath);
                        const folderEntry: DirectoryFolderEntry = { childCount: nextLevelChildren.length, name, typeId: 'folder' };
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
                return typeComparison === 0 ? left.name.localeCompare(right.name) : typeComparison;
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

// Operations - Upload directory to Cloudflare R2.
async function uploadDirectoryToR2(sourceDirectory: string, uploadDirectory: string): Promise<void> {
    try {
        console.info('🚀 Uploading directory to R2....');
        async function listDirectoryEntriesRecursively(currentSourceDirectory: string, currentDestinationDirectory: string, names: string[]): Promise<void> {
            for (const name of names) {
                const sourceItemPath = `${currentSourceDirectory}/${name}`;
                const destinationItemPath = `${currentDestinationDirectory}/${name}`;
                const stats = await fs.stat(sourceItemPath);
                if (stats.isDirectory()) {
                    const nextLevelChildren = await fs.readdir(sourceItemPath);
                    await listDirectoryEntriesRecursively(sourceItemPath, destinationItemPath, nextLevelChildren);
                } else {
                    console.info(`⚙️ Uploading '${currentSourceDirectory}/${name}'...`);
                    const command = `wrangler r2 object put "datapos-sample-data-eu/${currentDestinationDirectory}/${name}" --file="${currentSourceDirectory}/${name}" --jurisdiction=eu --remote`;
                    const response = await asyncExec(command);
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

// Operations - Upload module configuration ro Cloudflare 'state' durable object..
async function uploadModuleConfigToDO(): Promise<void> {
    try {
        console.info('🚀 Uploading module configuration....');
        const configJSON = JSON.parse(await fs.readFile('config.json', 'utf8')) as ModuleConfig;
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

// Operations - Upload module to Cloudflare R2.
async function uploadModuleToR2(uploadDirectoryPath: string): Promise<void> {
    try {
        console.info('🚀 Uploading module to R2...');
        const packageJSON = JSON.parse(await fs.readFile('package.json', 'utf8')) as PackageJson;
        const version = `v${packageJSON.version}`;
        async function uploadDirectory(currentDirectory: string, prefix = ''): Promise<void> {
            const entries = await fs.readdir(currentDirectory, { withFileTypes: true });
            for (const entry of entries) {
                const fullPath = `${currentDirectory}/${entry.name}`;
                const relativePath = prefix ? `${prefix}/${entry.name}` : entry.name;
                if (entry.isDirectory()) continue;
                const r2Path = `${uploadDirectoryPath}_${version}/${relativePath}`.replaceAll('\\', '/');
                const nonJavaScripContentType = entry.name.endsWith('.css') ? 'text/css' : 'application/octet-stream';
                const contentType = entry.name.endsWith('.js') ? 'application/javascript' : nonJavaScripContentType;
                console.info(`⚙️ Uploading '${relativePath}' → '${r2Path}'...`);
                const { stderr } = await asyncExec(`wrangler r2 object put "${r2Path}" --file="${fullPath}" --content-type ${contentType} --jurisdiction=eu --remote`);
                if (stderr) throw new Error(stderr);
            }
        }
        await uploadDirectory('dist');
        console.info('✅ Module uploaded to R2.');
    } catch (error) {
        console.error('❌ Error uploading module to R2.', error);
    }
}

// Exposures - Operations.
export { buildPublicDirectoryIndex, uploadDirectoryToR2, uploadModuleConfigToDO, uploadModuleToR2 };

export { buildProject, releaseProject, syncProjectWithGitHub, testProject } from './operations/manageProject';
export { auditDependencies } from './operations/auditDependencies';
export { checkDependencies } from './operations/checkDependencies';
export { documentDependencies } from './operations/documentDependencies';
export { formatCode } from './operations/formatCode';
export { lintCode } from './operations/lintCode';
export { updateDataPosDependencies } from './operations/updateDataPosDependencies';
