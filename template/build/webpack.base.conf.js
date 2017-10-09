var path = require('path')
var utils = require('./utils')
var envConfig = require('./config')
var vueLoaderConfig = require('./vue-loader.conf')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: envConfig.assetsRoot,
    filename: '[name].js',
    publicPath: envConfig.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      src:    resolve('src'),
      api:    resolve('src/config/api.js'),
      pages:  resolve('src/pages'),
      fonts:  resolve('src/common/assets/fonts'),
      utils:  resolve('src/common/utils'),
      mixins: resolve('src/common/mixins'),
      images: resolve('src/common/assets/images'),
      styles: resolve('src/common/assets/styles'),
      config: resolve('src/config'),
      directives: resolve('src/common/directives'),
      components: resolve('src/common/components')
    }
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /(\.vue$)|(\.js?$)/,
        loader: 'eslint-loader',
        include: resolve('src'),
        exclude: [/node_modules/]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader?cacheDirectory',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(p?css|postcss)$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ],
        include: [resolve('src')],
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  }
}
