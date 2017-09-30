/**
* 可以采用mockjs来自动生成mock数据
* http://mockjs.com/examples.html#DPD
* @author taoqili
*/
var sleep = require('system-sleep')
var Mock = require('mockjs')
var data = Mock.mock({
  total: 18,
  pages: 2,
  accountList: [
    {
      accountId: '1231',      // 账户id
      userNumber: '3213',     // 用户id
      userPhone: '213123',      // 手机号码
      userName: '桃子',       // 姓名
      status: '1',         // 状态
      isRelationCard: '1'  // 是否关联实体卡
    },
    {
      accountId: '1231',      // 账户id
      userNumber: '3213',     // 用户id
      userPhone: '213123',      // 手机号码
      userName: '桃子1',       // 姓名
      status: '1',         // 状态
      isRelationCard: '1'  // 是否关联实体卡
    }
  ]
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