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
    curly: ['error'],
    'dot-notation': 'error',
    eqeqeq: ['error', 'always'],
    'max-classes-per-file': ['error', 1],
    'no-else-return': ['error'],
    'no-floating-decimal': ['error'],
    'no-implicit-coercion': ['error'],
    'no-multi-spaces': ['error'],
    'no-unused-labels': ['error'],
    'wrap-iife': ['error', 'outside'],
    yoda: ['error'],

    // Category: stylistic
    'array-bracket-newline': [
      'error',
      {
        multiline: true,
      },
    ],
    'array-bracket-spacing': [
      'error',
      'never',
      {
        arraysInArrays: false,
      },
    ],
    'array-element-newline': [
      'error',
      {
        multiline: true,
        minItems: 5,
      },
    ],
    'block-spacing': ['error'],
    'brace-style': ['error'],
    'capitalized-comments': ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    'computed-property-spacing': ['error', 'never'],
    'eol-last': ['error', 'always'],
    'func-call-spacing': ['error', 'never'],
    'function-call-argument-newline': ['error', 'consistent'],
    'function-paren-newline': ['error', 'multiline'],
    indent: ['error', 2],
    'jsx-quotes': ['error', 'prefer-double'],
    'key-spacing': [
      'error',
      {
        beforeColon: false,
      },
    ],
    'linebreak-style': ['error', 'unix'],
    'lines-between-class-members': ['error', 'always'],
    'multiline-comment-style': ['error', 'starred-block'],
    'new-parens': ['error'],
    'newline-per-chained-call': [
      'error',
      {
        ignoreChainWithDepth: 2,
      },
    ],
    'no-lonely-if': ['error'],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 2,
        maxEOF: 1,
        maxBOF: 0,
      },
    ],
    'no-trailing-spaces': ['error'],
    'no-unneeded-ternary': ['error'],
    'no-whitespace-before-property': ['error'],
    'object-curly-spacing': ['error', 'always'],
    'object-property-newline': [
      'error',
      {
        allowAllPropertiesOnSameLine: true,
      },
    ],
    'one-var': ['error', 'never'],
    'operator-assignment': ['error', 'always'],
    'operator-linebreak': ['error', 'after'],
    'padded-blocks': ['error', 'never'],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: ['const', 'let', 'var'],
        next: '*',
      },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
      {
        blankLine: 'always',
        prev: ['const', 'let', 'var'],
        next: 'return',
      },
      {
        blankLine: 'never',
        prev: 'import',
        next: 'import',
      },
    ],
    'prefer-object-spread': ['error'],
    'quote-props': ['error', 'as-needed'],
    quotes: ['error', 'single', { avoidEscape: true }],
    semi: ['error', 'always'],
    'semi-spacing': ['error'],
    'semi-style': ['error', 'last'],
    'space-before-blocks': ['error'],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        asyncArrow: 'always',
        named: 'never',
      },
    ],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': ['error'],
    'space-unary-ops': ['error', { words: true, nonwords: false }],
    'spaced-comment': ['error', 'always'],
    'switch-colon-spacing': ['error'],
    'wrap-regex': ['error'],

    // Category: ecmascript 6 (es6/es2015)
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': ['error', 'always'],
    'arrow-spacing': ['error', { before: true, after: true }],
    'no-confusing-arrow': ['error'],
    'no-duplicate-imports': ['error'],
    'no-useless-computed-key': ['error'],
    'no-useless-rename': ['error'],
    'no-var': ['error'],
    'object-shorthand': ['error', 'always', { ignoreConstructors: true, avoidExplicitReturnArrows: true }],
    'prefer-const': ['error'],
    'prefer-destructuring': [
      'error',
      {
        array: true,
        object: true,
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    'prefer-template': ['error'],
    'rest-spread-spacing': ['error', 'never'],
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      },
    ],
    'template-curly-spacing': ['error', 'always'],
  },
};
