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
      icon: 'el-icon-menu',
      children: [
        {
          name: 'home',
          label: '首页',
          icon: ''
        },
        {
          name: 'menu7',
          label: '菜单7',
          icon: 'el-icon-menu',
          children: [
            {
              name: 'userLogin',
              label: '登录',
              icon: ''
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
          icon: 'el-icon-message',
          label: '导航4'
        },
        {
          name: 'menu4',
          label: '菜单四',
          icon: 'el-icon-menu',
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
      name: 'test1',
      icon: 'el-icon-menu',
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