import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      'react/jsx-no-bind': [
        'error',
        {
          allowArrowFunctions: true,
          allowBind: false,
          ignoreRefs: true,
        },
      ],
      semi: 'error',
      'prefer-const': 'error',
      'no-console': 'warn',
      'react/no-did-update-set-state': 'error',
      'react/no-unknown-property': 'error',
      'react/no-unused-prop-types': 'error',
      'react/prop-types': 'error',
      'react/react-in-jsx-scope': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'no-var': 'error',
      'prefer-arrow-callback': 'error',
      indent: ['error', 2],
      'no-undef': 'error',
      eqeqeq: 'error',
      'no-implicit-coercion': 'error',
      'no-unused-expressions': 'error',
      'no-extra-boolean-cast': 'error',
      'no-eval': 'error',
    },
  },
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
    'coverage/**',
    'node_modules/**',
    '**/*.json',
    '**/*.css',
  ]),
]);
