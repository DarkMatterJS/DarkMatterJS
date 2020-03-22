export = {
  extends: ['plugin:react/recommended', 'prettier/react'],
  plugins: ['react', 'react-hooks'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/no-danger': 'off',
    'react/prefer-es6-class': 'error',
    'react/require-render-return': 'error',
    'react/self-closing-comp': 'error',
    'react/no-did-mount-set-state': 'off',
    'react/no-multi-comp': ['error', { ignoreStateless: true }],
    'react/no-unused-prop-types': ['error', { skipShapeProps: true }],
    'react/no-string-refs': 'error',
    'react/no-typos': 'error',
    'react/no-unknown-property': 'error',
    'react/sort-comp': 'error',
    'react/jsx-filename-extension': ['off', { extensions: ['.js', '.jsx', '.tsx'] }],
    'react/jsx-pascal-case': 'error',
    'react/jsx-no-comment-textnodes': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-props-no-spreading': 'off',

    // react-hook
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // The following rules are unnecessary and potentially harmful if prettier is used:
    // 'react/jsx-equals-spacing': 'error',
    // 'react/jsx-first-prop-new-line': [1, 'multiline'],
    // 'react/jsx-indent': 'error',
    // 'react/jsx-wrap-multilines': 'error',
  },
}
