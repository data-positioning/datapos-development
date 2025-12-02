/**
 * Update datapos dependencies operation.
 */

/* eslint-disable unicorn/no-process-exit */

// Dependencies - Framework.
import { logOperationHeader, logOperationSuccess, spawnCommand } from '../utilities';

// Constants
const STEP_ICONS = ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣'];

// Operations - Update datapos dependencies.
async function updateDataPosDependencies(dependencies: string[] = []): Promise<void> {
    try {
        logOperationHeader("Update '@datapos/datapos' Dependencies");

        for (const [index, dependency] of dependencies.entries()) {
            const stepIcon = STEP_ICONS.at(index) ?? '🔢';
            await spawnCommand(`${stepIcon}  Update '${dependency}'`, 'npm', ['install', `@datapos/datapos-${dependency}@latest`]);
        }

        logOperationSuccess("'@datapos/datapos' dependencies updated.");
    } catch (error) {
        console.error("❌ Error updating '@datapos/datapos' dependencies.", error);
        process.exit(1);
    }
}

export { updateDataPosDependencies };
