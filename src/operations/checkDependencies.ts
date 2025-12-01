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

        await spawnCommand("1️⃣. Check using 'npm outdated'", 'npm', ['outdated'], true);

        await spawnCommand("2️⃣. Check using 'npm-check-updates'", 'npm-check-updates', ['-i']);

        logOperationSuccess('Dependencies checked.');
    } catch (error) {
        console.error('❌ Error checking dependencies.', error);
        process.exit(1);
    }
}

export { checkDependencies };
