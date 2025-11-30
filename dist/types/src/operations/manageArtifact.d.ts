/**
 * Manage artifact operation.
 */
declare function buildArtifact(): Promise<void>;
declare function releaseArtifact(): Promise<void>;
declare function syncArtifactWithGitHub(): Promise<void>;
export { buildArtifact, releaseArtifact, syncArtifactWithGitHub };
