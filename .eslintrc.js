module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ["@typescript-eslint", "react", "jsx-a11y"],
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },

  extends: [
    'standard',
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jsx-a11y/recommended"
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  settings: {
    "react": {
      "version": "detect"
    }
  },
  rules: {
    'semi': ['error', 'never'],
    'prefer-const': 'error',
    'no-var': 'error',
    '@typescript-eslint/member-delimiter-style': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    "@typescript-eslint/indent": ["error", 2],
    "react/prop-types": "off",
    "node/no-missing-import": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/ban-ts-ignore": ["warn"],
    "react/display-name": "off",
  },

}
