import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI)
// 此处返回配置项
export default {
  topbar: 2,              // 0 hidden; 1 show; 2 fixed
  sidebar: 1,             // 0 hidden; 1 show;
  sidebarTheme: 'light'    // light; dark
}