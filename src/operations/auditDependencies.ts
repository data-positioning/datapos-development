/**
 * Audit dependencies operations
 */

/* eslint-disable unicorn/no-process-exit */

// Dependencies - Framework.
import type { ModuleConfig } from '@datapos/datapos-shared';
import { loadEnvironmentVariables, logOperationHeader, logOperationSuccess, logStepHeader, readJSONFile, readTextFile, spawnCommand, writeTextFile } from '../utilities';

// Interfaces/Types
interface DependencyCheckData {
    dependencies: { vulnerabilities?: { severity?: string }[] }[];
}
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

// Operations - Audit dependencies.
async function auditDependencies(): Promise<void> {
    try {
        logOperationHeader('Audit Dependencies');

        await loadEnvironmentVariables();

        await spawnCommand('owasp-dependency-check', [
            '--project',
            '@datapos/datapos-development',
            '--enableRetired',
            '--nodePackageSkipDevDependencies',
            '--nvdApiKey',
            process.env.NVD_API_KEY ?? ''
        ]);

        logStepHeader("Insert OWASP Badge(s) into 'README.md'");
        await insertOWASPDependencyCheckBadgeIntoReadme();

        await spawnCommand('npm', ['audit']);

        logOperationSuccess('Dependency auditing complete.');
    } catch (error) {
        console.error('❌ Error auditing dependencies.', error);
        process.exit(1);
    }
}

// Helpers - Insert OWASP dependency check badge into README file.
async function insertOWASPDependencyCheckBadgeIntoReadme(): Promise<void> {
    const START_MARKER = '<!-- OWASP_BADGES_START -->';
    const END_MARKER = '<!-- OWASP_BADGES_END -->';
    try {
        const dependencyCheckData = await readJSONFile<DependencyCheckData>('./dependency-check-reports/dependency-check-report.json');
        const severityCounts: SeverityCounts = { critical: 0, high: 0, moderate: 0, low: 0, unknown: 0 };
        for (const dependency of dependencyCheckData.dependencies) {
            if (dependency.vulnerabilities == null) continue;
            for (const vulnerability of dependency.vulnerabilities) {
                const severity = (vulnerability.severity?.toLowerCase() ?? 'unknown') as keyof SeverityCounts;
                if (severity in severityCounts) {
                    const severityKey = ALLOWED_SEVERITY_KEYS.find((key) => key === severity);
                    severityCounts[severityKey ?? 'unknown']++;
                } else {
                    severityCounts.unknown++;
                }
            }
        }

        // Generate shield badges for each severity
        const badges = await buildOWASPBadges(severityCounts);

        // Insert badges into README
        const readmeContent = await readTextFile('./README.md');
        const startIndex = readmeContent.indexOf(START_MARKER);
        const endIndex = readmeContent.indexOf(END_MARKER);

        if (startIndex === -1 || endIndex === -1) {
            console.error("❌ No OWASP badge markers found in 'README.md'.");
            return;
        }

        const badgeContent = badges.join(' ');
        const newContent = readmeContent.slice(0, Math.max(0, startIndex + START_MARKER.length)) + badgeContent + readmeContent.slice(Math.max(0, endIndex));
        await writeTextFile('README.md', newContent);
        console.info("✅ OWASP audit badge(s) inserted into 'README.md'");
    } catch (error) {
        console.error("❌ Error inserting OWASP badges into 'README.md'.", error);
    }
}

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

    const configJSON = await readJSONFile<ModuleConfig>('config.json');
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

export { auditDependencies };
