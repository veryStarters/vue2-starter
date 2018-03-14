import path from 'path'
import utils from './utils'
import webpack from 'webpack'
import config from './config'
import appConfig from '../src/config'
import merge from 'webpack-merge'
import baseWebpackConfig from './webpack.base.conf'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import FriendlyErrorsPlugin from 'friendly-errors-webpack-plugin'
import manifestJSON from './dll/manifest.json'
import AddAssetHtmlPlugin from 'add-asset-html-webpack-plugin'

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

module.exports = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: '#cheap-module-eval-source-map',
  plugins: [

    new webpack.DefinePlugin({
      'process.env': config.env
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      appName: appConfig.appName,
      inject: true
    }),
    new FriendlyErrorsPlugin(),

    // TODO 未见明显性能提升
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: manifestJSON,
      name: 'dll'
    }),
    // for add assets, eg dll
    new AddAssetHtmlPlugin({
      filepath: path.join(__dirname, '/dll/' + manifestJSON.name + '.js'),
      includeSourcemap: config.dev.cssSourceMap
    })
  ]
})
