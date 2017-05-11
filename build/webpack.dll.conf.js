var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: {
    dll: [
      'vue',
      'vue-router',
      'vuex',
      'whatwg-fetch',
      'fetch-jsonp',
      'babel-polyfill'
    ]
  },
  output: {
    path: path.join(__dirname, './dll/'),
    filename: '[name].js',
    library: '[name]'
  },
  plugins: [
    new webpack.DllPlugin({
      context: __dirname,
      path: './build/dll/manifest.json',
      name: '[name]'
    })
  ]
}
