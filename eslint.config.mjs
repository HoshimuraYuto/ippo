import pluginJs from "@eslint/js";
import typescriptEslintPlugin from "@typescript-eslint/eslint-plugin";
import typescriptEslintParser from "@typescript-eslint/parser";
import eslintConfigPrettier from "eslint-config-prettier";
import checkFile from "eslint-plugin-check-file";
import importPlugin from "eslint-plugin-import";
import jsdocPlugin from "eslint-plugin-jsdoc";
import sonarjsPlugin from "eslint-plugin-sonarjs";
import unicornPlugin from "eslint-plugin-unicorn";
import unusedImportsPlugin from "eslint-plugin-unused-imports";
import globals from "globals";

const baseConfig = {
  languageOptions: {
    globals: { ...globals.browser, ...globals.node },
    // default value
    // parserOptions: {
    //   ecmaVersion: "latest", // ex: latest, 2022, 5
    //   sourceType: "module", // ex: module, commonjs
    // },
  },
};

const namingConventionConfig = {
  files: ["src/**/*"],
  plugins: {
    "check-file": checkFile,
  },
  rules: {
    "check-file/filename-naming-convention": [
      "error",
      {
        "src/**/*.{js,ts}": "CAMEL_CASE",
      },
    ],
    "check-file/folder-naming-convention": [
      "error",
      {
        "src/**/": "CAMEL_CASE",
      },
    ],
  },
};

const javascriptFormatConfig = {
  files: ["**/*.js"],
  rules: {
    camelcase: "error",
    "func-names": ["error", "as-needed"],
    "id-match": [
      "error",
      "^[a-zA-Z_$][a-zA-Z0-9_$]*$",
      {
        onlyDeclarations: true,
        properties: true,
      },
    ],
    "new-cap": "error",
  },
};

const typescriptFormatConfig = {
  files: ["**/*.ts"],
  rules: {
    "@typescript-eslint/naming-convention": "error",
  },
};

const typescriptConfig = {
  files: ["**/*.ts"],
  languageOptions: {
    parser: typescriptEslintParser,
    parserOptions: {
      project: "tsconfig.json",
    },
  },
  plugins: {
    "@typescript-eslint": typescriptEslintPlugin,
  },
  rules: {
    ...typescriptEslintPlugin.configs["strict-type-checked"].rules,
    "@typescript-eslint/explicit-function-return-type": "error",
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
  },
};

const jsdocConfig = {
  plugins: {
    jsdoc: jsdocPlugin,
  },
  rules: {
    ...jsdocPlugin.configs["recommended-typescript-error"].rules,
    "jsdoc/require-jsdoc": [
      "error",
      {
        require: {
          ArrowFunctionExpression: true,
          ClassDeclaration: true,
          FunctionDeclaration: true,
          FunctionExpression: true,
          MethodDefinition: true,
        },
      },
    ],
  },
};

const sonarjsConfig = {
  plugins: {
    sonarjs: sonarjsPlugin,
  },
  rules: sonarjsPlugin.configs["recommended"].rules,
};

const unicornConfig = {
  plugins: {
    unicorn: unicornPlugin,
  },
  rules: unicornPlugin.configs["recommended"].rules,
};

const importConfig = {
  plugins: {
    import: importPlugin,
    "unused-imports": unusedImportsPlugin,
  },
  rules: {
    "import/order": [
      "error",
      {
        alphabetize: { caseInsensitive: true, order: "asc" },
        groups: [
          "builtin",
          "external",
          "index",
          "internal",
          "object",
          "parent",
          "sibling",
          "type",
        ],
        "newlines-between": "always",
      },
    ],
    "no-unused-vars": "off", // or "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
  },
  settings: {
    "import/resolver": {
      node: true,
      typescript: true,
    },
  },
};

const coreRulesConfig = {
  rules: {
    "arrow-body-style": ["error", "as-needed"],
    curly: ["error", "multi-line", "consistent"],
    "no-console": "warn",
    "no-duplicate-imports": "error",
    "no-use-before-define": [
      "error",
      { functions: false, classes: false, variables: false },
    ],
    "no-useless-computed-key": "error",
    "no-useless-rename": "error",
    "no-var": "error",
    "prefer-const": "error",
  },
};

export default [
  pluginJs.configs.recommended,
  baseConfig,
  namingConventionConfig,
  javascriptFormatConfig,
  typescriptFormatConfig,
  typescriptConfig,
  jsdocConfig,
  sonarjsConfig,
  unicornConfig,
  importConfig,
  coreRulesConfig,
  eslintConfigPrettier,
];
