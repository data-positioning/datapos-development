/**
 * Vite configuration.
 */

// Dependencies - Vendor.
import { defineConfig } from 'vite'; // Core Vite API.
import dts from 'vite-plugin-dts'; // Emit .d.ts files alongside the bundle.
import Sonda from 'sonda/vite'; // Visualize bundle results with Sonda plugin.
import { visualizer } from 'rollup-plugin-visualizer'; // Generate bundle size report.
import { fileURLToPath, URL } from 'node:url'; // ESM-safe path helpers.

// Dependencies - Data.
import config from './config.json' with { type: 'json' }; // Provide configuration identifier for naming.

// Exposures - Configuration.
export default defineConfig({
    build: {
        lib: {
            entry: fileURLToPath(new URL('src/index.ts', import.meta.url)), // Absolute entry path.
            fileName: (format) => `${config.id}.${format}.js`, // Bundle name derived from config identifier and format.
            formats: ['es'] // Only emit native ES modules.
        },
        rollupOptions: {
            external: ['@datapos/datapos-shared', 'dotenv', 'nanoid', 'node:child_process', 'node:fs', 'node:readline', 'node:url', 'node:util'], // Keep runtime deps out of bundle.
            plugins: [
                Sonda({ filename: 'index', format: 'html', gzip: true, brotli: true, open: false, outputDir: './bundle-reports/sonda' }), // Run Sonda analyser to generate additional bundle insights.
                visualizer({
                    filename: './bundle-reports/rollup-visualiser/index.html',
                    open: false, // Do not auto-open browser post-build.
                    gzipSize: true, // Display gzip sizes.
                    brotliSize: true // Display brotli sizes.
                })
            ]
        },
        sourcemap: true,
        target: 'ESNext' // Emit modern JavaScript for consumers.
    },
    plugins: [dts({ outDir: 'dist/types' })], // Generate type declarations in dist/types.
    resolve: {
        alias: {
            '~': fileURLToPath(new URL('./', import.meta.url)), // Base alias matching tsconfig.
            '@': fileURLToPath(new URL('src', import.meta.url)) // Source alias matching tsconfig.
        }
    }
});
