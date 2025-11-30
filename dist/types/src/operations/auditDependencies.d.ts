/**
 * Audit dependencies operations
 */
export interface SeverityCounts {
    critical: number;
    high: number;
    moderate: number;
    low: number;
    unknown: number;
}
export declare const ALLOWED_SEVERITY_KEYS: (keyof SeverityCounts)[];
declare function auditDependencies(): Promise<void>;
export { auditDependencies };
