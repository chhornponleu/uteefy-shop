const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// https://github.com/facebook/metro/issues/1003#issuecomment-1626398738
config.resolver.sourceExts.push("mjs");

module.exports = config;