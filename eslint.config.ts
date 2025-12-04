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
            'sonarjs/todo-tag': 'warn',
            'unicorn/prefer-switch': 'warn'
        }
    }
];
