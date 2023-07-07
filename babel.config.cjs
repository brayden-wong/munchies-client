module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "expo-router/babel",
      "nativewind/babel",
      ["module:react-native-dotenv", {
        "moduleName": "@env",
        "path": ".env",
        "blacklist": null,
        "whitelist": null,
        "safe": false,
        "allowUndefined": true
      }],
      ["module-resolver", {
        root: ["./"],
        alias: {
          "@components": "./components",
          "@screens": "./app",
          "@stores": "./stores",
          "@utils": "./utils",
        }
      }]
    ],
  };
};
