/**
 * Format operation.
 */

/* eslint-disable unicorn/no-process-exit */

// Dependencies - Framework.
import { logOperationHeader, logOperationSuccess, spawnCommand } from '../utilities';

// Operations - Format.
async function format(): Promise<void> {
    try {
        logOperationHeader('Format');

        await spawnCommand('prettier', ['--write', 'src/']);

        logOperationSuccess('Format complete.');
    } catch (error) {
        console.error('❌ Error formatting.', error);
        process.exit(1);
    }
}

export { format };
