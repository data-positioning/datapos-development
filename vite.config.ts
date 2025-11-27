/**
 * Vite configuration.
 */

// Dependencies - Vendor.
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { resolve } from 'node:path';
import { visualizer } from 'rollup-plugin-visualizer';
import { fileURLToPath, URL } from 'node:url';

// Exposures - Configuration.
export default defineConfig({
    build: {
        lib: {
            entry: resolve('src/index.ts'),
            fileName: (format) => `datapos-development.${format}.js`,
            formats: ['es'],
            name: 'DataPosDevelopment'
        },
        target: 'ESNext',
        rollupOptions: {
            external: ['node:child_process', 'node:fs', 'node-pty', 'node:readline', 'nanoid', 'node:util'],
            plugins: [
                visualizer({
                    filename: 'stats/index.html', // HTML report.
                    open: false, // Automatically opens in browser.
                    gzipSize: true, // Show gzip sizes.
                    brotliSize: true // Show brotli sizes.
                })
            ]
        }
    },
    plugins: [dts({ outDir: 'dist/types' })],
    resolve: {
        alias: {
            '~': resolve(__dirname, '.'),
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
});
