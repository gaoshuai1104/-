const webpack = require('webpack');
module.exports = {

  configureWebpack: {plugins: [new webpack.ProvidePlugin({$:"jquery",jQuery:"jquery","windows.jQuery":"jquery"})]},
  // 部署应用包时的基本 URL
  publicPath: './',
  // 服务器端口号
  devServer: {
    port: 8890,
  }
}