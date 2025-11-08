/**
 * Development utilities.
 */
declare function buildConfig(): Promise<void>;
declare function buildPublicDirectoryIndex(id: string): Promise<void>;
declare function buildConnectorConfig(): Promise<void>;
declare function buildContextConfig(): Promise<void>;
declare function buildInformerConfig(): Promise<void>;
declare function buildPresenterConfig(): Promise<void>;
declare function bumpVersion(): Promise<void>;
declare function echoScriptNotImplemented(name: string): void;
declare function sendDeploymentNotice(): Promise<void>;
declare function syncWithGitHub(): Promise<void>;
declare function uploadDirectoryToR2(sourceDirectory: string, uploadDirectory: string): Promise<void>;
declare function uploadModuleConfig(): Promise<void>;
declare function uploadModuleToR2(fromPath: string, toPath: string): Promise<void>;
export { buildConfig, buildConnectorConfig, buildContextConfig, buildInformerConfig, buildPresenterConfig, buildPublicDirectoryIndex, bumpVersion, echoScriptNotImplemented, sendDeploymentNotice, syncWithGitHub, uploadDirectoryToR2, uploadModuleConfig, uploadModuleToR2 };
