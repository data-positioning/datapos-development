/**
 * Manage project operation.
 */

/* eslint-disable unicorn/no-process-exit */

// Dependencies - Framework.
import { connectorConfigSchema } from '../schemas/connectorSchema';
import { contextConfigSchema } from '../schemas/contextSchema';
import type { PackageJson } from 'type-fest';
import { presenterConfigSchema } from '../schemas/presenterSchema';
import {
    execCommand,
    extractOperationsFromSource,
    logOperationHeader,
    logOperationSuccess,
    logStepHeader,
    readJSONFile,
    readTextFile,
    spawnCommand,
    writeJSONFile
} from '../utilities';

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
import { putState, uploadModuleConfigToDO, uploadModuleToR2 } from '../utilities/cloudflare';

// Interfaces/Types
type PackageTypeId = 'api' | 'app' | 'connector' | 'context' | 'dev' | 'engine' | 'presenter' | 'resources' | 'shared' | 'tool' | 'other';

// Operations - Build project.
async function buildProject(): Promise<void> {
    try {
        logOperationHeader('Build Project');

        await spawnCommand('1️⃣  Bundle project', 'vite', ['build']);

        logOperationSuccess('Project built.');
    } catch (error) {
        console.error('❌ Error building project.', error);
        process.exit(1);
    }
}
// Operations - Release project.
async function releaseProject(): Promise<void> {
    try {
        logOperationHeader('Release Project');

        const packageJSON = await readJSONFile<PackageJson>('package.json');
        const configJSON = await readJSONFile<ModuleConfig>('config.json');

        await bumpProjectVersion('1️⃣', packageJSON);

        const packageTypeId = determinePackageTypeId(packageJSON);

        switch (packageTypeId) {
            case 'connector':
                await buildConnectorProjectConfig('2️⃣', packageJSON);
                break;
            case 'context':
                await buildContextProjectConfig('2️⃣', packageJSON);
                break;
            case 'presenter':
                await buildPresenterProjectConfig('2️⃣', packageJSON);
                break;
            default:
                await buildProjectConfig('2️⃣', packageJSON);
        }

        await spawnCommand('3️⃣  Bundle project', 'vite', ['build']);

        await execCommand('4️⃣  Stage changes', 'git', ['add', '.']);

        await execCommand('5️⃣  Commit changes', 'git', ['commit', '-m', `"v${packageJSON.version}"`]);

        await execCommand('6️⃣  Push changes', 'git', ['push', 'origin', 'main:main']);

        const moduleGroupName = determineModuleGroupName(packageTypeId);
        if (packageTypeId === 'app') {
            logStepHeader('7️⃣  Register module');
            await putState();
        } else if (packageTypeId === 'engine') {
            logStepHeader('7️⃣  Register module');
            await uploadModuleConfigToDO();
            await uploadModuleToR2(`datapos-engine-eu/${moduleGroupName}`);
        } else if (moduleGroupName === undefined) {
            logStepHeader('7️⃣  Registration NOT required.');
        } else {
            logStepHeader('7️⃣  Register module');
            await uploadModuleConfigToDO();
            const moduleTypeName = configJSON.id.split('-').slice(2).join('-');
            await uploadModuleToR2(`datapos-engine-eu/${moduleGroupName}/${moduleTypeName}`);
        }

        // TODO: Convert this to a map.
        if (
            packageTypeId === 'connector' ||
            packageTypeId === 'context' ||
            packageTypeId === 'dev' ||
            packageTypeId === 'presenter' ||
            packageTypeId === 'shared' ||
            packageTypeId === 'tool'
        ) {
            await spawnCommand('8️⃣  Publish to npm', 'npm', ['publish', '--access', 'public']);
        } else {
            logStepHeader(`8️⃣  Publishing NOT required for package with type identifier of '${packageTypeId}'.`);
        }

        logOperationSuccess(`Project version '${packageJSON.version}' released.`);
    } catch (error) {
        console.error('❌ Error releasing project.', error);
        process.exit(1);
    }
}

