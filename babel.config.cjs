module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "expo-router/babel",
      "nativewind/babel",
      ["module:react-native-dotenv", {
        "moduleName": "@env",
        "path": process.env.NODE_ENV === 'development' ? `.env.development` : process.env.NODE_ENV === 'school' ? `.env.school` : `.env.production`,
        "blacklist": null,
        "whitelist": null,
        "safe": true,
        "allowUndefined": false
      }],
      ["module-resolver", {
        root: ["./"],
        alias: {
          "@components": "./components",
          "@hooks": "./hooks",
          "@screens": "./app",
          "@stores": "./stores",
          "@utils": "./utils",
        }
      }]
    ],
  };
};
