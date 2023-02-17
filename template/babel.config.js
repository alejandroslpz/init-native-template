module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '~api': './src/api',
          '~assets': './src/assets',
          '~components': './src/components',
          '~features': './src/features',
          '~hooks': './src/hooks',
          '~locales': './src/locales',
          '~screens': './src/screens',
          '~themes': './src/themes',
          '~utilities': './src/utilities',
        },
      },
    ],
  ],
};
