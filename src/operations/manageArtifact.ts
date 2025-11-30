/**
 * Manage artifact operation.
 */

/* eslint-disable unicorn/no-process-exit */

// Dependencies - Framework.
// TODO: import type { ModuleConfig } from '@datapos/datapos-shared';
import type { PackageJson } from 'type-fest';
import { execCommand, logOperationHeader, logOperationSuccess, logStepHeader, readJSONFile, spawnCommand, writeJSONFile } from '../utilities';

// Operations - Build artifact.
async function buildArtifact(): Promise<void> {
    try {
        logOperationHeader('Build Artifact');

        await buildConfig();

        await spawnCommand('vite', ['build']);

        logOperationSuccess('Artifact build complete.');
    } catch (error) {
        console.error('❌ Error building artifact.', error);
        process.exit(1);
    }
}
// Operations - Release artifact.
async function releaseArtifact(sendDeployNotice = false): Promise<void> {
    try {
        logOperationHeader('Release Artifact');

        const packageJSON = await readJSONFile<PackageJson>('package.json');

        logStepHeader('Bump artifact version');
        await bumpArtifactVersion(packageJSON);

        await spawnCommand('vite', ['build']);

        await execCommand('git', ['add', '.']);
        await execCommand('git', ['commit', '-m', `"v${packageJSON.version}"`]);
        await execCommand('git', ['push', 'origin', 'main:main']);

        await spawnCommand('npm', ['publish', '--access', 'public']);

        logOperationSuccess(`Version ${packageJSON.version} of artifact released.`);
    } catch (error) {
        console.error('❌ Error releasing artifact.', error);
        process.exit(1);
    }
}

// Operations - Synchronise artifact with GitHub.
async function syncArtifactWithGitHub(): Promise<void> {
    try {
        logOperationHeader('Synchronising Artifact with GitHub');

        const packageJSON = await readJSONFile<PackageJson>('package.json');

        logStepHeader('Bump artifact version');
        await bumpArtifactVersion(packageJSON);

        await execCommand('git', ['add', '.']);
        await execCommand('git', ['commit', '-m', `"v${packageJSON.version}"`]);
        await execCommand('git', ['push', 'origin', 'main:main']);

        logOperationSuccess(`Version ${packageJSON.version} of artifact synchronised with GitHub.`);
    } catch (error) {
        console.error('❌ Error synchronising artifact with GitHub.', error);
        process.exit(1);
    }
}

// Operations - Test artifact.
function testArtifact(): void {
    console.log('Test artifact...'); // Command: vitest
}

// Helpers - Build configuration.
async function buildConfig(): Promise<void> {
    try {
        console.info('🚀 Building configuration...');

        const packageJSON = await readJSONFile<PackageJson>('package.json');

        const configJSON = await readJSONFile<Record<string, unknown>>('config.json'); // TODO: change to <ModuleConfig>

        if (packageJSON.name != null) configJSON.id = packageJSON.name.replace('@datapos/', '').replace('@data-positioning/', '');
        if (packageJSON.version != null) configJSON.version = packageJSON.version;

        await writeJSONFile('config.json', configJSON);

        console.info('✅ Configuration built.');
    } catch (error) {
        console.error('❌ Error building configuration.', error);
    }
}

// Helper - Bump artifact version.
async function bumpArtifactVersion(packageJSON: PackageJson, path = './'): Promise<void> {
    try {
        if (packageJSON.version == null) {
            packageJSON.version = '0.0.001';
            console.warn(`⚠️ Version initialised to ${packageJSON.version}.`);
            await writeJSONFile(`${path}package.json`, packageJSON);
        } else {
            const oldVersion = packageJSON.version;
            const versionSegments = packageJSON.version.split('.');
            packageJSON.version = `${versionSegments[0]}.${versionSegments[1]}.${Number(versionSegments[2]) + 1}`;
            console.info(`ℹ️  Version bumped from ${oldVersion} to ${packageJSON.version}.`);
            await writeJSONFile(`${path}package.json`, packageJSON);
        }
    } catch (error) {
        console.error('❌ Error bumping artifact version.', error);
    }
}

export { buildArtifact, releaseArtifact, syncArtifactWithGitHub, testArtifact };
