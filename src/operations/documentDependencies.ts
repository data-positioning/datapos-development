/**
 * Document dependencies operation.
 */

/* eslint-disable unicorn/no-process-exit */

// Dependencies - Vendor.
import { fileURLToPath, URL } from 'node:url';

// Dependencies - Framework.
import { execCommand, logOperationHeader, logOperationSuccess, logStepHeader, readTextFile, writeTextFile } from '../utilities';

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

        // NOTE: const LICENSE_REPORT_CONFIG = fileURLToPath(new URL(import.meta.resolve('@datapos/datapos-development/licenses/license-report-config.json')));
        const licenseReportConfigPath = fileURLToPath(new URL(import.meta.resolve('@datapos/datapos-development/license-report-config')));
        await execCommand(
            "2️⃣  Generate 'licenses.md' file",
            'license-report',
            // ['--config', 'licenses/license-report-config.json', '--only=prod,peer', '--output=markdown'],
            ['--config', `'${licenseReportConfigPath}'`, '--only=prod,peer', '--output=markdown'],
            'licenses.md'
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

    const licensesContent = await readTextFile('./licenses.md');
    const trimmedLicensesContent = licensesContent.trim();
    const readmeContent = await readTextFile('./README.md');
    const startIndex = readmeContent.indexOf(START_MARKER);
    const endIndex = readmeContent.indexOf(END_MARKER);
    if (startIndex === -1 || endIndex === -1) {
        console.error("❌ No dependency license markers found in 'README.md'.");
        return;
    }
    const newContent = `${readmeContent.slice(0, Math.max(0, startIndex + START_MARKER.length))}\n${trimmedLicensesContent}\n${readmeContent.slice(Math.max(0, endIndex))}`;
    await writeTextFile('README.md', newContent);
}

export { documentDependencies };
