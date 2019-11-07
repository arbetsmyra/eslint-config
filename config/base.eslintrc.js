// ESLint rules: https://eslint.org/docs/rules

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: 'eslint:recommended',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    // Category: best practices
    'array-callback-return': ['error'],
    'block-scoped-var': ['error'],
    complexity: ['error', 10],
    curly: ['error'], // autofixable
    'default-case': ['error'],
    'default-param-last': ['error'],
    'dot-notation': 'error', // autofixable
    eqeqeq: ['error', 'always'], // autofixable
    'max-classes-per-file': ['error', 1],
    'no-else-return': ['error'], // autofixable
    'no-empty-function': ['error'],
    'no-eval': ['error'],
    'no-floating-decimal': ['error'], // autofixable
    'no-implicit-coercion': ['error'], // autofixable
    'no-implied-eval': ['error'],
    'no-lone-blocks': ['error'],
    'no-multi-spaces': ['error'], // autofixable
    'no-return-assign': ['error'],
    'no-return-await': ['error'],
    'no-script-url': ['error'],
    'no-throw-literal': ['error'],
    'no-unused-labels': ['error'], // autofixable
    'no-useless-return': ['error'],
    'prefer-regex-literals': ['error'],
    radix: ['error', 'always'],
    'wrap-iife': ['error', 'outside'], // autofixable
    yoda: ['error'], // autofixable

    'comma-dangle': ['error', 'always-multiline'],
    'linebreak-style': ['error', 'unix'],
    'quote-props': ['error', 'as-needed'],
    indent: ['error', 2],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
  },
};
