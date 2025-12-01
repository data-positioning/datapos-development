/**
 * Development operations.
 */
declare function buildPublicDirectoryIndex(id: string): Promise<void>;
export { buildPublicDirectoryIndex };
export { buildProject, releaseProject, syncProjectWithGitHub, testProject } from './operations/manageProject';
export { auditDependencies } from './operations/auditDependencies';
export { checkDependencies } from './operations/checkDependencies';
export { documentDependencies } from './operations/documentDependencies';
export { formatCode } from './operations/formatCode';
export { lintCode } from './operations/lintCode';
export { updateDataPosDependencies } from './operations/updateDataPosDependencies';
