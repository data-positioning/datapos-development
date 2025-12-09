import { PackageJson } from 'type-fest';
import { ModuleConfig } from '@datapos/datapos-shared';
declare function putState(): Promise<void>;
declare function uploadDirectoryToR2(sourceDirectory: string, uploadDirectory: string): Promise<void>;
declare function uploadModuleConfigToDO(configJSON: ModuleConfig): Promise<void>;
declare function uploadModuleToR2(packageJSON: PackageJson, uploadDirectoryPath: string): Promise<void>;
export { putState, uploadDirectoryToR2, uploadModuleConfigToDO, uploadModuleToR2 };
