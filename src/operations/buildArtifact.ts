/**
 * Build artifact operation.
 */

/* eslint-disable unicorn/no-process-exit */

// Dependencies - Framework.
import { logOperationHeader, logOperationSuccess, spawnCommand } from '../utilities';

// Operations - Build artifact.
async function buildArtifact(): Promise<void> {
    try {
        logOperationHeader('Build Artifact');

        await spawnCommand('vite', ['build']);

        logOperationSuccess('Artifact built.');
    } catch (error) {
        console.error('❌ Error building artifact.', error);
        process.exit(1);
    }
}

export { buildArtifact };
