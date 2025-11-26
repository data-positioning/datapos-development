/**
 *
 */

// Dependencies - Vendor.
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { promises as fs } from 'node:fs';

// Dependencies - Application.
import { buildConfig, bumpVersion, echoScriptNotImplemented } from '@/index';

describe('Development Utilities', () => {
    describe('bumpVersion', () => {
        beforeEach(async () => {
            // Setup: Create a temporary package.json
            const mockPackage = {
                name: '@datapos/test-module',
                version: '1.2.3'
            };
            await fs.writeFile('package.json.test', JSON.stringify(mockPackage, undefined, 4), 'utf8');
        });

        afterEach(async () => {
            // Cleanup
            await fs.unlink('package.json.test').catch(() => {});
        });

        it('should increment patch version', async () => {
            // Arrange
            const initialVersion = '1.2.3';

            // Act
            await bumpVersion();

            // Assert
            const updated = JSON.parse(await fs.readFile('package.json', 'utf8'));
            expect(updated.version).toBe('1.2.4');
        });

        it('should initialize version if missing', async () => {
            // Arrange
            const pkg = { name: '@datapos/test' };
            await fs.writeFile('package.json', JSON.stringify(pkg), 'utf8');

            // Act
            await bumpVersion();

            // Assert
            const updated = JSON.parse(await fs.readFile('package.json', 'utf8'));
            expect(updated.version).toBe('0.0.001');
        });
    });

    describe('echoScriptNotImplemented', () => {
        it('should log error message to console', () => {
            // Arrange
            const consoleSpy = vi.spyOn(console, 'error');

            // Act
            echoScriptNotImplemented('Deploy');

            // Assert
            expect(consoleSpy).toHaveBeenCalledWith('❌ Deploy script not implemented.');

            // Cleanup
            consoleSpy.mockRestore();
        });
    });

    describe('buildConfig', () => {
        it('should update config.json with package info', async () => {
            // Arrange
            const mockConfig = { id: '', version: '' };
            const mockPackage = { name: '@datapos/test-lib', version: '2.0.0' };

            await fs.writeFile('config.json', JSON.stringify(mockConfig), 'utf8');
            await fs.writeFile('package.json', JSON.stringify(mockPackage), 'utf8');

            // Act
            await buildConfig();

            // Assert
            const updated = JSON.parse(await fs.readFile('config.json', 'utf8'));
            expect(updated.id).toBe('test-lib');
            expect(updated.version).toBe('2.0.0');
        });
    });
});
