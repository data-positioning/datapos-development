/**
 * Development utilities.
 */

// Dependencies - Vendor.
import { exec } from 'node:child_process';
import { promises as fs } from 'node:fs';
import { nanoid } from 'nanoid';
import type { PackageJson } from 'type-fest';
import { promisify } from 'node:util';

// Dependencies - Vendor Acorn.
import acornTypeScript from 'acorn-typescript';
import { type MethodDefinition, type Node, Parser } from 'acorn';

// Dependencies - Framework.
import { CONNECTOR_DESTINATION_OPERATIONS, CONNECTOR_SOURCE_OPERATIONS, connectorConfigSchema } from '@datapos/datapos-shared';
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

// Types/Interfaces
interface SeverityCounts {
    critical: number;
    high: number;
    moderate: number;
    low: number;
    unknown: number;
}

// Constants
const ALLOWED_SEVERITY_KEYS = ['critical', 'high', 'moderate', 'low', 'unknown'] as (keyof SeverityCounts)[];

// Initialisation
const asyncExec = promisify(exec);

// Utilities - Build configuration.
async function buildConfig(): Promise<void> {
    try {
        console.info('🚀 Building configuration...');
        const packageJSON = JSON.parse(await fs.readFile('package.json', 'utf8')) as PackageJson;
        const configJSON = JSON.parse(await fs.readFile('config.json', 'utf8')) as ModuleConfig;

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

        const [packageJSON, configJSON, indexCode] = await Promise.all([
            fs.readFile('package.json', 'utf8').then((s) => JSON.parse(s) as PackageJson),
            fs.readFile('config.json', 'utf8').then((s) => JSON.parse(s) as ConnectorConfig),
            fs.readFile('src/index.ts', 'utf8')
        ]);

        const response = connectorConfigSchema.safeParse(configJSON);
        console.log(2222, response);

        const meta = extractOperationsFromSource(indexCode);
        const usageId = determineUsageId(meta);

        if (meta.operations.length > 0) console.info(`ℹ️  Implements ${meta.operations.length} operations.`);
        else console.warn('⚠️  Implements no operations.');

        if (usageId === 'unknown') console.warn('⚠️  No usage identified.');
        else console.info(`ℹ️  Supports '${usageId}' usage.`);

        configJSON.id = packageJSON.name ?? configJSON.id;
        configJSON.version = packageJSON.version ?? configJSON.version;
        configJSON.operations = meta.operations;
        configJSON.usageId = usageId;

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

        const [packageJSON, configJSON, indexCode] = await Promise.all([
            fs.readFile('package.json', 'utf8').then((s) => JSON.parse(s) as PackageJson),
            fs.readFile('config.json', 'utf8').then((s) => JSON.parse(s) as ContextConfig),
            fs.readFile('src/index.ts', 'utf8')
        ]);

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

        const [packageJSON, configJSON, indexCode] = await Promise.all([
            fs.readFile('package.json', 'utf8').then((s) => JSON.parse(s) as PackageJson),
            fs.readFile('config.json', 'utf8').then((s) => JSON.parse(s) as PresenterConfig),
            fs.readFile('src/index.ts', 'utf8')
        ]);

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
        // eslint-disable-next-line security/detect-non-literal-fs-filename
        const packageJSON = JSON.parse(await fs.readFile(`${path}package.json`, 'utf8')) as PackageJson;
        if (packageJSON.version == null) {
            packageJSON.version = '0.0.001';
            // eslint-disable-next-line security/detect-non-literal-fs-filename
            await fs.writeFile(`${path}package.json`, JSON.stringify(packageJSON, undefined, 4), 'utf8');
            console.warn(`⚠️ Version initialised to ${packageJSON.version}.`);
        } else {
            const oldVersion = packageJSON.version;
            const versionSegments = packageJSON.version.split('.');
            packageJSON.version = `${versionSegments[0]}.${versionSegments[1]}.${Number(versionSegments[2]) + 1}`;
            // eslint-disable-next-line security/detect-non-literal-fs-filename
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
        const licensesContent1 = await fs.readFile('./licenses.md', 'utf8');
        const trimmedLicensesContent = licensesContent1.trim();
        const readmeContent = await fs.readFile('./README.md', 'utf8');
        const startIndex = readmeContent.indexOf(START_MARKER);
        const endIndex = readmeContent.indexOf(END_MARKER);
        if (startIndex === -1 || endIndex === -1) {
            console.error('❌ Dependency license markers not found in readme file.');
            return;
        }
        const newContent =
            readmeContent.slice(0, Math.max(0, startIndex + START_MARKER.length)) + '\n' + trimmedLicensesContent + '\n' + readmeContent.slice(Math.max(0, endIndex));
        await fs.writeFile('README.md', newContent, 'utf8');
        console.log('✅ Readme file updated with license information');
    } catch (error) {
        console.error('❌ Error updating readme file.', error);
    }
}

// Utilities - Insert OWASP dependency check badge into README file.
async function insertOWASPDependencyCheckBadgeIntoReadme(): Promise<void> {
    const START_MARKER = '<!-- OWASP_BADGE_START -->';
    const END_MARKER = '<!-- OWASP_BADGE_END -->';
    try {
        const dependencyCheckData = JSON.parse(await fs.readFile('./dependency-check-reports/dependency-check-report.json', 'utf8')) as {
            dependencies: { vulnerabilities?: { severity?: string }[] }[];
        };
        const severityCounts: SeverityCounts = { critical: 0, high: 0, moderate: 0, low: 0, unknown: 0 };
        for (const dependency of dependencyCheckData.dependencies) {
            if (dependency.vulnerabilities == null) continue;
            for (const vulnerability of dependency.vulnerabilities) {
                const severity = (vulnerability.severity?.toLowerCase() ?? 'unknown') as keyof SeverityCounts;
                if (severity in severityCounts) {
                    const severityKey = ALLOWED_SEVERITY_KEYS.find((key) => key === severity);
                    severityCounts[severityKey ?? 'unknown']++;
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
        const startIndex = readmeContent.indexOf(START_MARKER);
        const endIndex = readmeContent.indexOf(END_MARKER);

        if (startIndex === -1 || endIndex === -1) {
            console.error('❌ OWASP badge markers not found in README.md.');
            return;
        }

        const badgeContent = badges.join(' ');
        const newContent = readmeContent.slice(0, Math.max(0, startIndex + START_MARKER.length)) + badgeContent + readmeContent.slice(Math.max(0, endIndex));
        await fs.writeFile('README.md', newContent, 'utf8');
        console.info('✅ OWASP dependency check badge(s) inserted into README.md');
    } catch (error) {
        console.error('❌ Error updating README with OWASP badges:', error);
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
                // eslint-disable-next-line security/detect-non-literal-fs-filename
                const stats = await fs.stat(sourceItemPath);
                if (stats.isDirectory()) {
                    // eslint-disable-next-line security/detect-non-literal-fs-filename
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
        // eslint-disable-next-line security/detect-non-literal-fs-filename
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
async function uploadModuleToR2(uploadDirectoryPath: string): Promise<void> {
    try {
        console.info('🚀 Uploading module to R2...');
        const packageJSON = JSON.parse(await fs.readFile('package.json', 'utf8')) as PackageJson;
        const version = `v${packageJSON.version}`;
        async function uploadDirectory(currentDirectory: string, prefix = ''): Promise<void> {
            // eslint-disable-next-line security/detect-non-literal-fs-filename
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

// Helpers - Extract operations from source.
function extractOperationsFromSource(source: string): { operations: ConnectorOperation[]; sourceOps: boolean; destinationOps: boolean } {
    // @ts-expect-error - acorn-typescript runtime mismatch is fine.
    const TSParser = Parser.extend(acornTypeScript());
    const ast = TSParser.parse(source, {
        ecmaVersion: 'latest',
        sourceType: 'module',
        locations: true
    });

    const operations: ConnectorOperation[] = [];
    let sourceOps = false;
    let destinationOps = false;

    traverseAst(ast, (node) => {
        if (node.type !== 'MethodDefinition') return;

        const md = node as MethodDefinition & { accessibility?: string };
        const key = md.key;
        if (key.type !== 'Identifier') return;
        const name = key.name;

        if (!name) return;
        if (name === 'constructor') return;
        if (md.accessibility === 'private') return;

        operations.push(name as ConnectorOperation);

        if (CONNECTOR_SOURCE_OPERATIONS.includes(name)) sourceOps = true;
        if (CONNECTOR_DESTINATION_OPERATIONS.includes(name)) destinationOps = true;
    });

    return { operations, sourceOps, destinationOps };
}

function determineUsageId(meta: { sourceOps: boolean; destinationOps: boolean }): ConnectorUsageId {
    if (meta.sourceOps && meta.destinationOps) return 'bidirectional';
    if (meta.sourceOps) return 'source';
    if (meta.destinationOps) return 'destination';
    return 'unknown';
}

function traverseAst(node: Node, doIt: (node: Node) => void): void {
    doIt(node);
    for (const [key, value_] of Object.entries(node)) {
        if (['loc', 'range', 'start', 'end', 'comments'].includes(key)) continue;
        const value = value_ as Node | undefined;
        if (Array.isArray(value)) {
            for (const child_ of value) {
                const child = child_ as Node | undefined;
                if (child && typeof child.type === 'string') traverseAst(child, doIt);
            }
        } else if (value && typeof value === 'object' && typeof value.type === 'string') {
            traverseAst(value, doIt);
        }
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
