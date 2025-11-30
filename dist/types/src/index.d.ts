/**
 * Development operations.
 */
declare function buildConfig(): Promise<void>;
declare function buildConnectorConfig(): Promise<void>;
declare function buildContextConfig(): Promise<void>;
declare function buildPresenterConfig(): Promise<void>;
declare function buildPublicDirectoryIndex(id: string): Promise<void>;
declare function echoScriptNotImplemented(name: string): void;
declare function insertLicensesIntoReadme(): Promise<void>;
declare function sendDeploymentNotice(): Promise<void>;
declare function uploadDirectoryToR2(sourceDirectory: string, uploadDirectory: string): Promise<void>;
declare function uploadModuleConfigToDO(): Promise<void>;
declare function uploadModuleToR2(uploadDirectoryPath: string): Promise<void>;
export { buildConfig, buildConnectorConfig, buildContextConfig, buildPresenterConfig, buildPublicDirectoryIndex, echoScriptNotImplemented, insertLicensesIntoReadme, sendDeploymentNotice, uploadDirectoryToR2, uploadModuleConfigToDO, uploadModuleToR2 };
export { artifactBuild } from './operations/artifactBuild';
export { auditDependencies } from './operations/auditDependencies';
export { checkDependencies } from './operations/checkDependencies';
export { document } from './operations/document';
export { format } from './operations/format';
export { lint } from './operations/lint';
export { syncWithGitHub } from './operations/syncWithGitHub';
