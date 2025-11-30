/**
 * Update datapos dependencies operation.
 */

/* eslint-disable unicorn/no-process-exit */

// Dependencies - Framework.
import { logOperationHeader, logOperationSuccess, spawnCommand } from '../utilities';

// Operations - Update datapos dependencies.
async function updateDataPosDependencies(dependencies: string[]): Promise<void> {
    try {
        logOperationHeader('Update datapos Dependencies');

        for (const dependency of dependencies) {
            await spawnCommand('npm', ['install', `@datapos/datapos-${dependency}@latest`]);
        }

        logOperationSuccess('Updating datapos dependencies complete.');
    } catch (error) {
        console.error('❌ Error updating datapos dependencies.', error);
        process.exit(1);
    }
}

export { updateDataPosDependencies };
