/**
 * Manage project operation.
 */
declare function buildProject(): Promise<void>;
declare function releaseProject(): Promise<void>;
declare function syncProjectWithGitHub(): Promise<void>;
declare function testProject(): void;
export { buildProject, releaseProject, syncProjectWithGitHub, testProject };
