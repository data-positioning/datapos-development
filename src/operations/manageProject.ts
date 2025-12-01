/**
 * Manage project operation.
 */

/* eslint-disable unicorn/no-process-exit */

// Dependencies - Framework.
import type { ModuleConfig } from '@datapos/datapos-shared';
import type { PackageJson } from 'type-fest';
import { execCommand, logOperationHeader, logOperationSuccess, logStepHeader, readJSONFile, spawnCommand, writeJSONFile } from '../utilities';

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

        await buildProjectConfig('2️⃣', packageJSON);

        await spawnCommand('3️⃣  Bundle project', 'vite', ['build']);

        await execCommand('4️⃣  Stage changes', 'git', ['add', '.']);
        await execCommand('5️⃣  Commit changes', 'git', ['commit', '-m', `"v${packageJSON.version}"`]);
        await execCommand('6️⃣  Push changes', 'git', ['push', 'origin', 'main:main']);

        await spawnCommand('7️⃣. Publish to npm', 'npm', ['publish', '--access', 'public']);

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

    console.info('✔️  Configuration built.');
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
        console.info(`✔️  Project version bumped from '${oldVersion}' to '${packageJSON.version}'.`);
        await writeJSONFile(`${path}package.json`, packageJSON);
    }
}

export { buildProject, releaseProject, syncProjectWithGitHub, testProject };
