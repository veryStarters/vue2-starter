import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI)
// 此处返回配置项
export default {
  // 0 hidden; 1 show; 2 fixed
  topbar: 2,
  // light; dark,
  sidebarTheme: 'light',
  // 顶部导航
  navs: [
    {
      name: 'indexHome',
      label: '首页'
    }
  ],
  // 侧边树形菜单
  menus: [
    {
      name: 'indexHome',
      label: '合同列表',
      icon: 'el-icon-star-on'
    },
    {
      name: 'indexDocx',
      icon: 'el-icon-edit',
      label: '合同生成'
    }
  ],
  // 布局初始化
  layoutInitOnce: () => {
    // console.log('布局初始化')
  }
}