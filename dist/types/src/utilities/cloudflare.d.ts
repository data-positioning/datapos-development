/**
 * Utilities.
 */
declare function uploadDirectoryToR2(sourceDirectory: string, uploadDirectory: string): Promise<void>;
declare function uploadModuleConfigToDO(): Promise<void>;
declare function uploadModuleToR2(uploadDirectoryPath: string): Promise<void>;
export { uploadDirectoryToR2, uploadModuleConfigToDO, uploadModuleToR2 };
