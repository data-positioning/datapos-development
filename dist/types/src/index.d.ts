/**
 * Development utilities.
 */
declare function buildConfig(): Promise<void>;
declare function buildPublicDirectoryIndex(id: string): Promise<void>;
declare function buildConnectorConfig(): Promise<void>;
declare function buildContextConfig(): Promise<void>;
declare function buildPresenterConfig(): Promise<void>;
declare function bumpVersion(path?: string): Promise<void>;
declare function echoScriptNotImplemented(name: string): void;
declare function insertLicensesIntoReadme(): Promise<void>;
declare function insertOWASPDependencyCheckBadgeIntoReadme(): Promise<void>;
declare function sendDeploymentNotice(): Promise<void>;
declare function syncWithGitHub(): Promise<void>;
declare function uploadDirectoryToR2(sourceDirectory: string, uploadDirectory: string): Promise<void>;
declare function uploadModuleConfigToDO(): Promise<void>;
declare function uploadModuleToR2(uploadDirPath: string): Promise<void>;
export { buildConfig, buildConnectorConfig, buildContextConfig, buildPresenterConfig, buildPublicDirectoryIndex, bumpVersion, echoScriptNotImplemented, insertLicensesIntoReadme, insertOWASPDependencyCheckBadgeIntoReadme, sendDeploymentNotice, syncWithGitHub, uploadDirectoryToR2, uploadModuleConfigToDO, uploadModuleToR2 };
