/**
 * Document dependencies operation.
 */

/* eslint-disable unicorn/no-process-exit */

// Dependencies - Vendor.
import { fileURLToPath, URL } from 'node:url';

// Dependencies - Framework.
import { execCommand, loadEnvironmentVariables, logOperationHeader, logOperationSuccess, logStepHeader, readJSONFile, readTextFile, writeTextFile } from '../utilities';

// Interfaces/Types
interface License {
    department: string;
    relatedTo: string;
    name: string;
    licensePeriod: string;
    material: string;
    licenseType: string;
    link: string;
    remoteVersion: string;
    installedVersion: string;
    definedVersion: string;
    author: string;
    latestRemoteModified: string;
    licenseFileLink?: string;
}

// Constants
const START_MARKER = '<!-- DEPENDENCY_LICENSES_START -->';
const END_MARKER = '<!-- DEPENDENCY_LICENSES_END -->';

// Operations - Document.
async function documentDependencies(licenses: string[] = [], checkRecursive = true): Promise<void> {
    try {
        logOperationHeader('Document Dependencies');

        await loadEnvironmentVariables(); // Ensure GitHub token is load from '.env', required when downloading license files (step 5).

        const allowedFlags = licenses.flatMap((license) => ['--allowed', license]);

        // Establish licence report configuration file path.This in combination with exports in 'package.json'
        // allows us to share local 'licenses/license-report-config.json' file with other projects.
        // 'licenses/license-report-config.json' is in licenses directory, not top level directory, so it does not confuse GitHub license detection engine.
        const licenseReportConfigPath = fileURLToPath(new URL(import.meta.resolve('@datapos/datapos-development/license-report-config')));

        await execCommand(
            "1️⃣  Generate 'licenses.json' file",
            'license-report',
            ['--config', `'${licenseReportConfigPath}'`, '--only=prod,peer', '--output=json'],
            'licenses.json'
        );

        await execCommand("2️⃣  Check 'licenses.json' file", 'license-report-check', ['--source', './licenses.json', '--output=table', ...allowedFlags]);

        if (checkRecursive) {
            await execCommand(
                "3️⃣  Generate 'licenseTree.json' file",
                'license-report-recursive',
                ['--only=prod,peer', '--output=tree', '--recurse', '--department.value=n/a', '--licensePeriod.value=n/a', '--material.value=n/a', '--relatedTo.value=n/a'],
                'licenseTree.json'
            );

            await execCommand("4️⃣  Check 'licenseTree.json' file", 'license-report-check', ['--source', './licenseTree.json', '--output=table', ...allowedFlags]);
        } else {
            logStepHeader("3️⃣  Skip 'licenseTree.json' file generate");
            logStepHeader("4️⃣  Skip 'licenseTree.json' file check");
        }

        await execCommand('5️⃣  Download license files', 'license-downloader', ['--source', './licenses.json', '--licDir', './licenses', '--download']);

        await insertLicensesIntoReadme('6️⃣');

        logOperationSuccess('Dependencies documented.');
    } catch (error) {
        console.error('❌ Error documenting dependencies.', error);
        process.exit(1);
    }
}

// Helpers - Insert licenses into README file.
async function insertLicensesIntoReadme(stepIcon: string): Promise<void> {
    logStepHeader(`${stepIcon}  Insert licenses into 'README.md'`);

    //! const licensesContent = await readTextFile('./licenses.md');
    //! const trimmedLicensesContent = licensesContent.trim();
    const readmeContent = await readTextFile('./README.md');
    const startIndex = readmeContent.indexOf(START_MARKER);
    const endIndex = readmeContent.indexOf(END_MARKER);
    if (startIndex === -1 || endIndex === -1) {
        console.error("❌ No dependency license markers found in 'README.md'.");
        return;
    }

    const productionPackageLicenses = await readJSONFile<License[]>('licenses.json');
    const productionDownloadLicenses = await readJSONFile<License[]>('licenses/licenses.ext.json');
    const mergedLicenses = [
        ...((): MapIterator<License> => {
            const byName = new Map<string, License>();

            for (const license of productionPackageLicenses) {
                byName.set(license.name, { ...license });
            }

            for (const license of productionDownloadLicenses) {
                const existing = byName.get(license.name);
                byName.set(license.name, existing ? { ...existing, ...license } : { ...license });
            }

            return byName.values();
        })()
    ];

    let licensesContent = '|Name|Type|Installed|Latest|Latest Date|Document|\n|:-|:-:|:-:|:-:|:-|:-|\n';
    for (const license of mergedLicenses) {
        let licenseLink;
        if (license.licenseFileLink == null || license.licenseFileLink == '') {
            licenseLink = '⚠️ No license file.';
        } else {
            const lastPart = license.licenseFileLink.slice(Math.max(0, license.licenseFileLink.lastIndexOf('/') + 1));
            licenseLink = `[${lastPart}](${license.licenseFileLink})`;
        }
        licensesContent += `|${license.name}|${license.licenseType}|${license.installedVersion}|${license.remoteVersion}|${license.latestRemoteModified.split('T')[0]}|${licenseLink}|\n`;
    }

    const newContent = `${readmeContent.slice(0, Math.max(0, startIndex + START_MARKER.length))}\n${licensesContent}\n${readmeContent.slice(Math.max(0, endIndex))}`;
    await writeTextFile('README.md', newContent);
}

export { documentDependencies };
