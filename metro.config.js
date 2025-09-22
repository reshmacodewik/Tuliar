// metro.config.js
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

module.exports = mergeConfig(defaultConfig, {
  resolver: {
    sourceExts: [...defaultConfig.resolver.sourceExts, 'mjs', 'cjs'],
    resolverMainFields: ['react-native', 'main', 'module'],
    alias: {
      'libphonenumber-js': require.resolve('libphonenumber-js/min'),
    },
  },
});
