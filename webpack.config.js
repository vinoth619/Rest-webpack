const { default: test } = require('node:test');
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath:'dist/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
  module:{
    rules:[{test:/\.(png|jpg|webp|jpeg')$/,
     use:['file-loader']},
     {test:/\.css$/,use:['style-loader','css-loader']}
    ]
  },
};