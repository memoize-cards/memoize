module.exports = {
  extends: 'stylelint-config-standard',
  overrides: [
    {
      files: ['**/*.{js,jsx}'],
      customSyntax: '@stylelint/postcss-css-in-js',
      rules: {
        'at-rule-no-unknown': null
      }
    }
  ],
  plugins: [
    'stylelint-order'
  ],
  rules: {
    'custom-property-pattern': /[\w-_]+/,
    'no-empty-source': null,
    'no-invalid-position-at-import-rule': null,
    'order/order': [
      'custom-properties',
      'declarations'
    ],
    'order/properties-alphabetical-order': true,
    'selector-class-pattern': [
      '^[a-z]([-]?[a-zA-Z0-9]+)*(__[a-z0-9]([-]?[a-zA-Z0-9]+)*)?(--[a-z0-9]([-]?[a-zA-Z0-9]+)*)?$',
      {
        resolveNestedSelectors: true
      }
    ]
  }
}
