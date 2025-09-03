import js from "@eslint/js";
import globals from "globals";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import babelParser from "@babel/eslint-parser";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default [
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        requireConfigFile: false,
        ecmaFeatures: {
          jsx: true,
        },
        babelOptions: {
          plugins: ["@babel/plugin-syntax-jsx"], // 👈 добавляем это!
        },
      },
      globals: globals.browser,
    },
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooks,
      prettier: prettierPlugin,
    },
    rules: {
      semi: ["error", "always", { omitLastInOneLineBlock: false }],
      "comma-dangle": ["error", "never"],
      quotes: ["error", "single"],
      "react/prop-types": [0],
      indent: ["error", "tab"],
    },
    extends: [prettierConfig],
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
