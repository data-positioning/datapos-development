/**
 * Manage project utilities.
 */
declare function buildProject(): Promise<void>;
declare function syncProjectConfigFiles(typeId: string): Promise<void>;
declare function releaseProject(): Promise<void>;
declare function syncProjectWithGitHub(): Promise<void>;
declare function testProject(): void;
export { buildProject, releaseProject, syncProjectConfigFiles, syncProjectWithGitHub, testProject };
