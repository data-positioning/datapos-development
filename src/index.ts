/**
 * Development utilities.
 */

// Dependencies - Vendor.
import { exec } from 'node:child_process';
import { promises as fs } from 'node:fs';
import { nanoid } from 'nanoid';
import type { PackageJson } from 'type-fest';
import { promisify } from 'node:util';

import * as walk from 'acorn-walk';
import { parseScript } from 'meriyah';
import { parse } from 'acorn';

// Dependencies - Framework.
import { CONNECTOR_DESTINATION_OPERATIONS, CONNECTOR_SOURCE_OPERATIONS } from '@datapos/datapos-shared';
import type {
    ConnectorConfig,
    ConnectorOperation,
    ConnectorUsageId,
    ContextConfig,
    ContextOperation,
    ModuleConfig,
    PresenterConfig,
    PresenterOperation
} from '@datapos/datapos-shared';

// NOTE: import { moduleConfigSchema, ModuleConfigZ } from '@datapos/datapos-shared';

// Types/Interfaces - Directory entry.
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

// Utilities - Build configuration.
async function buildConfig(): Promise<void> {
    try {
        console.info('🚀 Building configuration...');
        const packageJSON = JSON.parse(await fs.readFile('package.json', 'utf8')) as PackageJson;
        const configJSON = JSON.parse(await fs.readFile('config.json', 'utf8')) as ModuleConfig;

        // NOTE: moduleConfigSchema.parse(configJSON);

        if (packageJSON.name != null) configJSON.id = packageJSON.name.replace('@datapos/', '').replace('@data-positioning/', '');
        if (packageJSON.version != null) configJSON.version = packageJSON.version;
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

        async function listDirectoryEntriesRecursively(directoryPath: string, names: string[]): Promise<void> {
            console.info(`⚙️ Processing directory '${directoryPath}'...`);
            const entries: DirectoryEntry[] = [];
            const localDirectoryPath = directoryPath.slice(`public/${id}`.length);
            index[localDirectoryPath === '' ? '/' : localDirectoryPath] = entries;
            for (const name of names) {
                const itemPath = `${directoryPath}/${name}`;
                try {
                    // eslint-disable-next-line security/detect-non-literal-fs-filename
                    const stats = await fs.stat(itemPath);
                    if (stats.isDirectory()) {
                        // eslint-disable-next-line security/detect-non-literal-fs-filename
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

        // eslint-disable-next-line security/detect-non-literal-fs-filename
        const toplevelNames = await fs.readdir(`public/${id}`);
        await listDirectoryEntriesRecursively(`public/${id}`, toplevelNames);
        // eslint-disable-next-line security/detect-non-literal-fs-filename
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
        const configJSON = JSON.parse(await fs.readFile('config.json', 'utf8')) as ConnectorConfig;
        const indexCode = await fs.readFile('src/index.ts', 'utf8');

        const ast1 = parse(indexCode, { ecmaVersion: 2020, sourceType: 'module' });
        walk.simple(ast1, {
            FunctionDeclaration(node) {
                console.log('function', node);
            },
            MethodDefinition(node) {
                console.log('method', node);
            }
        });

        const ast2 = parseScript(indexCode, { next: true, module: true });
        function visit(node: any): void {
            if (node.type === 'FunctionDeclaration') {
                console.log('function', node);
            } else if (node.type === 'MethodDefinition') {
                console.log('method', node);
            }
        }
        visit(ast2);

        let destinationOperations = false;
        let sourceOperations = false;
        const regex = /^\s{4}(?:async\s+)?(private\s+)?(?:public\s+|protected\s+)?([A-Za-z_]\w*)\s*\(/gm;
        const matches = [...indexCode.matchAll(regex)].filter((match) => match[1] == null && match[2] !== 'constructor');
        const operations: ConnectorOperation[] = [];
        for (const match of matches) {
            const operation = match[2] as ConnectorOperation;
            operations.push(operation);
            if (CONNECTOR_DESTINATION_OPERATIONS.includes(operation)) destinationOperations = true;
            if (CONNECTOR_SOURCE_OPERATIONS.includes(operation)) sourceOperations = true;
        }
        if (operations.length > 0) console.info(`ℹ️  Implements ${operations.length} operations.`);
        else console.warn('⚠️  Implements no operations.');

        let usageId: ConnectorUsageId;
        if (sourceOperations && destinationOperations) usageId = 'bidirectional';
        else if (sourceOperations) usageId = 'source';
        else if (destinationOperations) usageId = 'destination';
        else usageId = 'unknown';
        if (usageId === 'unknown') {
            console.warn('⚠️  No usage identified.');
        } else {
            console.info(`ℹ️  Supports ${usageId} usage.`);
        }

        if (packageJSON.name != null) configJSON.id = packageJSON.name;
        configJSON.operations = operations;
        configJSON.usageId = usageId;
        if (packageJSON.version != null) configJSON.version = packageJSON.version;

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
        const configJSON = JSON.parse(await fs.readFile('config.json', 'utf8')) as ContextConfig;
        const indexCode = await fs.readFile('src/index.ts', 'utf8');

        const regex = /^\s{4}(?:async\s+)?(private\s+)?(?:public\s+|protected\s+)?([A-Za-z_]\w*)\s*\(/gm;
        const operations = [...indexCode.matchAll(regex)]
            .filter((match) => match[1] == null && match[2] !== 'constructor') // match[1] is 'private ' if present.
            .map((match) => match[2]) as ContextOperation[];

        if (packageJSON.name != null) configJSON.id = packageJSON.name;
        configJSON.operations = operations;
        if (packageJSON.version != null) configJSON.version = packageJSON.version;

        await fs.writeFile('config.json', JSON.stringify(configJSON, undefined, 4), 'utf8');
        console.info('✅ Context configuration built.');
    } catch (error) {
        console.error('❌ Error building context configuration.', error);
    }
}

// Utilities - Build presenter configuration.
async function buildPresenterConfig(): Promise<void> {
    try {
        console.info('🚀 Building presenter configuration...');
        const packageJSON = JSON.parse(await fs.readFile('package.json', 'utf8')) as PackageJson;
        const configJSON = JSON.parse(await fs.readFile('config.json', 'utf8')) as PresenterConfig;
        const indexCode = await fs.readFile('src/index.ts', 'utf8');

        const regex = /^\s{4}(?:async\s+)?(private\s+)?(?:public\s+|protected\s+)?([A-Za-z_]\w*)\s*\(/gm;
        const operations = [...indexCode.matchAll(regex)]
            .filter((m) => m[1] == null && m[2] !== 'constructor') // m[1] is 'private ' if present.
            .map((m) => m[2]) as PresenterOperation[];

        if (packageJSON.name != null) configJSON.id = packageJSON.name;
        configJSON.operations = operations;
        if (packageJSON.version != null) configJSON.version = packageJSON.version;

        await fs.writeFile('config.json', JSON.stringify(configJSON, undefined, 4), 'utf8');
        console.info('✅ Presenter configuration built.');
    } catch (error) {
        console.error('❌ Error building context configuration.', error);
    }
}

// Utilities - Bump version.
async function bumpVersion(path = './'): Promise<void> {
    try {
        console.info('🚀 Bumping version...');
        const packageJSON = JSON.parse(await fs.readFile(`${path}package.json`, 'utf8')) as PackageJson;
        if (packageJSON.version == null) {
            packageJSON.version = '0.0.001';
            await fs.writeFile(`${path}package.json`, JSON.stringify(packageJSON, undefined, 4), 'utf8');
            console.warn(`⚠️ Version initialised to ${packageJSON.version}.`);
        } else {
            const oldVersion = packageJSON.version;
            const versionSegments = packageJSON.version.split('.');
            packageJSON.version = `${versionSegments[0]}.${versionSegments[1]}.${Number(versionSegments[2]) + 1}`;
            await fs.writeFile(`${path}package.json`, JSON.stringify(packageJSON, undefined, 4), 'utf8');
            console.info(`✅ Version bumped from ${oldVersion} to ${packageJSON.version}.`);
        }
    } catch (error) {
        console.error('❌ Error bumping package version.', error);
    }
}

// Utilities - Echo not implemented.
function echoScriptNotImplemented(name: string): void {
    console.error(`❌ ${name} script not implemented.`);
}

// Utilities - Insert licenses into README file.
async function insertLicensesIntoReadme(): Promise<void> {
    const START_MARKER = '<!-- DEPENDENCY_LICENSES_START -->';
    const END_MARKER = '<!-- DEPENDENCY_LICENSES_END -->';
    try {
        const licensesContent = (await fs.readFile('./licenses.md', 'utf8')).trim();
        const readmeContent = await fs.readFile('./README.md', 'utf8');
        const startIdx = readmeContent.indexOf(START_MARKER);
        const endIdx = readmeContent.indexOf(END_MARKER);
        if (startIdx === -1 || endIdx === -1) {
            console.error('❌ Dependency license markers not found in readme file.');
            process.exit(1);
        }
        const newContent = readmeContent.substring(0, startIdx + START_MARKER.length) + '\n' + licensesContent + '\n' + readmeContent.substring(endIdx);
        await fs.writeFile('README.md', newContent, 'utf8');
        console.log('✅ Readme file updated with license information');
    } catch (error) {
        console.error('❌ Error updating readme file.', error);
        process.exit(1);
    }
}

// Utilities - Insert OWASP dependency check badge into README file.
async function insertOWASPDependencyCheckBadgeIntoReadme(): Promise<void> {
    const START_MARKER = '<!-- OWASP_BADGE_START -->';
    const END_MARKER = '<!-- OWASP_BADGE_END -->';
    try {
        const dependencyCheckData = JSON.parse(await fs.readFile('./dependency-check-reports/dependency-check-report.json', 'utf-8')) as {
            dependencies: { vulnerabilities?: { severity?: string }[] }[];
        };
        interface SeverityCounts {
            critical: number;
            high: number;
            moderate: number;
            low: number;
            unknown: number;
        }
        const severityCounts: SeverityCounts = { critical: 0, high: 0, moderate: 0, low: 0, unknown: 0 };
        for (const dependency of dependencyCheckData.dependencies) {
            if (dependency.vulnerabilities == null) continue;
            for (const vulnerability of dependency.vulnerabilities) {
                const severity = (vulnerability.severity?.toLowerCase() ?? 'unknown') as keyof SeverityCounts;
                if (severity in severityCounts) {
                    severityCounts[severity]++;
                } else {
                    severityCounts.unknown++;
                }
            }
        }

        // Generate shield badges for each severity
        // If needed a possible info color could be #0288D1. See sample badges in ~/tests/sampleBadges.md.
        interface BadgeConfig {
            color: string;
            label: string;
        }
        const severityBadgeConfig: Record<keyof SeverityCounts, BadgeConfig> = {
            critical: { color: 'D32F2F', label: 'critical' },
            high: { color: 'EF6C00', label: 'high' },
            moderate: { color: 'FBC02D', label: 'moderate' },
            low: { color: '6D8C31', label: 'low' },
            unknown: { color: '616161', label: 'unknown' }
        };

        const configJSON = JSON.parse(await fs.readFile('config.json', 'utf8')) as PresenterConfig;
        const badges: string[] = [];
        const totalVulnerabilities = Object.values(severityCounts).reduce<number>((sum, count: number) => sum + count, 0);
        if (totalVulnerabilities === 0) {
            console.info('✅ No vulnerabilities found.');
            const badgeUrl = 'https://img.shields.io/badge/OWASP-passed-4CAF50';
            badges.push(`[![OWASP](${badgeUrl})](https://data-positioning.github.io/${configJSON.id}/dependency-check-reports/dependency-check-report.html)`);
        } else {
            for (const [severity, count] of Object.entries(severityCounts) as [string, number][]) {
                const config = severityBadgeConfig[severity as keyof SeverityCounts];
                console.warn(`⚠️  ${count} ${config.label} vulnerability(ies) found.`);
                if (count === 0) continue;
                const badgeUrl = `https://img.shields.io/badge/OWASP-${count}%20${config.label}-${config.color}`;
                badges.push(`[![OWASP](${badgeUrl})](https://data-positioning.github.io/${configJSON.id}/dependency-check-reports/dependency-check-report.html)`);
            }
        }

        // Insert badges into README
        const readmeContent = await fs.readFile('./README.md', 'utf8');
        const startIdx = readmeContent.indexOf(START_MARKER);
        const endIdx = readmeContent.indexOf(END_MARKER);

        if (startIdx === -1 || endIdx === -1) {
            console.error('❌ OWASP badge markers not found in README.md.');
            process.exit(1);
        }

        const badgeContent = badges.join(' ');
        const newContent = readmeContent.substring(0, startIdx + START_MARKER.length) + badgeContent + readmeContent.substring(endIdx);
        await fs.writeFile('README.md', newContent, 'utf8');
        console.info('✅ OWASP dependency check badge(s) inserted into README.md');
    } catch (error) {
        console.error('❌ Error updating README with OWASP badges:', error);
        process.exit(1);
    }
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
        await asyncExec('git add .');
        await asyncExec(`git commit -m "v${packageJSON.version}"`);
        await asyncExec('git push origin main:main');
        console.info(`✅ Synchronised version ${packageJSON.version} with GitHub.`);
    } catch (error) {
        console.error('❌ Error synchronising with GitHub.', error);
    }
}

// Utilities - Upload directory to Cloudflare R2.
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

// Utilities - Upload module configuration ro Cloudflare 'state' durable object..
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

// Utilities - Upload module to Cloudflare R2.
async function uploadModuleToR2(uploadDirPath: string): Promise<void> {
    try {
        console.info('🚀 Uploading module to R2...');
        const packageJSON = JSON.parse(await fs.readFile('package.json', 'utf8')) as PackageJson;
        const version = `v${packageJSON.version}`;
        async function uploadDir(currentDir: string, prefix = ''): Promise<void> {
            const entries = await fs.readdir(currentDir, { withFileTypes: true });
            for (const entry of entries) {
                const fullPath = `${currentDir}/${entry.name}`;
                const relativePath = prefix ? `${prefix}/${entry.name}` : entry.name;
                if (entry.isDirectory()) {
                    // await uploadDir(fullPath, relativePath); // TODO: We only want primary javascript and dynamically loaded chunks.
                } else {
                    const r2Path = `${uploadDirPath}_${version}/${relativePath}`.replace(/\\/g, '/');
                    const contentType = entry.name.endsWith('.js') ? 'application/javascript' : entry.name.endsWith('.css') ? 'text/css' : 'application/octet-stream';
                    console.info(`⚙️ Uploading '${relativePath}' → '${r2Path}'...`);
                    const { stderr } = await asyncExec(`wrangler r2 object put "${r2Path}" --file="${fullPath}" --content-type ${contentType} --jurisdiction=eu --remote`);
                    if (stderr) throw new Error(stderr);
                }
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
    buildPresenterConfig,
    buildPublicDirectoryIndex,
    bumpVersion,
    echoScriptNotImplemented,
    insertLicensesIntoReadme,
    insertOWASPDependencyCheckBadgeIntoReadme,
    sendDeploymentNotice,
    syncWithGitHub,
    uploadDirectoryToR2,
    uploadModuleConfigToDO,
    uploadModuleToR2
};
