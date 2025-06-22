import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      // Enforce consistent indentation
      'indent': ['error', 2, { SwitchCase: 1 }],

      // Disallow use of console except console.error and console.warn
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      // Prefer `const` over `let` when variables are not reassigned
      'prefer-const': 'error',
      // Disallow use of `var`
      'no-var': 'error',
      // Encourage use of arrow functions
      'prefer-arrow-callback': ['warn', { allowNamedFunctions: false }],
      // Suggest destructuring from props/state
      'prefer-destructuring': ['warn', {
        object: true,
        array: false,
      }],
    },
  },
]