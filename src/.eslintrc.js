module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'airbnb-base',
  ],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
    
    
  },
  rules: {
    'eslint linebreak-style': ["error", "windows"],
  },
};
