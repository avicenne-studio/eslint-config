module.exports = {
  env: {
    node: true,
  },
  plugins: ["@typescript-eslint", "import"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/strict-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "plugin:import/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
  root: true,
  rules: {
    "@typescript-eslint/consistent-type-exports": "error",
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/member-ordering": "error",
    "@typescript-eslint/method-signature-style": "error",
    "@typescript-eslint/no-import-type-side-effects": "error",
    "@typescript-eslint/no-loop-func": "error",
    "@typescript-eslint/no-require-imports": "error",
    "@typescript-eslint/no-unnecessary-qualifier": "error",
    "@typescript-eslint/no-unsafe-unary-minus": "error",
    "@typescript-eslint/no-unused-expressions": "error",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        varsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/no-use-before-define": "error",
    "@typescript-eslint/no-useless-empty-export": "error",
    "@typescript-eslint/prefer-destructuring": "error",
    "@typescript-eslint/prefer-regexp-exec": "error",
    "@typescript-eslint/promise-function-async": "error",
    "@typescript-eslint/require-array-sort-compare": "error",
    "@typescript-eslint/return-await": "error",
    "@typescript-eslint/sort-type-constituents": "error",
    "@typescript-eslint/strict-boolean-expressions": "error",
    "@typescript-eslint/switch-exhaustiveness-check": "error",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: true,
        peerDependencies: true,
      },
    ],
    "import/order": [
      "error",
      {
        groups: [
          ["external", "builtin"],
          ["internal"],
          ["parent", "index", "sibling"],
        ],
        pathGroups: [
          {
            pattern: "@/**",
            group: "internal",
          },
          {
            pattern: "./**",
            group: "internal",
          },
          {
            pattern: "../**",
            group: "internal",
          },
        ],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
    "no-console": "error",
    "no-loop-func": "off",
    "no-return-await": "off",
    "no-unused-expressions": "off",
    "no-use-before-define": "off",
    "prefer-destructuring": "off",
    "prefer-regex-literals": [
      "error",
      {
        disallowRedundantWrapping: true,
      },
    ],
    "prefer-template": "error",
  },
};