// Operations - Synchronise project with GitHub.
async function syncProjectWithGitHub(): Promise<void> {
    try {
        logOperationHeader('Synchronise Project with GitHub');

        const packageJSON = await readJSONFile<PackageJson>('package.json');

        logStepHeader('Bump project version');
        await bumpProjectVersion('1️⃣', packageJSON);

        await execCommand('2️⃣  Stage changes', 'git', ['add', '.']);

        await execCommand('3️⃣  Commit changes', 'git', ['commit', '-m', `"v${packageJSON.version}"`]);

        await execCommand('4️⃣  Push changes', 'git', ['push', 'origin', 'main:main']);

        logOperationSuccess(`Project version '${packageJSON.version}' synchronised with GitHub.`);
    } catch (error) {
        console.error('❌ Error synchronising project with GitHub.', error);
        process.exit(1);
    }
}

// Operations - Test project.
function testProject(): void {
    try {
        logOperationHeader('Test Project');

        console.log("\n❌ Test project is not implemented. No 'vitest' command.\n");
    } catch (error) {
        console.error('❌ Error testing project.', error);
        process.exit(1);
    }
}

// Helpers - Build project configuration.
async function buildProjectConfig(stepIcon: string, packageJSON: PackageJson): Promise<void> {
    logStepHeader(`${stepIcon}  Build project configuration`);

    const configJSON = await readJSONFile<ModuleConfig>('config.json');
    if (packageJSON.name != null) configJSON.id = packageJSON.name.replace('@datapos/', '').replace('@data-positioning/', '');
    if (packageJSON.version != null) configJSON.version = packageJSON.version;
    await writeJSONFile('config.json', configJSON);
}

// Operations - Build connector project configuration.
async function buildConnectorProjectConfig(stepIcon: string, packageJSON: PackageJson): Promise<void> {
    logStepHeader(`${stepIcon}  Build connector project configuration`);

    const [configJSON, indexCode] = await Promise.all([readJSONFile<ConnectorConfig>('config.json'), readTextFile('src/index.ts')]);

    const response = connectorConfigSchema.safeParse(configJSON);
    if (!response.success) {
        console.log('❌ Configuration is invalid:');
        console.table(response.error.issues);
        return;
    }

    const operations = extractOperationsFromSource<ConnectorOperation>(indexCode);
    const usageId = determineConnectorUsageId(operations);

    if (operations.length > 0) {
        console.info(`ℹ️  Implements ${operations.length} operations:`);
        console.table(operations);
    } else console.warn('⚠️  Implements no operations.');

    if (usageId === 'unknown') console.warn('⚠️  No usage identified.');
    else console.info(`ℹ️  Supports '${usageId}' usage.`);

    if (packageJSON.name != null) configJSON.id = packageJSON.name.replace('@datapos/', '').replace('@data-positioning/', '');
    if (packageJSON.version != null) configJSON.version = packageJSON.version;
    configJSON.operations = operations;
    configJSON.usageId = usageId;

    await writeJSONFile('config.json', configJSON);
}

// Operations - Build context project configuration.
async function buildContextProjectConfig(stepIcon: string, packageJSON: PackageJson): Promise<void> {
    logStepHeader(`${stepIcon}  Build context project configuration`);

    const [configJSON, indexCode] = await Promise.all([readJSONFile<ContextConfig>('config.json'), readTextFile('src/index.ts')]);

    const response = contextConfigSchema.safeParse(configJSON);
    if (!response.success) {
        console.log('❌ Configuration is invalid:');
        console.table(response.error.issues);
        return;
    }

    const operations = extractOperationsFromSource<ContextOperation>(indexCode);
    if (operations.length > 0) {
        console.info(`ℹ️  Implements ${operations.length} operations:`);
        console.table(operations);
    } else console.warn('⚠️  Implements no operations.');

    if (packageJSON.name != null) configJSON.id = packageJSON.name.replace('@datapos/', '').replace('@data-positioning/', '');
    if (packageJSON.version != null) configJSON.version = packageJSON.version;
    configJSON.operations = operations;

    await writeJSONFile('config.json', configJSON);
}

