import typescript from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import prettier from "eslint-plugin-prettier";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";

export default [
  {
    ignores: [
      "**/node_modules/**",
      "**/dist/**",
      "**/yarn.lock",
      "**/*-lock.json",
      "**/*.yml",
      "**/*.yaml",
    ],
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
    languageOptions: {
      parser: typescriptParser,
    },
    plugins: {
      react,
      "@typescript-eslint": typescript,
      "react-hooks": reactHooks,
      prettier,
    },
    rules: {
      "react/display-name": "off",
      "react/prop-types": ["off"],
      "react/react-in-jsx-scope": ["off"],
      "@typescript-eslint/explicit-module-boundary-types": ["off"],
      "no-var": ["error"],
      "no-unused-vars": ["off"],
      "react/jsx-uses-vars": ["error"],
      "react/no-unescaped-entities": ["off"],

      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
          disallowTypeAnnotations: true,
          fixStyle: "inline-type-imports",
        },
      ],

      "sort-imports": [
        "error",
        {
          ignoreCase: false,
          ignoreDeclarationSort: true,
          ignoreMemberSort: true,
          allowSeparatedGroups: false,
          memberSyntaxSortOrder: ["none", "all", "single", "multiple"],
        },
      ],
    },
  },
];
