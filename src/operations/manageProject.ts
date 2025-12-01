/**
 * Manage project operation.
 */

/* eslint-disable unicorn/no-process-exit */

// Dependencies - Framework.
import type { PackageJson } from 'type-fest';
import {
    determineConnectorUsageId,
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
import type { ConnectorConfig, ConnectorOperation, ContextConfig, ContextOperation, ModuleConfig, PresenterConfig, PresenterOperation } from '@datapos/datapos-shared';
import { connectorConfigSchema, contextConfigSchema, presenterConfigSchema } from '@datapos/datapos-shared';

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
async function releaseProject(sendDeployNotice = false): Promise<void> {
    try {
        logOperationHeader('Release Project');

        const packageJSON = await readJSONFile<PackageJson>('package.json');

        await bumpProjectVersion('1️⃣', packageJSON);

        const packageName = packageJSON.name ?? '';
        if (packageName.includes('datapos-connector')) await buildConnectorProjectConfig('2️⃣', packageJSON);
        else if (packageName.includes('datapos-context')) await buildContextProjectConfig('2️⃣', packageJSON);
        else if (packageName.includes('datapos-presenter')) await buildPresenterProjectConfig('2️⃣', packageJSON);
        else await buildProjectConfig('2️⃣', packageJSON);

        await spawnCommand('3️⃣  Bundle project', 'vite', ['build']);

        await execCommand('4️⃣  Stage changes', 'git', ['add', '.']);

        await execCommand('5️⃣  Commit changes', 'git', ['commit', '-m', `"v${packageJSON.version}"`]);

        await execCommand('6️⃣  Push changes', 'git', ['push', 'origin', 'main:main']);

        await spawnCommand('7️⃣. Publish to npm', 'npm', ['publish', '--access', 'public']);

        if (sendDeployNotice) await sendDeploymentNotice('8️⃣');

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

// Helpers - Send deployment notice.
async function sendDeploymentNotice(stepIcon: string): Promise<void> {
    logStepHeader(`${stepIcon}  Send deployment notice`);

    const configJSON = await readJSONFile<ModuleConfig>('config.json');
    const options = {
        body: JSON.stringify(configJSON),
        headers: { 'Content-Type': 'application/json' },
        method: 'PUT'
    };
    const response = await fetch(`https://api.datapos.app/states/${configJSON.id}`, options);
    if (!response.ok) throw new Error(await response.text());
}

export { buildProject, releaseProject, syncProjectWithGitHub, testProject };
