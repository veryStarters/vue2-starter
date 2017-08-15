// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')
var config = require('./env.config')
module.exports = {
  build: {
    env: config.env,
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: config.assetsPublicPath,
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: config.env,
    port: config.port,
    mockPort: config.mockPort,
    autoOpenBrowser: false,
    assetsSubDirectory: 'static',
    assetsPublicPath: config.assetsPublicPath,
    httpsEnable: false,
    httpsPort: 9527,
    proxyTable: {
      '/api': {
        target: ((config.mockHost || 'http://localhost').indexOf('http') !== -1 ? config.mockHost : ('http://' + config.mockHost)) + ':' + config.mockPort,
        changeOrigin: true,
        pathRewrite: config.pathRewrite
      }
    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
