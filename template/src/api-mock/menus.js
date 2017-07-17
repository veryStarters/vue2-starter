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
      name: 'menu1',
      label: '一级菜单一',
      children: [
        {
          name: 'test1',
          label: '导航1',
        },
        {
          name: 'menu7',
          label: '菜单7',
          children: [
            {
              name: 'testTest',
              label: '导航2',
            }
          ]
        },
        {
          name: 'menu4',
          label: '菜单四',
          children: [
            {
              name: 'test3',
              label: '导航3',
            }
          ]
        }
      ]
    },
    {
      name: 'menu2',
      label: '一级菜单二',
      children: [
        {
          name: 'nav4',
          label: '导航4'
        },
        {
          name: 'test2',
          label: '导航2'
        }
      ]
    },
    {
      name: 'test1',
      label: '一级导航1'
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