const webpack = require("webpack");

require("dotenv").config();

module.exports = {
  webpack: config => {
    config.node = {
      fs: "empty"
    };

    const env = Object.keys(process.env).reduce((acc, cur) => {
      acc[`process.env.${cur}`] = JSON.stringify(process.env[cur]);
      return acc;
    }, {});

    config.plugins.push(new webpack.DefinePlugin(env));
    return config;
  },
  target: "serverless"
};
