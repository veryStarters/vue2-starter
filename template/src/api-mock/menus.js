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
      label: '菜单一',
      icon: 'el-icon-menu',
      children: [
        {
          name: 'indexHome',
          label: '首页',
          icon: 'el-icon-star-on'
        },
        {
          name: 'submenu1',
          label: '子菜单1',
          icon: 'el-icon-menu',
          children: [
            {
              name: 'indexTest14',
              label: '测试4',
              icon: 'el-icon-edit'
            }
          ]
        }
      ]
    },
    {
      name: 'menu2',
      label: '菜单二',
      icon: 'el-icon-menu',
      children: [
        {
          name: 'nav4',
          icon: 'el-icon-warning',
          label: '丢失的页面'
        },
        {
          name: 'submenu2',
          label: '子菜单2',
          icon: 'el-icon-menu',
          children: [
            {
              name: 'indexTest13',
              label: '测试3',
            }
          ]
        },
        { //嵌套了另外一个父路由
          name: 'submenu3',
          label: '嵌套子菜单',
          icon: 'el-icon-menu',
          children: [
            {
              name: 'anotherHome',
              icon: 'el-icon-close',
              label: '嵌套Home'
            },
            {
              name: 'anotherTest1',
              label: '嵌套Test1',
              icon: 'el-icon-picture'
            }
          ]
        }
      ]
    },
    {
      name: 'indexTest11',
      icon: 'el-icon-share',
      label: '测试1'
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