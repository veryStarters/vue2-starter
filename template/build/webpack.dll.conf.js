import webpack from 'webpack'
import path from 'path'

export default {
  entry: {
    dll: [
      'vue',
      'vue-router',
      'vuex',
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
