import serverWatcher from './addon/dev-server-watch'
import mockServer from './addon/mock-server'
serverWatcher()
mockServer()
import fs from 'fs'
import https from 'https'
import opn from 'opn'
import path from 'path'
import express from 'express'
import webpack from 'webpack'
import proxyMiddleware from 'http-proxy-middleware'
import webpackConfig from './webpack.dev.conf'
import config from './config'

const privateKey = fs.readFileSync('./build/addon/localhost.key')
const certificate = fs.readFileSync('./build/addon/localhost.crt')
const credentials = {key: privateKey, cert: certificate}

// default port where dev server listens for incoming traffic
let port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
let autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
let proxyTable = config.dev.proxyTable

let app = express()
let compiler = webpack(webpackConfig)

let devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

let hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {
  }
})

let hasCompilation = false
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  if (hasCompilation) {
    return
  }
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({action: 'reload'})
    cb()
  })
  hasCompilation = true
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  let options = proxyTable[context]
  if (typeof options === 'string') {
    options = {target: options}
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
let staticPath = path.posix.join(config.assetsPublicPath, config.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

let uri = 'http://localhost:' + port

let _resolve
let readyPromise = new Promise(resolve => {
  _resolve = resolve
})

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
  if (autoOpenBrowser) {
    opn(uri)
  }
  _resolve()
})

let server = app.listen(port, function () {
  server.keepAliveTimeout = 0
  console.log('\n本地开发环境即将启动，请访问：http://localhost' + ':' + port)
})

if (config.dev.httpsEnable) {
  let httpsServer = https.createServer(credentials, app)
  let httpsPort = config.dev.httpsPort || 8443
  httpsServer.listen(httpsPort, function() {
    httpsServer.keepAliveTimeout = 0
    console.log('您已开启https支持，请访问：https://localhost' + ':' + httpsPort)
  })
}

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
