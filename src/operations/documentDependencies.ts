/**
 * Document dependencies operation.
 */

/* eslint-disable unicorn/no-process-exit */

// Dependencies - Vendor.
import { fileURLToPath, URL } from 'node:url';

// Dependencies - Framework.
import { execCommand, logOperationHeader, logOperationSuccess, logStepHeader, readJSONFile, readTextFile, writeTextFile } from '../utilities';

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
    licenseFileLink?: string;
}

// Constants
const START_MARKER = '<!-- DEPENDENCY_LICENSES_START -->';
const END_MARKER = '<!-- DEPENDENCY_LICENSES_END -->';

// Operations - Document.
async function documentDependencies(licenses: string[] = [], checkRecursive = true): Promise<void> {
    try {
        logOperationHeader('Document Dependencies');

        const allowedFlags = licenses.flatMap((license) => ['--allowed', license]);

        await execCommand(
            "1️⃣  Generate 'licenses.json' file",
            'license-report',
            ['--only=prod,peer', '--output=json', '--department.value=n/a', '--licensePeriod=n/a', '--material=n/a', '--relatedTo.value=n/a'],
            'licenses.json'
        );

        await execCommand("3️⃣  Check 'licenses.json' file", 'license-report-check', ['--source', './licenses.json', '--output=table', ...allowedFlags]);

        if (checkRecursive) {
            await execCommand(
                "4️⃣  Generate 'licenseTree.json' file",
                'license-report-recursive',
                ['--only=prod,peer', '--output=tree', '--recurse', '--department.value=n/a', '--licensePeriod=n/a', '--material=n/a', '--relatedTo.value=n/a'],
                'licenseTree.json'
            );

            await execCommand("5️⃣  Check 'licenseTree.json' file", 'license-report-check', ['--source', './licenseTree.json', '--output=table', ...allowedFlags]);
        } else {
            logStepHeader("4️⃣  Skip 'licenseTree.json' file generate");
            logStepHeader("5️⃣  Skip 'licenseTree.json' file check");
        }

        await execCommand('6️⃣  Download license files', 'license-downloader', ['--source', './licenses.json', '--licDir', './licenses', '--download']);

        // Establish licence report configuration file path.This in combination with exports in 'package.json'
        // allows us to share local 'licenses/license-report-config.json' file with other projects.
        // 'licenses/license-report-config.json' is in licenses directory, not top level directory, so it does not confuse GitHub license detection engine.
        const licenseReportConfigPath = fileURLToPath(new URL(import.meta.resolve('@datapos/datapos-development/license-report-config')));
        await execCommand("2️⃣  Generate 'licenses.md' file", 'license-report', ['--config', `'${licenseReportConfigPath}'`, '--only=prod,peer', '--output=json'], 'licenses2.json');

        await insertLicensesIntoReadme('7️⃣');

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

    const productionPackageLicenses = await readJSONFile<License[]>('licenses2.json');
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
    console.log('mergedLicenses', productionPackageLicenses.length, productionDownloadLicenses.length, mergedLicenses);
    let licensesContent = '|Name|\n|-|\n';
    for (const license of mergedLicenses) {
        licensesContent += `|${license.name}|\n`;
    }

    //! const newContent = `${readmeContent.slice(0, Math.max(0, startIndex + START_MARKER.length))}\n${trimmedLicensesContent}\n${readmeContent.slice(Math.max(0, endIndex))}`;
    const newContent = `${readmeContent.slice(0, Math.max(0, startIndex + START_MARKER.length))}\n${licensesContent}\n${readmeContent.slice(Math.max(0, endIndex))}`;
    await writeTextFile('README.md', newContent);
}

export { documentDependencies };
