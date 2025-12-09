/**
 * ESLint configuration.
 */

// Dependencies - Framework.
import datapos from '@datapos/eslint-config-datapos';

// Exposures - Configuration.
export default [
    ...datapos,
    {
        settings: {
            'import/core-modules': ['sonda/vite'] // Treat sonda plugin as resolved for eslint-plugin-import.
        }
    }
];
