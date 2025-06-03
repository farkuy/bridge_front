import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import unusedImports from "eslint-plugin-unused-imports";
import importPlugin from "eslint-plugin-import";
import reactPlugin from "eslint-plugin-react";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "unused-imports": unusedImports,
      import: importPlugin,
      react: reactPlugin,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "no-unassigned-vars": [2],
      "max-len": [2, { ignoreComments: true, code: 220 }],
      indent: [2, 2],
      "unused-imports/no-unused-imports": [2],
      "unused-imports/no-unused-vars": [
        1,
        {
          vars: "all",
          varsIgnorePattern: "^_$",
          args: "after-used",
          argsIgnorePattern: "^_$",
        },
      ],
      "import/no-duplicates": [2],
      "import/no-cycle": [2],
      "react/jsx-key": [2],
      "react/no-unused-prop-types": [2],
      "react/self-closing-comp": [2],
      "react/no-children-prop": [2],
      "react/destructuring-assignment": [2],
      "react/jsx-no-leaked-render": [2],
    },
  },
);
