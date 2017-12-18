// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  plugins: {
    // @import支持
    'postcss-import': {},
    // mixin
    'postcss-mixins': {},
    // 变量定义、循环语法
    'postcss-advanced-variables': function () {
      return {
        // 全局变量定义
        variables: {
          colorList: 'red, green, blue, yellow',
          fontMin: 12,
          fontMax: 52
        }
      }
    }(),
    //嵌套
    'postcss-nested': {},
    // 自动补全
    'autoprefixer': {
      'browsers': [
        'last 2 versions',
        '> 3%',
        'ie >= 10',
        'iOS >= 8',
        'Android >= 4.3'
      ]
    },
    // px2rem
    'postcss-px2rem-exclude': {
      remUnit: 100,
      exclude: new RegExp(`(${[
        'pages/index',
        'pages/user',
        'pages/about',
        'config/layouts/pc-admin'
      ].join(')|(')})`, 'i')
    },
    // 样式优化
    'cssnano': {}
  }
}
