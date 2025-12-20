/**
 * Update datapos dependencies utilities.
 */

/* eslint-disable unicorn/no-process-exit */

// Dependencies - Vendor.
import { fileURLToPath } from 'node:url';
import path from 'node:path';

// Dependencies - Framework.
import type { ModuleConfig } from '@datapos/datapos-shared';
import type { ModuleTypeConfig } from '@/utilities';
import { getModuleConfig, logOperationHeader, logOperationSuccess, readJSONFile, readTextFile, spawnCommand, writeTextFile } from '@/utilities';

// Constants
const STEP_ICONS = ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣'];

// Operations - Update datapos dependencies.
async function updateDataPosDependencies(dependencies: string[] = []): Promise<void> {
    try {
        logOperationHeader("Update '@datapos/datapos' Dependencies");

        for (const [index, dependency] of dependencies.entries()) {
            const stepIcon = STEP_ICONS.at(index) ?? '🔢';
            if (dependency === 'eslint') {
                await spawnCommand(`${stepIcon}  Update '${dependency}'`, 'npm', ['install', '@datapos/eslint-config-datapos@latest']);
            } else {
                await spawnCommand(`${stepIcon}  Update '${dependency}'`, 'npm', ['install', `@datapos/datapos-${dependency}@latest`]);
                if (dependency === 'development') {
                    const configJSON = await readJSONFile<ModuleConfig>('config.json');
                    const moduleTypeConfig = getModuleConfig(configJSON.id);

                    await syncProjectConfigFiles(moduleTypeConfig);
                }
            }
        }

        logOperationSuccess("'@datapos/datapos' dependencies updated.");
    } catch (error) {
        console.error("❌ Error updating '@datapos/datapos' dependencies.", error);
        process.exit(1);
    }
}

// Helpers - Synchronise project configuration files.
async function syncProjectConfigFiles(moduleTypeConfig: ModuleTypeConfig): Promise<void> {
    console.log(1111, moduleTypeConfig);
    const moduleDirectory = path.dirname(fileURLToPath(import.meta.url));
    await syncConfigFile(moduleDirectory, '../', '.editorconfig');
    await syncConfigFile(moduleDirectory, '../', '.gitattributes');
    await syncConfigFile(moduleDirectory, '../', '.markdownlint.json');
    await syncConfigFile(moduleDirectory, '../', 'LICENSE');
    if (moduleTypeConfig.isPublish) {
        await syncConfigFile(moduleDirectory, '../', '.gitignore_published');
    }
}

async function syncConfigFile(moduleDirectory: string, templateFilePath: string, fileName: string): Promise<void> {
    console.log(2222, moduleDirectory, templateFilePath, fileName);
    const templatePath = path.resolve(moduleDirectory, `${templateFilePath}${fileName}`);
    console.log(3333, templatePath);
    const templateContent = await readTextFile(templatePath);

    const destinationPath = path.resolve(process.cwd(), fileName);
    console.log(4444, destinationPath);

    let destinationContent;
    try {
        destinationContent = await readTextFile(destinationPath);
    } catch (error) {
        if ((error as NodeJS.ErrnoException).code !== 'ENOENT') throw error;
    }

    if (destinationContent === templateContent) {
        console.info(`ℹ️  File '${fileName}' is already up to date.`);
        return;
    }

    await writeTextFile(destinationPath, templateContent);
    console.info(`ℹ️  File '${fileName}' synchronised.`);
}

// Exposures
export { updateDataPosDependencies };
