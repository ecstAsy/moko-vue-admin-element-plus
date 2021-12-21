module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    // use the Vue3 rule
    "plugin:vue/vue3-recommended",
    "airbnb-base",
  ],
  parserOptions: {
    ecmaVersion: 13,
    parser: "@typescript-eslint/parser",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["vue", "@typescript-eslint"],
  globals: {
    defineProps: "readonly",
    withDefaults: "readonly",
    defineEmits: "readonly",
    defineExpose: "readonly",
  },
  settings: {
    "import/resolver": {
      typescript: {
        project: `${__dirname}/tsconfig.json`,
      },
    },
  },
  rules: {
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "**/*.test.js",
          "**/*.test.jsx",
          "**/*.test.ts",
          "**/*.test.tsx",
          "vite.config.ts",
        ],
      },
    ],
    "new-cap": ["error", {
      capIsNew: false,
    }],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    semi: ["error", "always"],
    quotes: ["error", "double"],
    "no-console": "off",
    camelcase: "error",
    "comma-dangle": ["error", "always-multiline"],
    "key-spacing": ["error", {
      beforeColon: false,
      afterColon: true,
    }],
    "linebreak-style": ["error", "unix"],
    "vue/multi-word-component-names": ["off", {
      ignores: [],
    }],
    "no-param-reassign": ["error", {
      props: true,
      ignorePropertyModificationsFor: ["state", "route", "res"],
    }],
    "vue/max-attributes-per-line": [
      "error",
      {
        singleline: {
          max: 1,
        },
        multiline: {
          max: 1,
        },
      },
    ],
    "vue/html-self-closing": ["error", {
      html: {
        void: "never",
        normal: "always",
        component: "always",
      },
      svg: "always",
      math: "always",
    }],
    "vue/no-export-in-script-setup": "error",
    "vue/first-attribute-linebreak": ["error", {
      singleline: "ignore",
      multiline: "below",
    }],
    "vue/html-closing-bracket-newline": ["error", {
      singleline: "never",
      multiline: "always",
    }],
    "no-unused-vars": ["error", {
      vars: "all",
      args: "none",
      ignoreRestSiblings: true,
    }],
  },
};
