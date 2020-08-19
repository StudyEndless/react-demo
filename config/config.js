const path = require('path')

function resolve(dir) {
  return path.resolve(__dirname, dir)
}

module.exports = {
  assetsRoot: resolve('../dist'),
  assetsDirectory: 'static',
  publicPath: '/',
  indexPath: resolve('../public/index.html')
}