/**
 * Lint code operation.
 */

/* eslint-disable unicorn/no-process-exit */

// Dependencies - Framework.
import { logOperationHeader, logOperationSuccess, spawnCommand } from '../utilities';

// Operations - Lint code.
async function lintCode(): Promise<void> {
    try {
        logOperationHeader('Lint Code');

        await spawnCommand('', 'eslint', ['.']);

        logOperationSuccess('Code linting complete.');
    } catch (error) {
        console.error('❌ Error linting code.', error);
        process.exit(1);
    }
}

export { lintCode };
