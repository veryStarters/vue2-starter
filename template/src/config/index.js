/**
 * Created by Webstorm.
 * @author taoqili
 * @date 2017/7/3
 */
// 应用类型 pc|mobile
// PS: 修改之后需要重新编译启动，否则不会生效;
// 由于无法做到条件加载，此处修改后，最好同步修改main.js中引入的UI库，否则element-ui对移动端来说太过巨大
const APP_TYPE = 'pc'

// 应用具体配置
const APP_CONFIG = {
  appName: 'Vue2-Starter',
  appType: APP_TYPE,
  // session有效时间 ms
  sessionDuration: 30 * 60 * 1000,
  // 请求头配置
  httpHeaders: {
    'Content-Type': 'application/json'
  },
  // 每个路由默认的权限校验状态
  defaultAuth: false,
  // 首页路由名称
  indexPageName: 'indexHome',
  // 登录页路由名称
  loginPageName: 'userLogin',
  // 资源路径
  assetsPublicPath: {
    development: '/',
    testing: 'http://test.static.com/',
    preview: 'http://pre.static.com/',
    production: 'http://prod.static.com/'
  },
  // Api路径
  apiPath: {
    development: '/',
    testing: 'http://test.my-site.com/',
    preview: 'http://pre.my-site.com/',
    production: 'http://prod.my-site.com/'
  },
  // 渲染错误处理
  errorHandler(e){
    console.error('捕获到了错误：' + e)
  }
}

module.exports = APP_CONFIG