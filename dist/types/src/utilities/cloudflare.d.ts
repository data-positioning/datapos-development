/**
 * Utilities.
 */
declare function putState(): Promise<void>;
declare function uploadDirectoryToR2(sourceDirectory: string, uploadDirectory: string): Promise<void>;
declare function uploadModuleConfigToDO(): Promise<void>;
declare function uploadModuleToR2(uploadDirectoryPath: string): Promise<void>;
export { putState, uploadDirectoryToR2, uploadModuleConfigToDO, uploadModuleToR2 };
