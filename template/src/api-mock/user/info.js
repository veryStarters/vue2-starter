/**
* 可以采用mockjs来自动生成mock数据
* http://mockjs.com/examples.html#DPD
* @author taoqili
*/
var sleep = require('system-sleep')
var Mock = require('mockjs')
var data = Mock.mock({
})
module.exports = function (req, res, next) {
  // 模拟网络环境，延迟100ms返回
  sleep(100)
  return {
    ret: 'success',
    code: 0,
    msg: '接口提示信息',
    data: data
  }
}