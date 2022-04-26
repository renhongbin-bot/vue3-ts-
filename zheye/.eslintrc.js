module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 0=不是错误, 1警告但是不是错误, 2输出错误
    // off warn error
    'vue/multi-word-component-names': 'off',
    'import/no-duplicates': 'off',
    '@typescript-eslint/no-explicit-any': 'off'
  }
}
