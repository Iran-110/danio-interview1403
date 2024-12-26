import js from '@eslint/js'
import globals from 'globals'
import pluginReact from "eslint-plugin-react"
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import importPlugin from 'eslint-plugin-import';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommendedTypeChecked,
      pluginReact.configs.flat.recommended,
      importPlugin.flatConfigs.recommended,
      importPlugin.flatConfigs.typescript,
      eslintPluginPrettierRecommended
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
      globals: globals.browser,
    },
    settings: {
      'react': {
        version: 'detect',
      },
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: 'tsconfig.app.json',
        },
        node: {
          alwaysTryTypes: true,
          project: 'tsconfig.node.json',
        },
      },
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      "@typescript-eslint/no-misused-promises": "off",

      // Import types only with type (import type {A} from "a")
      '@typescript-eslint/consistent-type-imports': 'error',

      // Allow removing import React from files
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',

      // Enforce import order
      'import/order': 'error',

      // Imports should come first
      'import/first': 'error',

      // Other import rules
      'import/no-mutable-exports': 'error',

      // Unused variables are allowed only with an underscore
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
    },
  },
)
