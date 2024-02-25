module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    'plugin:prettier/recommended' // 添加 prettier 插件
  ],
  parser: 'vue-eslint-parser',
  plugins: ['prettier'], // 声明使用 prettier 插件
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'prettier/prettier': 'error' // 开启 eslint 对 prettier 的支持
  }
}
