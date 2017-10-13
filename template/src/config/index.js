/**
 * Created by Webstorm.
 * @author taoqili
 * @date 2017/7/3
 */
// 应用具体配置
const APP_CONFIG = {
  appName: '金融管理系统',
  // 是否是静态应用，静态应用指无任何跟后端交互的功能,包括权限验证、数据请求等
  // 当此处设置位true时，后续跟后台请求、权限相关的所有配置项均失效
  isStatic: false,
  // session有效时间 ms, 当isStatic为真时失效
  sessionDuration: 30 * 60 * 1000,
  // 请求头配置, 当isStatic为真时失效
  httpHeaders: {
    'Content-Type': 'application/json'
  },
  // 每个路由默认的权限校验状态, 当isStatic为真时失效
  defaultAuth: false,
  // 首页路由名称, 用于处理遭遇各种异常路由时的最终跳转路由, 当isStatic为真时失效
  indexPageName: 'indexHome',
  // 登录页路由名称, 当isStatic为真时失效
  loginPageName: 'userLogin',
  // 资源路径
  assetsPublicPath: {
    development: '/',
    test: 'http://test.static.com/',
    pre: 'http://pre.static.com/',
    production: 'http://prod.static.com/'
  },
  // Api路径, 当isStatic为真时失效
  apiPath: {
    development: '/',
    test: 'http://test.my-site.com/',
    pre: 'http://pre.my-site.com/',
    production: 'http://prod.my-site.com/'
  },
  // req切面配置
  requestInterceptor(req) {
    return req
  },
  // response切面配置
  responseInterceptor(res) {
    // 可以统一处理一些http层面的异常，
    // 业务层面一些通用的异常可以在store/utils.js中处理，其余单独请求的异常请直接在接口api调用时catch就行
    return res.data
  },
  // 渲染错误处理
  errorHandler(e){
    console.error('捕获到了错误：' + e)
  }
}

module.exports = APP_CONFIG