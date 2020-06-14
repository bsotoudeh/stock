module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'eslint-disable-next-line': 0,
    'eslint-disable': 0,
    'no-mixed-spaces-and-tabs': 0,
    'indent': 'off',
    'space-before-function-paren': 'off',
    'no-unused-expressions': 'off',
    'vue/no-use-v-if-with-v-for': 'off',
    'vue/return-in-computed-property': 'off',
    'vue/require-v-for-key': 'off',
    'no-unused-vars': ['off', { 'args': 'none' }],
  }
}
