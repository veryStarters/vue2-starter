export default [
  '/**',
  '* 可以采用mockjs来自动生成mock数据',
  '* http://mockjs.com/examples.html#DPD',
  '* @author taoqili',
  '*/',
  'import sleep from \'system-sleep\'',
  'import Mock from \'mockjs\'',
  'const data = Mock.mock({',
  '})',
  'export default (req, res, next) => {',
  '  // 模拟网络环境，延迟100ms返回',
  '  sleep(100)',
  '  return {',
  '    ret: \'success\',',
  '    code: 0,',
  '    msg: \'接口提示信息\',',
  '    data: data',
  '  }',
  '}'
].join('\n')



