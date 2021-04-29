module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'linebreak-style': 0,
    'no-shadow': 0,
    'no-underscore-dangle': 0,
    'import/no-unresolved': 0,
    'import/no-dynamic-require': 0,
  },
};
