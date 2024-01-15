module.exports = {
  plugins: ["@typescript-eslint/eslint-plugin", "import"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
  ],
  rules: {
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/ban-ts-comment": [
      "error",
      {
        "ts-expect-error": { descriptionFormat: "^: TS\\d+ because .+$" },
        "ts-ignore": true,
        "ts-nocheck": true,
        "ts-check": false,
      },
    ],
    "no-console": "error",
    "import/no-unresolved": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: true,
        peerDependencies: true,
      },
    ],
    "no-multiple-empty-lines": [
      "error",
      {
        max: 1,
        maxEOF: 0,
        maxBOF: 0,
      },
    ],
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        varsIgnorePattern: "_",
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
  },
};
