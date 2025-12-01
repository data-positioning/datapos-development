/**
 * Check dependencies operation.
 */

/* eslint-disable unicorn/no-process-exit */

// Dependencies - Framework.
import { logOperationHeader, logOperationSuccess, spawnCommand } from '../utilities';

// Operations - Check dependencies.
async function checkDependencies(): Promise<void> {
    try {
        logOperationHeader('Check Dependencies');

        await spawnCommand('', 'npm', ['outdated'], true);
        await spawnCommand('', 'npm-check-updates', ['-i']);

        logOperationSuccess('Dependency checking complete.');
    } catch (error) {
        console.error('❌ Error checking dependencies.', error);
        process.exit(1);
    }
}

export { checkDependencies };
