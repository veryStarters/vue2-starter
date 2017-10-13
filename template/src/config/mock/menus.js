/**
 * 可以采用mockjs来自动生成mock数据
 * http://mockjs.com/examples.html#DPD
 * @author taoqili
 */
var Mock = require('mockjs')
var data = Mock.mock({
  activeName: 'test1',
  menus: [
    {
      name: 'indexHome',
      label: '合同配置',
      icon: 'el-icon-star-on'
    },
    {
      name: 'indexDocx',
      icon: 'el-icon-edit',
      label: '合同生成'
    }
  ]
})
module.exports = function (req, res, next) {
  return {
    ret: 'success',
    code: 0,
    msg: '接口提示信息',
    data: data
  }
}