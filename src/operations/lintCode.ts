/**
 * Lint code utilities.
 */

/* eslint-disable unicorn/no-process-exit */

// Dependencies - Framework.
import { logOperationHeader, logOperationSuccess, spawnCommand } from '../utilities';

// Utilities - Lint code.
async function lintCode(): Promise<void> {
    try {
        logOperationHeader('Lint Code');

        await spawnCommand('1️⃣  Lint', 'eslint', []);

        logOperationSuccess('Code linted.');
    } catch (error) {
        console.error('❌ Error linting code.', error);
        process.exit(1);
    }
}

// Exposures
export { lintCode };
