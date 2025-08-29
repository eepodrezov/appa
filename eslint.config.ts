import js from "@eslint/js";
import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";
import prettier from "eslint-plugin-prettier";

import rules from "./.eslint/rules/index";

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  reactPlugin.configs.recommended,
  reactHooks.configs.recommended,
  jsxA11y.configs.recommended,
  {
    plugins: {
      prettier,
    },
    rules,
    languageOptions: {
      parser: tseslint.parser,
      ecmaVersion: 2020,
      sourceType: "module",
      globals: {
        window: "readonly",
        document: "readonly",
      },
    },
  },
];
