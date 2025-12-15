/**
 * Update datapos dependencies utilities.
 */

/* eslint-disable unicorn/no-process-exit */

// Dependencies - Vendor.
import { fileURLToPath } from 'node:url';
import path from 'node:path';

// Dependencies - Framework.
import { logOperationHeader, logOperationSuccess, readTextFile, spawnCommand, writeTextFile } from '@/utilities';

// Constants
const STEP_ICONS = ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣'];

// Operations - Update datapos dependencies.
async function updateDataPosDependencies(dependencies: string[] = []): Promise<void> {
    try {
        logOperationHeader("Update '@datapos/datapos' Dependencies");

        for (const [index, dependency] of dependencies.entries()) {
            const stepIcon = STEP_ICONS.at(index) ?? '🔢';
            await spawnCommand(`${stepIcon}  Update '${dependency}'`, 'npm', ['install', `@datapos/datapos-${dependency}@latest`]);
            if (dependency === 'developer') await syncProjectConfigFiles();
        }

        logOperationSuccess("'@datapos/datapos' dependencies updated.");
    } catch (error) {
        console.error("❌ Error updating '@datapos/datapos' dependencies.", error);
        process.exit(1);
    }
}

// Helpers - Synchronise project configuration files.
async function syncProjectConfigFiles(typeId?: string): Promise<void> {
    const moduleDirectory = path.dirname(fileURLToPath(import.meta.url));
    await syncConfigFile(moduleDirectory, '../', '.editorconfig');
}

async function syncConfigFile(moduleDirectory: string, templateFilePath: string, fileName: string): Promise<void> {
    const templatePath = path.resolve(moduleDirectory, `${templateFilePath}${fileName}`);
    const templateContent = await readTextFile(templatePath);

    const destinationPath = path.resolve(process.cwd(), fileName);
    const destinationContent = await readTextFile(destinationPath);

    if (destinationContent === templateContent) {
        logOperationSuccess(`File '${fileName}' is already up to date.`);
        return;
    }

    await writeTextFile(destinationPath, templateContent);
    logOperationSuccess(`File '${fileName}' synchronised.`);
}

// Exposures
export { updateDataPosDependencies };
