/**
 * Manage artifact operation.
 */
declare function buildArtifact(): Promise<void>;
declare function releaseArtifact(sendDeployNotice?: boolean): Promise<void>;
declare function syncArtifactWithGitHub(): Promise<void>;
declare function testArtifact(): void;
export { buildArtifact, releaseArtifact, syncArtifactWithGitHub, testArtifact };
