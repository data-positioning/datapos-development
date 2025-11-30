/**
 * Utilities.
 */

/* eslint-disable security/detect-non-literal-fs-filename */

// Dependencies - Vendor.
import acornTypeScript from 'acorn-typescript';
import { promises as fs } from 'node:fs';
import { promisify } from 'node:util';
import type { DotenvConfigOptions, DotenvConfigOutput } from 'dotenv';
import { exec, spawn } from 'node:child_process';
import { type MethodDefinition, type Node, Parser } from 'acorn';

// Dependencies - Framework.
import { CONNECTOR_DESTINATION_OPERATIONS, CONNECTOR_SOURCE_OPERATIONS, type ConnectorOperation, type ConnectorUsageId, type ModuleConfig } from '@datapos/datapos-shared';

// Interfaces/Types
interface BadgeConfig {
    color: string;
    label: string;
}
export interface SeverityCounts {
    critical: number;
    high: number;
    moderate: number;
    low: number;
    unknown: number;
}

// Constants
export const ALLOWED_SEVERITY_KEYS = ['critical', 'high', 'moderate', 'low', 'unknown'] as (keyof SeverityCounts)[];

// Initialisation
const asyncExec = promisify(exec);

// Helpers - Build OWASP badges.
async function buildOWASPBadges(severityCounts: SeverityCounts): Promise<string[]> {
    // If needed a possible info color could be #0288D1. See sample badges in ~/tests/sampleBadges.md.
    const severityBadgeConfig: Record<keyof SeverityCounts, BadgeConfig> = {
        critical: { color: 'D32F2F', label: 'critical' },
        high: { color: 'EF6C00', label: 'high' },
        moderate: { color: 'FBC02D', label: 'moderate' },
        low: { color: '6D8C31', label: 'low' },
        unknown: { color: '616161', label: 'unknown' }
    };

    const configJSON = JSON.parse(await fs.readFile('config.json', 'utf8')) as ModuleConfig;
    const badges: string[] = [];
    const totalVulnerabilities = Object.values(severityCounts).reduce<number>((sum, count: number) => sum + count, 0);
    if (totalVulnerabilities === 0) {
        console.info('✅ No vulnerabilities found.');
        const badgeUrl = 'https://img.shields.io/badge/OWASP-passed-4CAF50';
        badges.push(`[![OWASP](${badgeUrl})](https://data-positioning.github.io/${configJSON.id}/dependency-check-reports/dependency-check-report.html)`);
    } else {
        for (const [severity, count] of Object.entries(severityCounts) as [string, number][]) {
            const config = severityBadgeConfig[severity as keyof SeverityCounts];
            console.warn(`⚠️  ${count} ${config.label} vulnerability(ies) found.`);
            if (count === 0) continue;
            const badgeUrl = `https://img.shields.io/badge/OWASP-${count}%20${config.label}-${config.color}`;
            badges.push(`[![OWASP](${badgeUrl})](https://data-positioning.github.io/${configJSON.id}/dependency-check-reports/dependency-check-report.html)`);
        }
    }
    return badges;
}

// Helpers - Extract operations from source.
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

// Helpers - Determine connector usage identifier.
function determineConnectorUsageId(operations: ConnectorOperation[]): ConnectorUsageId {
    let sourceOps = false;
    let destinationOps = false;
    for (const operation of operations) {
        if (CONNECTOR_SOURCE_OPERATIONS.includes(operation)) sourceOps = true;
        if (CONNECTOR_DESTINATION_OPERATIONS.includes(operation)) destinationOps = true;
    }
    if (sourceOps && destinationOps) return 'bidirectional';
    if (sourceOps) return 'source';
    if (destinationOps) return 'destination';
    return 'unknown';
}

// Helpers - Execute command.
async function execCommand(command: string): Promise<void> {
    logStepHeader(`Execute command: ${command}`);
    const { stdout, stderr } = await asyncExec(command);
    if (stdout.trim()) console.log(stdout.trim());
    if (stderr.trim()) console.error(stderr.trim());
}

// Helpers - Load environment variables.
async function loadEnvironmentVariables(): Promise<void> {
    logStepHeader('Load environment variables');
    const dotenv = (await import('dotenv')) as { config(options?: DotenvConfigOptions): DotenvConfigOutput };
    dotenv.config();
}

// Helpers - Log operation header.
function logOperationHeader(text: string): void {
    const cyan = '\u001B[36m';
    const reset = '\u001B[0m';
    const line = '─'.repeat(text.length + 10);
    console.info(`\n${cyan}${line}`);
    console.info(`🚀 ${text}`);
    console.info(`${line}${reset}`);
}

// Helpers - Log operation success.
function logOperationSuccess(message: string): void {
    console.info(`\n✅ ${message}\n`);
}

// Helpers - Log step header.
function logStepHeader(text: string): void {
    console.info(`\n▶️  ${text}`);
}

// Helpers - Read JSON file.
async function readJSONFile<T>(path: string): Promise<T> {
    logStepHeader(`Load JSON file '${path}'`);
    return JSON.parse(await fs.readFile(path, 'utf8')) as T;
}

// Helpers - Spawn command.
async function spawnCommand(command: string, arguments_: string[] = []): Promise<void> {
    logStepHeader(`Spawn command: ${command} ${arguments_.join(' ')}`);
    return new Promise((resolve, reject) => {
        const child = spawn(command, arguments_, { stdio: 'inherit' });
        child.on('close', (code) => {
            if (code === 0) {
                resolve();
            } else {
                reject(new Error(`${command} exited with code ${code}`));
            }
        });
    });
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

// Helpers - Write JSON file.
async function writeJSONFile(path: string, data: string): Promise<void> {
    logStepHeader(`Write JSON file '${path}'`);
    await fs.writeFile(path, JSON.stringify(data, undefined, 4), 'utf8');
}

export {
    buildOWASPBadges,
    determineConnectorUsageId,
    execCommand,
    extractOperationsFromSource,
    loadEnvironmentVariables,
    logOperationHeader,
    logOperationSuccess,
    logStepHeader,
    readJSONFile,
    spawnCommand,
    writeJSONFile
};
