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
    "arrow-parens": ["error", "as-needed", { requireForBlockBody: true }],
    "object-curly-newline": [
      "error",
      {
        multiline: true,
        consistent: true,
      },
    ],
    "import/no-unresolved": [
      "error",
      {
        ignore: [".svg"],
      },
    ],
    "import/order": [
      1,
      {
        groups: [
          "external",
          "builtin",
          "internal",
          "sibling",
          "parent",
          "index",
        ],
        "newlines-between": "always-and-inside-groups",
        pathGroups: [
          {
            pattern: "(react|react-router-dom|classnames)",
            group: "builtin",
          },
          {
            pattern: "(components|modules|pages)",
            group: "internal",
          },
          {
            pattern: "config/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "assets/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "typings/**",
            group: "internal",
            position: "after",
          },
        ],
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        warnOnUnassignedImports: true,
      },
    ],
    "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 1 }],
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/react-in-jsx-scope": "off",
    "react/sort-comp": [
      "warn",
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
    "react/function-component-definition": [
      "error",
      { namedComponents: ["arrow-function"] },
    ],
    "padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        prev: ["const", "let", "block-like"],
        next: "block-like",
      },
      { blankLine: "always", prev: ["block-like"], next: "*" },
    ],
    "sort-imports": [
      "error",
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
      },
    ],
    "@typescript-eslint/ban-ts-comment": "off",
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
