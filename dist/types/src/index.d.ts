/**
 * Development operations.
 */
declare function buildConfig(): Promise<void>;
declare function buildConnectorConfig(): Promise<void>;
declare function buildContextConfig(): Promise<void>;
declare function buildPresenterConfig(): Promise<void>;
declare function buildPublicDirectoryIndex(id: string): Promise<void>;
declare function sendDeploymentNotice(): Promise<void>;
declare function uploadDirectoryToR2(sourceDirectory: string, uploadDirectory: string): Promise<void>;
declare function uploadModuleConfigToDO(): Promise<void>;
declare function uploadModuleToR2(uploadDirectoryPath: string): Promise<void>;
export { buildConfig, buildConnectorConfig, buildContextConfig, buildPresenterConfig, buildPublicDirectoryIndex, sendDeploymentNotice, uploadDirectoryToR2, uploadModuleConfigToDO, uploadModuleToR2 };
export { buildProject, releaseProject, syncProjectWithGitHub, testProject } from './operations/manageArtifact';
export { auditDependencies } from './operations/auditDependencies';
export { checkDependencies } from './operations/checkDependencies';
export { documentDependencies } from './operations/documentDependencies';
export { formatCode } from './operations/formatCode';
export { lintCode } from './operations/lintCode';
export { updateDataPosDependencies } from './operations/updateDataPosDependencies';
