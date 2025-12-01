/**
 * Manage artifact operation.
 */

/* eslint-disable unicorn/no-process-exit */

// Dependencies - Framework.
import type { ModuleConfig } from '@datapos/datapos-shared';
import type { PackageJson } from 'type-fest';
import { execCommand, logOperationHeader, logOperationSuccess, logStepHeader, readJSONFile, spawnCommand, writeJSONFile } from '../utilities';

// Operations - Build artifact.
async function buildArtifact(): Promise<void> {
    try {
        logOperationHeader('Build Artifact');

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

        await bumpArtifactVersion(packageJSON);

        await buildArtifactConfig(packageJSON);

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

// Helpers - Build artifact configuration.
async function buildArtifactConfig(packageJSON: PackageJson): Promise<void> {
    logStepHeader('Build artifact configuration');

    const configJSON = await readJSONFile<ModuleConfig>('config.json');
    if (packageJSON.name != null) configJSON.id = packageJSON.name.replace('@datapos/', '').replace('@data-positioning/', '');
    if (packageJSON.version != null) configJSON.version = packageJSON.version;
    await writeJSONFile('config.json', configJSON);

    console.info('✅ Configuration built.');
}

// Helper - Bump artifact version.
async function bumpArtifactVersion(packageJSON: PackageJson, path = './'): Promise<void> {
    logStepHeader('Bump artifact version');

    if (packageJSON.version == null) {
        packageJSON.version = '0.0.001';
        console.warn(`⚠️ Artifact version initialised to ${packageJSON.version}.`);
        await writeJSONFile(`${path}package.json`, packageJSON);
    } else {
        const oldVersion = packageJSON.version;
        const versionSegments = packageJSON.version.split('.');
        packageJSON.version = `${versionSegments[0]}.${versionSegments[1]}.${Number(versionSegments[2]) + 1}`;
        console.info(`ℹ️  Artifact version bumped from ${oldVersion} to ${packageJSON.version}.`);
        await writeJSONFile(`${path}package.json`, packageJSON);
    }
}

export { buildArtifact, releaseArtifact, syncArtifactWithGitHub, testArtifact };
