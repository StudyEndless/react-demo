const path = require('path')
const webpack = require('webapck')
const config = require('./config')

module.exports = {
  entry: {
    app: './src/index.tsx'
  },
  output: {
    filename: 'js/[name].bundle.js',
    path: config.assetsRoot,
    publicPath: config.publicPath
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.ts', '.tsx'], // 自动判断后缀名，引入时可不带后缀
    alias: {
      '@': '../src'
    }
  }
}