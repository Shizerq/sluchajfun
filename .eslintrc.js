module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    "no-console": [0],
    "no-param-reassign": [0],
    "no-else-return": [0],
    "no-confusing-arrow": [0],
    "no-prototype-builtins": [0],

    "prettier/prettier": [2],

    "import/named": [0],
    "import/first": [0],
    "import/prefer-default-export": [0],
    "import/no-extraneous-dependencies": [0],
    "import/no-named-as-default": [0],
    "import/namespace": [0],

    "react/prop-types": [0],
    "react/display-name": [0],

    "@typescript-eslint/no-empty-interface": [0],

    "@typescript-eslint/explicit-module-boundary-types": [0],
  },
};
