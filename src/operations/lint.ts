/**
 * Lint operation.
 */

/* eslint-disable unicorn/no-process-exit */

// Dependencies - Framework.
import { logOperationHeader, logOperationSuccess, spawnCommand } from '../utilities';

// Operations - Lint.
async function lint(): Promise<void> {
    try {
        logOperationHeader('Lint');

        await spawnCommand('eslint', ['.']);

        logOperationSuccess('Lint complete.');
    } catch (error) {
        console.error('❌ Error linting.', error);
        process.exit(1);
    }
}

export { lint };
