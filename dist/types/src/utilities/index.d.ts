import { Dirent, ObjectEncodingOptions, Stats } from 'node:fs';
declare function clearDirectory(directoryPath: string): Promise<void>;
/** Utilities - Extract operations from source. */
declare function extractOperationsFromSource<T>(source: string): T[];
/** Utilities - Execute command. */
declare function execCommand(label: string | undefined, command_: string, arguments_?: string[], outputFilePath?: string): Promise<void>;
/** Utilities - Get directory entries. */
declare function getDirectoryEntries(path: string): Promise<string[]>;
declare function getDirectoryEntries(path: string, options: ObjectEncodingOptions): Promise<Dirent[]>;
/** Utilities - Get stats for path. */
declare function getStatsForPath(path: string): Promise<Stats>;
/** Utilities - Load environment variables. */
declare function loadEnvironmentVariables(): Promise<void>;
/** Utilities - Log operation header. */
declare function logOperationHeader(text: string): void;
/** Utilities - Log operation success. */
declare function logOperationSuccess(message: string): void;
/** Utilities - Log step header. */
declare function logStepHeader(text: string): void;
/** Utilities - Read JSON file. */
declare function readJSONFile<T>(path: string): Promise<T>;
declare function readTextFile(path: string): Promise<string>;
/** Utilities - Remove file. */
declare function removeFile(path: string): Promise<void>;
/** Utilities - Spawn command. */
declare function spawnCommand(label: string, command: string, arguments_?: string[], ignoreErrors?: boolean): Promise<void>;
/** Utilities - Substitute content. */
declare function substituteContent(originalContent: string, substituteContent: string, startMarker: string, endMarker: string): string;
/** Utilities - Write JSON file. */
declare function writeJSONFile(path: string, data: object): Promise<void>;
/** Utilities - Write text file. */
declare function writeTextFile(path: string, data: string): Promise<void>;
/** Exposures */
export { clearDirectory, execCommand, extractOperationsFromSource, getDirectoryEntries, getStatsForPath, loadEnvironmentVariables, logOperationHeader, logOperationSuccess, logStepHeader, readJSONFile, readTextFile, removeFile, spawnCommand, substituteContent, writeJSONFile, writeTextFile };
