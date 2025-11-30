/**
 * Manage artifact operation.
 */
declare function buildArtifact(): Promise<void>;
declare function releaseArtifact(): Promise<void>;
declare function syncArtifactWithGitHub(): Promise<void>;
declare function testArtifact(): void;
export { buildArtifact, releaseArtifact, syncArtifactWithGitHub, testArtifact };
