var webpack = require('webpack');
var path = require('path');

var config = {
  entry: __dirname + '/src/index.js',
  output: {
    path: __dirname + '/dist/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8000,
              name: 'images/[hash]-[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.js?/,
        loader: 'babel-loader',
      },
    ],
  },
  devServer: {
    contentBase: path.resolve('src/public'),
  },
};

module.exports = config;
