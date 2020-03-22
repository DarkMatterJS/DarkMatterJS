export = {
  plugins: ['stylelint-order', 'stylelint-prettier', 'stylelint-scss'],
  extends: ['stylelint-config-recommended', 'stylelint-prettier/recommended'],
  rules: {
    'declaration-block-no-shorthand-property-overrides': [true, { severity: 'warning' }],
    'order/properties-alphabetical-order': true,
    'color-no-invalid-hex': true,
    'font-family-no-duplicate-names': true,
    'function-calc-no-invalid': true,
    'function-calc-no-unspaced-operator': true,
    'unit-no-unknown': true,
    'property-no-unknown': [true, { severity: 'warning' }],
    'block-no-empty': true,
    'no-duplicate-at-import-rules': true,
    'no-extra-semicolons': true,
    'no-invalid-double-slash-comments': true,
    'block-closing-brace-newline-after': 'always',

    //
    'at-rule-no-unknown': [
      true,
      { ignoreAtRules: ['function', 'if', 'each', 'include', 'mixin', 'else', 'extend'] },
    ],
    'font-family-no-missing-generic-family-keyword': null,
    'no-descending-specificity': null,
    'prettier/prettier': true,
    'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: ['global', 'local'] }],
  },
}