// Operations - Build presenter project configuration.
async function buildPresenterProjectConfig(stepIcon: string, packageJSON: PackageJson): Promise<void> {
    logStepHeader(`${stepIcon}  Build presenter project configuration`);

    const [configJSON, indexCode] = await Promise.all([readJSONFile<PresenterConfig>('config.json'), readTextFile('src/index.ts')]);

    const response = presenterConfigSchema.safeParse(configJSON);
    if (!response.success) {
        console.log('❌ Configuration is invalid:');
        console.table(response.error.issues);
        return;
    }

    const operations = extractOperationsFromSource<PresenterOperation>(indexCode);
    if (operations.length > 0) {
        console.info(`ℹ️  Implements ${operations.length} operations:`);
        console.table(operations);
    } else console.warn('⚠️  Implements no operations.');

    if (packageJSON.name != null) configJSON.id = packageJSON.name.replace('@datapos/', '').replace('@data-positioning/', '');
    if (packageJSON.version != null) configJSON.version = packageJSON.version;
    configJSON.operations = operations;

    await writeJSONFile('config.json', configJSON);
}

// Helper - Bump project version.
async function bumpProjectVersion(stepIcon: string, packageJSON: PackageJson, path = './'): Promise<void> {
    logStepHeader(`${stepIcon}  Bump project version`);

    if (packageJSON.version == null) {
        packageJSON.version = '0.0.001';
        console.warn(`⚠️ Project version initialised to '${packageJSON.version}'.`);
        await writeJSONFile(`${path}package.json`, packageJSON);
    } else {
        const oldVersion = packageJSON.version;
        const versionSegments = packageJSON.version.split('.');
        packageJSON.version = `${versionSegments[0]}.${versionSegments[1]}.${Number(versionSegments[2]) + 1}`;
        console.info(`Project version bumped from '${oldVersion}' to '${packageJSON.version}'.`);
        await writeJSONFile(`${path}package.json`, packageJSON);
    }
}

// Helpers - Determine connector usage identifier.
function determineConnectorUsageId(operations: ConnectorOperation[]): ConnectorUsageId {
    let sourceOps = false;
    let destinationOps = false;
    for (const operation of operations) {
        if (CONNECTOR_SOURCE_OPERATIONS.includes(operation)) sourceOps = true;
        if (CONNECTOR_DESTINATION_OPERATIONS.includes(operation)) destinationOps = true;
    }
    if (sourceOps && destinationOps) return 'bidirectional';
    if (sourceOps) return 'source';
    if (destinationOps) return 'destination';
    return 'unknown';
}

// Helpers - Determine module group name.
function determineModuleGroupName(packageTypeId: PackageTypeId): string | undefined {
    switch (packageTypeId) {
        case 'engine':
            return 'engine';
        case 'connector':
            return 'connectors';
        case 'context':
            return 'contexts';
        case 'presenter':
            return 'presenters';
        case 'tool':
            return 'tools';
        default:
            return;
    }
}

// Helpers - Determine package type identifier.
function determinePackageTypeId(packageJSON: PackageJson): PackageTypeId {
    const packageName = packageJSON.name ?? '';
    if (packageName === 'datapos-app') return 'app';
    else if (packageName === 'datapos-api') return 'api';
    else if (packageName === 'datapos-engine') return 'engine';
    else if (packageName === '@datapos/datapos-shared') return 'shared';
    else if (packageName === '@datapos/datapos-development')
        return 'dev'; // TODO: See '@datapos/' prefix. Needed in other tests?
    else if (packageName.includes('datapos-connector')) return 'connector';
    else if (packageName.includes('datapos-context')) return 'context';
    else if (packageName.includes('datapos-presenter')) return 'presenter';
    else if (packageName.includes('datapos-tool')) return 'tool';
    else return 'other';
}

export { buildProject, releaseProject, syncProjectWithGitHub, testProject };
