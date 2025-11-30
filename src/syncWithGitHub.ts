/**
 * Sync operation.
 */

/* eslint-disable unicorn/no-process-exit */

// Dependencies - Vendor.
import type { PackageJson } from 'type-fest';

// Dependencies - Framework.
import { execCommand, logOperationHeader, logOperationSuccess, logStepHeader, readJSONFile, writeJSONFile } from './utilities';

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

// Helper - Bump version.
async function bumpVersion(packageJSON: PackageJson, path = './'): Promise<void> {
    try {
        if (packageJSON.version == null) {
            packageJSON.version = '0.0.001';
            await writeJSONFile(`${path}package.json`, JSON.stringify(packageJSON, undefined, 4));
            console.warn(`⚠️ Version initialised to ${packageJSON.version}.`);
        } else {
            const oldVersion = packageJSON.version;
            const versionSegments = packageJSON.version.split('.');
            packageJSON.version = `${versionSegments[0]}.${versionSegments[1]}.${Number(versionSegments[2]) + 1}`;
            await writeJSONFile(`${path}package.json`, JSON.stringify(packageJSON, undefined, 4));
            console.info(`ℹ️  Version bumped from ${oldVersion} to ${packageJSON.version}.`);
        }
    } catch (error) {
        console.error('❌ Error bumping package version.', error);
        process.exit(1);
    }
}

export { syncWithGitHub };
