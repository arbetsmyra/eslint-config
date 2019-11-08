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
    curly: ['error'], // Autofixable
    'default-case': ['error'],
    'default-param-last': ['error'],
    'dot-notation': 'error', // Autofixable
    eqeqeq: ['error', 'always'], // Autofixable
    'max-classes-per-file': ['error', 1],
    'no-else-return': ['error'], // Autofixable
    'no-empty-function': ['error'],
    'no-eval': ['error'],
    'no-floating-decimal': ['error'], // Autofixable
    'no-implicit-coercion': ['error'], // Autofixable
    'no-implied-eval': ['error'],
    'no-lone-blocks': ['error'],
    'no-multi-spaces': ['error'], // Autofixable
    'no-return-assign': ['error'],
    'no-return-await': ['error'],
    'no-script-url': ['error'],
    'no-throw-literal': ['error'],
    'no-unused-labels': ['error'], // Autofixable
    'no-useless-return': ['error'],
    'prefer-regex-literals': ['error'],
    radix: ['error', 'always'],
    'wrap-iife': ['error', 'outside'], // Autofixable
    yoda: ['error'], // Autofixable

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
    'array-bracket-newline': [
      'error',
      {
        multiline: true,
      },
    ], // Autofixable
    'array-bracket-spacing': [
      'error',
      'never',
      {
        arraysInArrays: false,
      },
    ], // Autofixable
    'array-element-newline': [
      'error',
      {
        multiline: true,
        minItems: 3,
      },
    ], // Autofixable
    'block-spacing': ['error'], // Autofixable
    'brace-style': ['error'], // Autofixable
    camelcase: [
      'error',
      {
        ignoreDestructuring: true,
      },
    ],
    'capitalized-comments': ['error', 'always'], // Autofixable
    'comma-dangle': ['error', 'always-multiline'], // Autofixable
    'computed-property-spacing': ['error', 'never'], // Autofixable
    'eol-last': ['error', 'always'], // Autofixable
    'func-call-spacing': ['error', 'never'], // Autofixable
    'func-names': ['error', 'as-needed'],
    'func-style': [
      'error',
      'declaration',
      {
        allowArrowFunctions: true,
      },
    ],
    'function-call-argument-newline': ['error', 'consistent'], // Autofixable
    'function-paren-newline': ['error', 'multiline'], // Autofixable
    indent: ['error', 2], // Autofixable
    'jsx-quotes': ['error', 'prefer-double'], // Autofixable
    'key-spacing': [
      'error',
      {
        beforeColon: false,
      },
    ], // Autofixable
    'linebreak-style': ['error', 'unix'], // Autofixable
    'lines-between-class-members': ['error', 'always'], // Autofixable
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
    'multiline-comment-style': ['error', 'starred-block'], // Autofixable
    'new-parens': ['error'], // Autofixable
    'newline-per-chained-call': [
      'error',
      {
        ignoreChainWithDepth: 2,
      },
    ], // Autofixable
    'no-lonely-if': ['error'], // Autofixable
    'no-multi-assign': ['error'],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 2,
        maxEOF: 1,
        maxBOF: 0,
      },
    ], // Autofixable
    'no-negated-condition': ['error'],
    'no-nested-ternary': ['error'],
    'no-trailing-spaces': ['error'], // Autofixable
    'no-unneeded-ternary': ['error'], // Autofixable
    'no-whitespace-before-property': ['error'], // Autofixable
    'object-curly-spacing': ['error', 'always'], // Autofixable
    'object-property-newline': [
      'error',
      {
        allowAllPropertiesOnSameLine: true,
      },
    ], // Autofixable
    'one-var': ['error', 'never'], // Autofixable
    'operator-assignment': ['error', 'always'], // Autofixable
    'operator-linebreak': ['error', 'after'], // Autofixable
    'padded-blocks': ['error', 'never'], // Autofixable
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: [
          'const',
          'let',
          'var',
        ],
        next: '*',
      },
      {
        blankLine: 'any',
        prev: [
          'const',
          'let',
          'var',
        ],
        next: [
          'const',
          'let',
          'var',
        ],
      },
      {
        blankLine: 'always',
        prev: [
          'const',
          'let',
          'var',
        ],
        next: 'return',
      },
      {
        blankLine: 'never',
        prev: 'import',
        next: 'import',
      },
    ], // Autofixable
    'prefer-object-spread': ['error'], // Autofixable
    'quote-props': ['error', 'as-needed'], // Autofixable
    quotes: [
      'error',
      'single',
      { avoidEscape: true },
    ], // Autofixable
    semi: ['error', 'always'], // Autofixable
    'semi-spacing': ['error'], // Autofixable
    'semi-style': ['error', 'last'], // Autofixable
    'space-before-blocks': ['error'], // Autofixable
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        asyncArrow: 'always',
        named: 'never',
      },
    ], // Autofixable
    'space-in-parens': ['error', 'never'], // Autofixable
    'space-infix-ops': ['error'], // Autofixable
    'space-unary-ops': ['error', { words: true, nonwords: false }], // Autofixable
    'spaced-comment': ['error', 'always'], // Autofixable
    'switch-colon-spacing': ['error'], // Autofixable
    'wrap-regex': ['error'], // Autofixable
  },
};
