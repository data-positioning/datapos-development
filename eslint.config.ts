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
        settings: {
            'import/resolver': { node: { extensions: ['.js', '.mjs', '.ts'] } }
        },
        rules: {
            ...tseslint.configs.recommended.rules,
            ...tseslint.configs['recommended-type-checked'].rules,
            ...tseslint.configs['strict-type-checked'].rules,
            ...tseslint.configs['stylistic-type-checked'].rules,
            ...importPlugin.flatConfigs.recommended.rules, // Import plugin recommended.
            ...unicorn.configs.recommended.rules, // Unicorn plugin recommended.
            ...sonarjs.configs.recommended.rules, // SonarJS plugin recommended.
            ...security.configs.recommended.rules, // Security plugin recommended.

            // Overrides and adjustments.

            'no-empty': 'warn',
            'prefer-const': 'warn',

            '@typescript-eslint/consistent-type-imports': 'warn',
            '@typescript-eslint/explicit-function-return-type': 'warn',
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/no-import-type-side-effects': 'warn',
            '@typescript-eslint/no-unused-vars': 'warn',
            '@typescript-eslint/restrict-template-expressions': ['warn', { allowNumber: true }],
            '@typescript-eslint/strict-boolean-expressions': 'warn',

            'import/no-duplicates': 'warn',
            'sort-imports': ['warn', { allowSeparatedGroups: true, ignoreCase: true, memberSyntaxSortOrder: ['none', 'all', 'single', 'multiple'] }],

            'unicorn/filename-case': 'off',
            'unicorn/no-null': 'off'
        }
    }
];
