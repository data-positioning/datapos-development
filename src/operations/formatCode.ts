/**
 * Format code operation.
 */

/* eslint-disable unicorn/no-process-exit */

// Dependencies - Framework.
import { logOperationHeader, logOperationSuccess, spawnCommand } from '../utilities';

// Operations - Format.
async function formatCode(): Promise<void> {
    try {
        logOperationHeader('Format Code');

        await spawnCommand('', 'prettier', ['--write', 'src/']);

        logOperationSuccess('Code formatting complete.');
    } catch (error) {
        console.error('❌ Error formatting code.', error);
        process.exit(1);
    }
}

export { formatCode };
