// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
module.exports = {
  root: true,
  extends: [
    "airbnb",
    "eslint:recommended",
    "airbnb/hooks",
    "airbnb-typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:prettier/recommended",
    "plugin:import/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:tailwindcss/recommended",
  ],
  parser: "@typescript-eslint/parser",
  ignorePatterns: [
    "plugins/**/*",
    "documentation/**/*",
    "metro.config.js",
    "jest.config.js",
    "jest.setup.js",
    "react-native.config.js",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
    tsconfigRootDir: ".",
    project: ["./tsconfig.json"],
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".ts", ".tsx"],
      },
      typescript: {},
    },
    react: {
      version: "18.x",
    },
  },
  rules: {
    "global-require": 0,
    "react/function-component-definition": 0,
    "react-hooks/exhaustive-deps": "off",
    "react/no-unstable-nested-components": "off",
    "object-curly-spacing": ["error", "always"],
    "array-bracket-spacing": ["error", "never"],
    "react/require-default-props": ["off"],
    "@typescript-eslint/no-unsafe-return": ["off"],
    "react/default-props-match-prop-types": ["error"],
    "react/sort-prop-types": ["error"],
    "react/no-array-index-key": "off",
    "no-tabs": "off",
    "no-void": "off",
    "react/prop-types": "off",
    "react/jsx-props-no-spreading": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "import/prefer-default-export": "off",
    "@typescript-eslint/no-unused-expressions": "off",
    "@typescript-eslint/restrict-template-expressions": "off",
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "react/display-name": "warn",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_", // Ignore unused variables starting with an underscore
        varsIgnorePattern: "^_|(React)", // Also ignore unused variables at the top level
        caughtErrorsIgnorePattern: "^_", // Ignore unused caught errors
      },
    ],
    "import/namespace": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-misused-promises": "off",
    "@typescript-eslint/no-unsafe-argument": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/naming-convention": "off",
    "react/jsx-no-comment-textnodes": "off",
  },
};
