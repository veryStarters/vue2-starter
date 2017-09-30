/**
* 可以采用mockjs来自动生成mock数据
* http://mockjs.com/examples.html#DPD
* @author taoqili
*/
var Mock = require('mockjs')
var data = Mock.mock('test3 message from server!!')
var sleep = require('system-sleep')
module.exports = function (req, res, next) {
  sleep(2000)
  return {
    ret: 'success',
    code: 0,
    msg: '接口提示信息',
    data: data
  }
}