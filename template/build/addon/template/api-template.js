module.exports = {
  tpl: (() => {
    return [
      '/**',
      '* 可以采用mockjs来自动生成mock数据',
      '* http://mockjs.com/examples.html#DPD',
      '* @author taoqili',
      '*/',
      'var Mock = require(\'mockjs\')',
      'var data = Mock.mock({',
      '})',
      'module.exports = function (req, res, next) {',
      '  return {',
      '    ret: \'success\',',
      '    code: 0,',
      '    msg: \'接口提示信息\',',
      '    data: {}',
      '  }',
      '}'
    ].join('\n')
  })()
}


