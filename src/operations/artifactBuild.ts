/**
 * Artifact build operation.
 */

/* eslint-disable unicorn/no-process-exit */

// Dependencies - Framework.
import { logOperationHeader, logOperationSuccess, spawnCommand } from '../utilities';

// Operations - Artifact build.
async function artifactBuild(): Promise<void> {
    try {
        logOperationHeader('Artifact Build');

        await spawnCommand('vite', ['build']);

        logOperationSuccess('Artifact build complete.');
    } catch (error) {
        console.error('❌ Error building artifact.', error);
        process.exit(1);
    }
}

export { artifactBuild };
