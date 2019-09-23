const webpack = require("webpack");

require("dotenv").config();

module.exports = {
  env: {
    API_KEY:
      "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"
  },
  target: "serverless"
};
