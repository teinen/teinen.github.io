const merge = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  performance: {
    hints: false
  },
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    disableHostCheck: true,
    inline: true,
    hot: true
  },
})