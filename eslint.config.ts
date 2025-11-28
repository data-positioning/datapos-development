/**
 * ESLint configuration.
 */

// Dependencies - Vendor.
import tseslint from '@typescript-eslint/eslint-plugin';
import tseslintParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import unicorn from 'eslint-plugin-unicorn';
import sonarjs from 'eslint-plugin-sonarjs';
import security from 'eslint-plugin-security';

// Exposures - Configuration.
export default [
    {
        files: ['vite.config.ts', 'src/**/*.ts'],
        languageOptions: { parser: tseslintParser, parserOptions: { project: './tsconfig.json' } },
        plugins: {
            '@typescript-eslint': tseslint,
            import: importPlugin,
            unicorn,
            sonarjs,
            security
        },
        rules: {
            ...tseslint.configs['strict-type-checked']?.rules,
            ...tseslint.configs['stylistic-type-checked']?.rules,

            ...unicorn.configs.recommended.rules, // Unicorn recommended.

            ...sonarjs.configs.recommended.rules, // SonarJS recommended.

            ...security.configs.recommended.rules, // Security recommended.

            // Overrides and adjustments.
            '@typescript-eslint/consistent-type-imports': 'warn',
            '@typescript-eslint/no-import-type-side-effects': 'warn',

            '@typescript-eslint/restrict-template-expressions': ['warn', { allowNumber: true }],
            '@typescript-eslint/explicit-function-return-type': 'warn',
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/no-unused-vars': 'warn',
            '@typescript-eslint/strict-boolean-expressions': 'warn',

            'import/no-duplicates': 'warn',
            'sort-imports': ['warn', { allowSeparatedGroups: true, ignoreCase: true, memberSyntaxSortOrder: ['none', 'all', 'single', 'multiple'] }],

            'no-empty': 'warn',
            'prefer-const': 'warn',

            'unicorn/no-null': 'off'
        }
    }
];
