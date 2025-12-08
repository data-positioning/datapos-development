/**
 * Utilities.
 */

/* eslint-disable security/detect-non-literal-fs-filename */

// Dependencies - Vendor.
import acornTypeScript from 'acorn-typescript';
import { promises as fs } from 'node:fs';
import { Parser } from 'acorn';
import { promisify } from 'node:util';
import type { Dirent, ObjectEncodingOptions, Stats } from 'node:fs';
import type { DotenvConfigOptions, DotenvConfigOutput } from 'dotenv';
import { exec, spawn } from 'node:child_process';
import type { MethodDefinition, Node } from 'acorn';

// Initialisation
const asyncExec = promisify(exec);

// Utilities - Extract operations from source.
function extractOperationsFromSource<T>(source: string): T[] {
    // @ts-expect-error - acorn-typescript runtime mismatch is fine.
    const TSParser = Parser.extend(acornTypeScript());
    const ast = TSParser.parse(source, {
        ecmaVersion: 'latest',
        sourceType: 'module',
        locations: true
    });

    const operations: T[] = [];

    traverseAST(ast, (node) => {
        if (node.type !== 'MethodDefinition') return;

        const md = node as MethodDefinition & { accessibility?: string };
        const key = md.key;
        if (key.type !== 'Identifier') return;
        const name = key.name;

        if (!name) return;
        if (name === 'constructor') return;
        if (md.accessibility === 'private') return;

        operations.push(name as T);
    });

    return operations;
}

// Utilities - Execute command.
async function execCommand(label: string | undefined, command_: string, arguments_: string[] = [], outputFilePath?: string): Promise<void> {
    const quoteArgument = (value: string): string => {
        if (value === '') return "''";
        if (/^[A-Za-z0-9@%_=+:,./-]+$/.test(value)) return value;
        return `'${value.replace(/'/g, "'\\''")}'`;
    };

    const command = [command_, ...arguments_.map(quoteArgument)].join(' ').trim();
    if (label !== undefined) logStepHeader(`${label} - exec(${command})`);
    const { stdout, stderr } = await asyncExec(command);
    if (outputFilePath === undefined) {
        if (stdout.trim()) console.log(stdout.trim());
    } else {
        await fs.writeFile(outputFilePath, stdout.trim(), 'utf8');
    }
    if (stderr.trim()) console.error(stderr.trim());
}

// Utilities - Get directory entries.
function getDirectoryEntries(path: string): Promise<string[]>;
function getDirectoryEntries(path: string, options: ObjectEncodingOptions): Promise<Dirent[]>;
async function getDirectoryEntries(path: string, options?: ObjectEncodingOptions): Promise<string[] | Dirent[]> {
    return fs.readdir(path, options);
}

// Utilities - Get stats for path.
async function getStatsForPath(path: string): Promise<Stats> {
    return await fs.stat(path);
}

// Utilities - Load environment variables.
async function loadEnvironmentVariables(): Promise<void> {
    logStepHeader('Load environment variables');
    const dotenv = (await import('dotenv')) as { config(options?: DotenvConfigOptions): DotenvConfigOutput };
    dotenv.config();
}

// Utilities - Log operation header.
function logOperationHeader(text: string): void {
    const cyan = '\u001B[36m';
    const reset = '\u001B[0m';
    const line = '─'.repeat(Math.max(text.length + 60, 60));
    console.info(`\n${cyan}${line}`);
    console.info(`▶️  ${text}`);
    console.info(`${line}${reset}`);
}

// Utilities - Log operation success.
function logOperationSuccess(message: string): void {
    console.info(`\n✅ ${message}\n`);
}

// Utilities - Log step header.
function logStepHeader(text: string): void {
    console.info(`\n${text}\n`);
}

// Utilities - Read JSON file.
async function readJSONFile<T>(path: string): Promise<T> {
    return JSON.parse(await fs.readFile(path, 'utf8')) as T;
}

// Utilities - Read text file.
async function readTextFile(path: string): Promise<string> {
    return await fs.readFile(path, 'utf8');
}

// Utilities - Spawn command.
async function spawnCommand(label: string, command: string, arguments_: string[] = [], ignoreErrors = false): Promise<void> {
    logStepHeader(`${label} - spawn(${command} ${arguments_.join(' ')})`);
    return new Promise((resolve, reject) => {
        const child = spawn(command, arguments_, { stdio: 'inherit' });
        child.on('close', (code) => {
            if (code === 0 || ignoreErrors) {
                resolve();
            } else {
                reject(new Error(`${command} exited with code ${code}`));
            }
        });
    });
}

// Utilities - Write JSON file.
async function writeJSONFile(path: string, data: object): Promise<void> {
    await fs.writeFile(path, JSON.stringify(data, undefined, 4), 'utf8');
}

// Utilities - Write text file.
async function writeTextFile(path: string, data: string): Promise<void> {
    await fs.writeFile(path, data, 'utf8');
}

// Helpers - Traverse AST (Abstract Syntax Tree).
function traverseAST(node: Node, doIt: (node: Node) => void): void {
    doIt(node);
    for (const [key, value_] of Object.entries(node)) {
        if (['loc', 'range', 'start', 'end', 'comments'].includes(key)) continue;
        const value = value_ as Node | undefined;
        if (Array.isArray(value)) {
            for (const child_ of value) {
                const child = child_ as Node | undefined;
                if (child && typeof child.type === 'string') traverseAST(child, doIt);
            }
        } else if (value && typeof value === 'object' && typeof value.type === 'string') {
            traverseAST(value, doIt);
        }
    }
}

// Exposures
export {
    execCommand,
    extractOperationsFromSource,
    getDirectoryEntries,
    getStatsForPath,
    loadEnvironmentVariables,
    logOperationHeader,
    logOperationSuccess,
    logStepHeader,
    readJSONFile,
    readTextFile,
    spawnCommand,
    writeJSONFile,
    writeTextFile
};
