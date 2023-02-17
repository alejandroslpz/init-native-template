module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'eslint:recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    eqeqeq: ['error', 'always'],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'react/react-in-jsx-scope': 'off',
    'object-curly-spacing': ['error', 'always'],
  },
};
