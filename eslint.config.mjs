import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

const config = [
  {
    ignores: [
      "**/node_modules",
      "**/yarn.lock",
      "**/*-lock.json",
      "*/javascript/*",
      "**/coverage",
      "**/.next",
      "**/public",
      "**/next-env.d.ts",
      "**/*.yml",
      "**/*.yaml",
    ],
  },
  ...compat.extends(
    "next/core-web-vitals",
    "prettier",
    "plugin:@typescript-eslint/recommended",
  ),
  {
    rules: {
      "react/prop-types": ["off"],
      "react/react-in-jsx-scope": ["off"],
      "react/no-unescaped-entities": ["off"],
      "no-unused-vars": ["off"],
      "no-var": ["error"],

      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
        },
      ],

      "no-inner-declarations": ["warn"],
      "no-else-return": ["error"],
      "no-useless-return": ["error"],
      "no-lonely-if": ["error"],

      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
          disallowTypeAnnotations: true,
          fixStyle: "separate-type-imports",
        },
      ],

      "sort-imports": [
        "error",
        {
          ignoreCase: true,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
          allowSeparatedGroups: false,
          memberSyntaxSortOrder: ["none", "all", "single", "multiple"],
        },
      ],
    },
  },
];

export default config;
