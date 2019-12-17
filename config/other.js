module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
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
    'default-case': ['error'],
    'default-param-last': ['error'],
    'max-classes-per-file': ['error', 1],
    'no-empty-function': ['error'],
    'no-eval': ['error'],
    'no-implied-eval': ['error'],
    'no-lone-blocks': ['error'],
    'no-return-assign': ['error'],
    'no-return-await': ['error'],
    'no-script-url': ['error'],
    'no-throw-literal': ['error'],
    'no-useless-return': ['error'],
    'prefer-regex-literals': ['error'],
    radix: ['error', 'always'],

    // Category: variables
    'no-shadow': ['error'],
    'no-undefined': ['error'],
    'no-use-before-define': [
      'error',
      {
        functions: false,
        classes: false,
      },
    ],

    // Category: stylistic
    camelcase: [
      'error',
      {
        ignoreDestructuring: true,
      },
    ],
    'func-names': ['error', 'as-needed'],
    'func-style': [
      'error',
      'declaration',
      {
        allowArrowFunctions: true,
      },
    ],
    'max-depth': ['error', 6],
    'max-len': [
      'error',
      {
        code: 120,
        tabWidth: 2,
      },
    ],
    'max-nested-callbacks': ['error', 4],
    'max-params': ['error', 10],
    'no-multi-assign': ['error'],
    'no-negated-condition': ['error'],
    'no-nested-ternary': ['error'],

    // Category: ecmascript 6 (es6/es2015)
    'no-duplicate-imports': ['error'],
  },
};
