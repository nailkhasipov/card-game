const path = require('path');
const APP_DIR = path.resolve(__dirname, 'src');
const BUILD_DIR = path.resolve(__dirname, 'public');

module.exports = {
  entry: APP_DIR + '/app.jsx',
  devtool: 'inline-source-map',
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader'
      }
    ]
  },
  devServer: {
    contentBase: BUILD_DIR,
    port: 9000
  },
  output: {
    filename: 'bundle.js',
    path: BUILD_DIR
  }
};