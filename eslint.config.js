import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import unusedImports from "eslint-plugin-unused-imports";

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
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "no-unassigned-vars": [2],
      "max-len": [2, { ignoreComments: true, code: 120 }],
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
    },
  },
);
