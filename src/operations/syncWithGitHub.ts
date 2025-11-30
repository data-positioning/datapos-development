/**
 * Sync operation.
 */

/* eslint-disable unicorn/no-process-exit */

// Dependencies - Vendor.
import type { PackageJson } from 'type-fest';

// Dependencies - Framework.
import { execCommand, logOperationHeader, logOperationSuccess, logStepHeader, readJSONFile, writeJSONFile } from '../utilities';

// Operations - Synchronise with GitHub.
async function syncWithGitHub(): Promise<void> {
    try {
        logOperationHeader('Synchronising with GitHub');

        const packageJSON = await readJSONFile<PackageJson>('package.json');

        logStepHeader('Bump version');
        await bumpVersion(packageJSON);

        await execCommand('git add .');
        await execCommand(`git commit -m "v${packageJSON.version}"`);
        await execCommand('git push origin main:main');

        logOperationSuccess(`Version ${packageJSON.version} synchronised with GitHub.`);
    } catch (error) {
        console.error('❌ Error synchronising with GitHub.', error);
        process.exit(1);
    }
}

// Helper - Bump artifact version.
async function bumpVersion(packageJSON: PackageJson, path = './'): Promise<void> {
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

export { syncWithGitHub };
