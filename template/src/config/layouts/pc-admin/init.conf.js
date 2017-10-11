import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI)
console.log(document)
// 此处返回配置项
export default {
  // 0 hidden; 1 show; 2 fixed
  topbar: 0,
  // light; dark,
  sidebarTheme: 'dark',
  // 布局初始化
  layoutInitOnce: () => {
    console.log('布局初始化')
  }
}