const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');


module.exports = {

  entry: './src/js/index.js',

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'js/bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    port: 9001,
    writeToDisk: true,
    stats :'errors-only',
    open: true,
  },

  module: {
    rules: [
      {
        test: /\.(sass|css|scss)$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },

  plugins: [
    
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),

    new MiniCssExtractPlugin({filename: 'css/style.css',}),
  ],
};