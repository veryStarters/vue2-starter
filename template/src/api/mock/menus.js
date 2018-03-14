/**
 * 可以采用mockjs来自动生成mock数据
 * http://mockjs.com/examples.html#DPD
 * @author taoqili
 */
import Mock from 'mockjs'
const data = Mock.mock({
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
          label: '子菜单',
          icon: 'el-icon-menu',
          children: [
            {
              name: 'indexTest14',
              label: '测试14',
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
          name: 'submenu2',
          label: '子菜单',
          icon: 'el-icon-menu',
          children: [
            {
              name: 'indexTest13',
              icon: 'el-icon-edit',
              label: '测试13',
            }
          ]
        }
      ]
    },
    {
      name: 'indexTest11',
      icon: 'el-icon-share',
      label: '分享'
    }
  ]
})
export default (req, res, next) => {
  return {
    ret: 'success',
    code: 0,
    msg: '接口提示信息',
    data: data
  }
}
