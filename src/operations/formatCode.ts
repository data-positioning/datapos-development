/**
 * Format code utilities.
 */

/* eslint-disable unicorn/no-process-exit */

// Dependencies - Vendor.
import { existsSync } from 'node:fs';

// Dependencies - Framework.
import { logOperationHeader, logOperationSuccess, spawnCommand } from '@/utilities';

// Utilities - Format.
async function formatCode(): Promise<void> {
    try {
        logOperationHeader('Format Code');

        const optionalDirectories = ['app', 'src'];
        // eslint-disable-next-line security/detect-non-literal-fs-filename
        const optionalGlobs = optionalDirectories.filter((directory) => existsSync(directory)).map((directory) => `${directory}/**`);
        const formatTargets = ['--write', '*.json', '*.md', '*.ts', ...optionalGlobs];
        await spawnCommand('1️⃣  Format', 'prettier', formatTargets);

        logOperationSuccess('Code formatted.');
    } catch (error) {
        console.error('❌ Error formatting code.', error);
        process.exit(1);
    }
}

// Exposures
export { formatCode };
