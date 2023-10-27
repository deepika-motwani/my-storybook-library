module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true
  },
  overrides: [
    {
      files: [
        "**/*.test.tsx"
      ],
      env: {
        jest: true
      }
    }
  ],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended', 'plugin:storybook/recommended'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  rules: {
    'react-refresh/only-export-components': ['warn', {
      allowConstantExport: true
    }]
  }
};