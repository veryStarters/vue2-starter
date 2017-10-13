import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI)
// 此处返回配置项
export default {
  // 0 hidden; 1 show; 2 fixed
  topbar: 2,
  // light; dark,
  sidebarTheme: 'dark',
  // 顶部导航
  navs: [
    {
      name: 'indexHome',
      label: '首页'
    },
    {
      name: 'aboutHome',
      label: '关于我'
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
  ],
  // 布局初始化
  layoutInitOnce: () => {
    // console.log('布局初始化')
  }
}