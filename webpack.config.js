var webpack = require('webpack');
var path = require('path');
var libraryName = 'google-map-location';

var config = {
  entry: path.resolve(__dirname, './src'),
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname + '/lib'),
    filename: libraryName + '.js',
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: {
    "google": "google"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015'] }
        }]
      },
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'eslint-loader',
        }]
      }
    ]
  },
  resolve: {
    extensions: ['.js'],
    modules: [
        path.resolve(__dirname, './src')
      ]
  },
  plugins: []
};

module.exports = config;