/**
 * Created by Webstorm.
 * @author taoqili
 * @date 2017/7/3
 */

// 应用类型 pc|mobile
// PS: 修改之后需要重新编译启动，否则不会生效;
// 此处修改后，最好同步修改main.js中引入的UI库，否则element-ui对移动端来说太过巨大
const AppType = 'pc'

// 应用具体配置
const AppConfig = {
  appName: '非常可乐',
  appType: AppType,
  layout: (function (type) {
    return {
      // pc端配置
      pc: {
        topbar: 2,              // 0 hidden; 1 show; 2 fixed
        sidebar: 1,             // 0 hidden; 1 show;
        sidebarTheme: 'dark',   // light; dark
      },
      // 移动端配置
      mobile: {
        header: 1,
        subHeader: 1,
        footer: 1
      }
    }[type]
  })(AppType),
  // session有效时间 ms
  sessionDuration: 30 * 60 * 1000,
  // 请求头配置
  httpHeaders: {
    'Content-Type': 'application/json'
  },
  // 是否默认开启权限校验
  defaultAuth: false,
  // 首页路由名称
  indexPageName: 'indexHome',
  // 登录页路由名称
  loginPageName: 'userLogin',
  // 预渲染路由列表
  preRenderRouters: [],
  // 渲染错误处理
  errorHandler(e){
    console.log('捕获到了错误：' + e)
  }
}
module.exports = AppConfig