/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    'prettier',
    '@vue/eslint-config-typescript',
  ],
  'vue/comment-directive': [
    'error',
    {
      reportUnusedDisableDirectives: false,
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
};
