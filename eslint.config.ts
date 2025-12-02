/**
 * ESLint configuration.
 */

// Dependencies - Framework.
import datapos from '@datapos/eslint-config-datapos';

// Exposures - Configuration.
export default [
    ...datapos,
    {
        rules: {
            'unicorn/switch-case-braces': ['warn', 'always']
        }
    }
];
