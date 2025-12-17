/**
 * Format code utilities.
 */

/* eslint-disable unicorn/no-process-exit */

// Dependencies - Framework.
import { logOperationHeader, logOperationSuccess, spawnCommand } from '@/utilities';

// Utilities - Format.
async function formatCode(): Promise<void> {
    try {
        logOperationHeader('Format Code');

        await spawnCommand('1️⃣  Format', 'prettier', ['--write', '*.json', '*.md', '*.ts', 'app/**', 'src/**']);

        logOperationSuccess('Code formatted.');
    } catch (error) {
        console.error('❌ Error formatting code.', error);
        process.exit(1);
    }
}

// Exposures
export { formatCode };
