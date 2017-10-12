import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
// 此处可以返回配置项
export default {
  layoutInitOnce() {
    // console.log('布局初始化')
    let meta = document.createElement('meta')
    meta.setAttribute('content', 'width=device-width,minimum-scale=1.0,maximum-scale=1.0,shrink-to-fit=no,user-scalable=no,minimal-ui')
    meta.setAttribute('name', 'viewport')
    document.head.appendChild(meta)
  }
}