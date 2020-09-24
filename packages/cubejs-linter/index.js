
module.exports = {
  root: true,
  extends: 'airbnb-base',
  plugins: [
    'import',
    '@typescript-eslint/eslint-plugin',
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    'no-useless-constructor': 0,
    'max-classes-per-file': 0,
    'prefer-object-spread': 0,
    'import/no-unresolved': 0,
    'comma-dangle': 0,
    'no-console': 0,
    'arrow-parens': 0,
    'import/prefer-default-export': 0,
    'import/extensions': 0,
    quotes: ['warn', 'single'],
    'no-prototype-builtins': 0,
    'class-methods-use-this': 0,
    'no-param-reassign': 0,
    'no-mixed-operators': 0,
    'no-else-return': 0,
    'prefer-promise-reject-errors': 0,
    'no-plusplus': 0,
    'no-await-in-loop': 0,
    'operator-linebreak': 0,
    'max-len': ['error', 120, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],
    'no-trailing-spaces': ['warn', { skipBlankLines: true }],
    'object-curly-newline': 0,
    //
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['warn'],
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': ['warn'],
  }
};
