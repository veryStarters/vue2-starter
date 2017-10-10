/**
 * Created by Webstorm.
 * @author taoqili
 * @date 2017/7/3
 */
// 应用具体配置
const APP_CONFIG = {
  appName: 'Vue2-Starter',
  // static|dynamic 应用类型，动态或者静态应用
  // 静态应用指无任何跟后端交互的功能
  appType: 'static',
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