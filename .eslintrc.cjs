module.exports = {
    env: {
      node: true
    },
    plugins: ['@typescript-eslint', 'prettier'],
    parser: 'vue-eslint-parser',
    extends: [
      'eslint:recommended',
      'plugin:vue/vue3-recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended'
    ],
    parserOptions: {
      parser: '@typescript-eslint/parser',
      extraFileExtensions: ['.vue'],
      ecmaFeatures: {
        jsx: true
      }
    },
    rules: {
      'no-console': 'off',
      'no-debugger': 'off',
      'no-unused-vars': 'off',
      'vue/multi-word-component-names': 'off',
      '@typescript-eslint/no-unused-vars': ['error'],
      'prettier/prettier': [
        'error',
        {
          printWidth: 100
        }
      ]
    }
  }
  