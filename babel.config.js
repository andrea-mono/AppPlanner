module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@app': './src',
          '@components': './src/components',
          '@assets': './src/assets',
          '@theme': './src/theme',
          '@store': './src/store',
          '@interfaces': './src/interfaces',
        },
      },
    ],
  ],
};
