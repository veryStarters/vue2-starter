import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
// 此处返回配置项,此处配置项均为默认配置项，如在
export default {
  // 0 hidden; 1 show
  topbar: 1,
  // 主题样式
  theme: function () {
    return {
      bgColor: '#334257',
      textColor: '#fff',
      activateTextColor: '#2ca2fc'
    }
  },
  // 顶部导航
  navs: [
    {
      name: 'indexHome',
      label: '布局一'
    },
    {
      name: 'aboutHome',
      label: '布局一主题二'
    },
    {
      name: 'mobileHome',
      label: '布局二'
    }
  ],
  // 侧边树形菜单
  menus: [
    // {
    //   name: 'name1',
    //   label: '菜单一',
    //   icon: 'el-icon-menu',
    //   children: [
    //     {
    //       name: 'indexHome',
    //       label: '首页',
    //       icon: 'el-icon-star-on'
    //     },
    //     {
    //       name: 'submenu1',
    //       label: '子菜单1',
    //       icon: 'el-icon-menu',
    //       children: [
    //         {
    //           name: 'indexTest14',
    //           label: '测试4',
    //           icon: 'el-icon-edit'
    //         }
    //       ]
    //     }
    //   ]
    // }
  ]
}