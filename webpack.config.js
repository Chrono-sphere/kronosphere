const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: ['./index.js'],
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ["*", ".js", ".json"],
    alias: {
      schema: path.resolve(__dirname, 'src/schema/'),
      test: path.resolve(__dirname, 'src/test/'),
    }
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
};
