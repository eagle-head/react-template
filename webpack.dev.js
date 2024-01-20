// webpack.dev.js
const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

const development = {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 3000,
  },
};

module.exports = merge(common, development);
