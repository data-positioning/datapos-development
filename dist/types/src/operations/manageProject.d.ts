/**
 * Manage project operation.
 */
declare function buildProject(): Promise<void>;
declare function releaseProject(sendDeployNotice?: boolean): Promise<void>;
declare function syncProjectWithGitHub(): Promise<void>;
declare function testProject(): void;
export { buildProject, releaseProject, syncProjectWithGitHub, testProject };
