import * as tslint from 'tslint'

import * as prettierOptions from '.'

const config: tslint.Configuration.RawConfigFile = {
  rules: {
    // tslint-plugin-prettier
    prettier: [true, prettierOptions],
  },
}

export = config
