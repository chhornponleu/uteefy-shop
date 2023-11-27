const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

// const config = getDefaultConfig(__dirname);
const config = getDefaultConfig(__dirname, { isCSSEnabled: true })

// https://github.com/facebook/metro/issues/1003#issuecomment-1626398738
config.resolver.sourceExts.push("mjs");

// module.exports = config;
module.exports = withNativeWind(config, { input: './styles/global.css' })