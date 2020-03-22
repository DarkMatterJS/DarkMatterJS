export = {
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2018,
        project: ['./tsconfig.json'],
        sourceType: 'module',
        warnOnUnsupportedTypeScriptVersion: true,
        ecmaFeatures: {
          experimentalDecorators: true,
          legacyDecorators: true,
        },
      },
      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
          typescript: {
            alwaysTryTypes: true,
          },
        },
        react: {
          version: 'detect',
        },
      },
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'airbnb-typescript',
        'airbnb/hooks',
        'prettier/@typescript-eslint',
      ],
      plugins: ['@typescript-eslint'],
      rules: {
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/camelcase': 'warn',
        '@typescript-eslint/default-param-last': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-member-accessibility': [
          'off',
          {
            accessibility: 'explicit',
          },
        ],
        '@typescript-eslint/interface-name-prefix': 'warn',
        '@typescript-eslint/member-ordering': 'error',
        '@typescript-eslint/no-array-constructor': 1,
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/no-namespace': 2,
        '@typescript-eslint/no-use-before-define': [
          'error',
          {
            classes: true,
            functions: false,
            typedefs: true,
            variables: true,
          },
        ],
        '@typescript-eslint/no-useless-constructor': 1,
        '@typescript-eslint/strict-boolean-expressions': 'off',

        // these two cause trouble with type imports. disable until these are resolved:
        // https://github.com/alexgorbatchev/eslint-import-resolver-typescript/issues/17
        'import/no-unresolved': 0,

        // https://github.com/benmosher/eslint-plugin-import/issues/1341
        'import/named': 0,
        'react/prop-types': 0,

        // without this airbnb with prettier causes issues
        'comma-dangle': 0,
      },
    },
    {
      files: ['.d.ts'],
      rules: {
        'import/export': 0,
        'no-redeclare': 0,
      },
    },
  ],
}
