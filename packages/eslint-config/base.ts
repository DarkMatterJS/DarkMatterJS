import restrictedGlobals from 'confusing-browser-globals'

export = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalDecorators: true,
      legacyDecorators: true,
    },
    sourceType: 'module',
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  globals: {
    __DEV__: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:jest/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:prettier/recommended',
    'prettier',
  ],
  plugins: [
    'babel',
    'eslint-comments',
    'import',
    'jsx-a11y',
    'jest',
    'no-null',
    'prefer-arrow-functions',
    'prefer-arrow',
    'prettier',
    'promise',
    'simple-import-sort',
    'unicorn',
  ],
  rules: {
    'arrow-parens': [2, 'always'],
    'block-scoped-var': 2,
    'brace-style': [2, '1tbs'],
    'dot-location': [1, 'property'],
    'dot-notation': 2,
    'eol-last': 2,
    'max-classes-per-file': 'off',
    'no-alert': 2,
    'no-console': 0,
    'no-else-return': 2,
    'no-empty': [2, { allowEmptyCatch: true }],
    'no-eq-null': 2,
    'no-eval': 2,
    'no-extend-native': 2,
    'no-extra-semi': 2,
    'no-fallthrough': 2,
    'no-implicit-coercion': [2, { allow: ['!!'] }],
    'no-implied-eval': 2,
    'no-lone-blocks': 2,
    'no-loop-func': 2,
    'no-multi-str': 2,
    'no-native-reassign': 2,
    'no-new-func': 2,
    'no-new-wrappers': 2,
    'no-new': 2,
    'no-octal-escape': 2,
    'no-octal': 2,
    'no-redeclare': 2,
    'no-restricted-globals': [2].concat(restrictedGlobals),
    'no-return-assign': 2,
    'no-script-url': 2,
    'no-self-assign': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-throw-literal': 2,
    'no-underscore-dangle': 'off',
    'no-unexpected-multiline': 2,
    'no-unmodified-loop-condition': 2,
    'no-unused-expressions': [2, { allowShortCircuit: true, allowTernary: true }],
    'no-unused-vars': [2, { argsIgnorePattern: '^_', caughtErrors: 'none' }],
    'no-useless-call': 2,
    'no-useless-concat': 2,
    'no-useless-escape': 2,
    'no-var': 2,
    'no-void': 2,
    'one-var': [2, 'never'],
    'prefer-arrow-callback': 2,
    'prefer-const': 2,
    'prefer-object-spread': 'error',
    'prefer-template': 'error',
    'sort-imports': 'off',
    camelcase: [2, { properties: 'never' }],
    curly: [2, 'all'],
    eqeqeq: 2,
    quotes: [2, 'single', { avoidEscape: true }],
    yoda: 2,

    // Allow this for easier code readability
    'no-use-before-define': [
      'error',
      {
        classes: true,
        functions: false,
        variables: true,
      },
    ],

    // -- Plugin specific options:
    'babel/no-invalid-this': 2,

    // Import
    // Does not recognize module.exports as default, so it's basically useless today
    'import/default': 0,
    'import/order': [
      2,
      { groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'] },
    ],
    'import/first': 2,
    'import/no-unresolved': 2,
    'import/no-unassigned-import': 0,
    'import/named': 2,
    'import/no-amd': 2,
    'import/no-webpack-loader-syntax': 2,
    'import/no-named-as-default-member': 0,
    'import/no-named-as-default': 0,
    'import/max-dependencies': 0,
    'import/no-default-export': 'off',
    'import/prefer-default-export': 'off',

    // unicorn
    'unicorn/no-for-loop': 2,
    'unicorn/no-abusive-eslint-disable': 2,
    'unicorn/no-array-instanceof': 2,
    'unicorn/no-zero-fractions': 2,
    'unicorn/prefer-includes': 2,
    'unicorn/prefer-text-content': 2,
    'unicorn/import-index': 2,
    'unicorn/throw-new-error': 2,
    'unicorn/prevent-abbreviations': 'off',

    'prettier/prettier': 'error',

    'simple-import-sort/sort': 1,

    // The following rules are unnecessary and potentially harmful if prettier is used:
    semi: 0,
    // 'semi': [2, 'always'],
    // 'key-spacing': 2,
    // 'keyword-spacing': 2,
    // 'linebreak-style': [2, 'unix'],
    // 'no-floating-decimal': 2,
    // 'no-multi-spaces': 2,
    // 'space-in-parens': [2, 'never'],
    // 'comma-dangle': [
    //     2,
    //     {
    //         arrays: 'always-multiline',
    //         imports: 'always-multiline',
    //         exports: 'always-multiline',
    //         objects: 'always-multiline',
    //         functions: 'ignore',
    //     },
    // ],
  },
}
