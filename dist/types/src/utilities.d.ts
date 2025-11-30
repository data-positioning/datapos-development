import { ConnectorOperation, ConnectorUsageId } from '@datapos/datapos-shared';
export interface SeverityCounts {
    critical: number;
    high: number;
    moderate: number;
    low: number;
    unknown: number;
}
export declare const ALLOWED_SEVERITY_KEYS: (keyof SeverityCounts)[];
declare function buildOWASPBadges(severityCounts: SeverityCounts): Promise<string[]>;
declare function extractOperationsFromSource<T>(source: string): T[];
declare function determineConnectorUsageId(operations: ConnectorOperation[]): ConnectorUsageId;
declare function execCommand(command: string): Promise<void>;
declare function loadEnvironmentVariables(): Promise<void>;
declare function logOperationHeader(text: string): void;
declare function logOperationSuccess(message: string): void;
declare function logStepHeader(text: string): void;
declare function readJSONFile<T>(path: string): Promise<T>;
declare function spawnCommand(command: string, arguments_?: string[]): Promise<void>;
declare function writeJSONFile(path: string, data: string): Promise<void>;
export { buildOWASPBadges, determineConnectorUsageId, execCommand, extractOperationsFromSource, loadEnvironmentVariables, logOperationHeader, logOperationSuccess, logStepHeader, readJSONFile, spawnCommand, writeJSONFile };
