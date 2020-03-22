import eslint from 'eslint'

import prettierOptions from '.'

const config: eslint.Linter.Config = {
  rules: {
    // eslint-plugin-prettier
    'prettier/prettier': ['error', prettierOptions],
  },
}

export = config
