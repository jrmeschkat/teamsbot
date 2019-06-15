const path = require('path');
const nodeExternals = require('webpack-node-externals');
const WebpackShellPlugin = require('webpack-shell-plugin');
const NodemonPlugin = require('nodemon-webpack-plugin');

const { NODE_ENV = 'production' } = process.env;

module.exports = {
  entry: './src/index.ts',
  mode: NODE_ENV,
  target: 'node',
  externals: [nodeExternals()],
  watch: NODE_ENV === 'development',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js'
  },
  devServer: {
    contentBase: './build'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['ts-loader']
      }
    ]
  },
  plugins: [
    new NodemonPlugin()
    //    new WebpackShellPlugin({
    //      onBuildEnd: ['yarn run:dev']
    //    })
  ]
};
