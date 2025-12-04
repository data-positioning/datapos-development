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
            'sonarjs/prefer-switch': 'warn',
            'sonarjs/todo-tag': 'warn'
        }
    }
];
