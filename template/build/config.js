// see http://vuejs-templates.github.io/webpack for documentation.
import path from 'path'
import appConfig from '../src/config'
const assetsRoot = path.resolve(__dirname, '../dist')
const assetsSubDirectory = 'static'
const assetsPublicPath = appConfig.assetsPublicPath ? appConfig.assetsPublicPath[process.env.NODE_ENV] || '/' : '/'
export default {
  env: appConfig.envs[process.env.NODE_ENV || 'development'],
  assetsRoot: assetsRoot,
  assetsSubDirectory: assetsSubDirectory,
  assetsPublicPath: assetsPublicPath,
  // 预渲染路由列表d
  preRenderRouters: appConfig.preRenderRouters || [],
  build: {
    index: path.resolve(__dirname, '../dist/index.html'),
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
    port: 8080,
    mockPort: 10083,
    autoOpenBrowser: false,
    httpsEnable: false,
    httpsPort: 9527,
    // 默认代理
    proxyTable: Object.assign({
      '/api': {
        target: 'http://localhost:10083',
        changeOrigin: true,
        pathRewrite: {
          // '^/api': '/'
        }
      },
      '/jcy-api': {
        target: 'http://localhost:10083',
        changeOrigin: true,
        pathRewrite: {
          // '^/api': '/'
        }
      }
    }, appConfig.proxyTable || {}),
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
