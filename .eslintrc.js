module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:jsx-a11y/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: "module",
  },
  ignorePatterns: ["*.config.*"],
  plugins: [
    "react",
    "@typescript-eslint",
    "react-hooks",
    "import",
    "jsx-a11y",
    "prettier",
  ],
  rules: {
    "arrow-body-style": ["warn", "as-needed"],
    "arrow-parens": [2, "as-needed", { requireForBlockBody: true }],
    "object-curly-newline": [
      "error",
      {
        consistent: true,
        multiline: true,
      },
    ],
    "import/no-unresolved": [
      "error",
      {
        ignore: [".svg"],
      },
    ],
    "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 1 }],
    "jsx-a11y/no-static-element-interactions": 0,
    "jsx-a11y/no-noninteractive-element-interactions": 0,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/react-in-jsx-scope": 0,
    "react/sort-comp": [
      1,
      {
        order: [
          "type-annotations",
          "static-methods",
          "lifecycle",
          "everything-else",
          "render",
        ],
      },
    ],
    "@typescript-eslint/ban-ts-comment": 0,
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
    },
    react: {
      version: "detect",
    },
  },
  globals: {
    window: true,
    module: true,
  },
};
