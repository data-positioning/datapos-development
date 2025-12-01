/**
 * Development operations.
 */
declare function buildPublicDirectoryIndex(id: string): Promise<void>;
declare function uploadDirectoryToR2(sourceDirectory: string, uploadDirectory: string): Promise<void>;
declare function uploadModuleConfigToDO(): Promise<void>;
declare function uploadModuleToR2(uploadDirectoryPath: string): Promise<void>;
export { buildPublicDirectoryIndex, uploadDirectoryToR2, uploadModuleConfigToDO, uploadModuleToR2 };
export { buildProject, releaseProject, syncProjectWithGitHub, testProject } from './operations/manageProject';
export { auditDependencies } from './operations/auditDependencies';
export { checkDependencies } from './operations/checkDependencies';
export { documentDependencies } from './operations/documentDependencies';
export { formatCode } from './operations/formatCode';
export { lintCode } from './operations/lintCode';
export { updateDataPosDependencies } from './operations/updateDataPosDependencies';
