const systemjsInterop = require("systemjs-webpack-interop/webpack-config");

// Pass in your webpack config, and systemjs-webpack-interop will make it
// work better with SystemJS
module.exports = systemjsInterop.modifyWebpackConfig({
  output: {
    filename: "module.js"
  },
  module: {
    rules: []
  },
  devtool: "sourcemap"
});