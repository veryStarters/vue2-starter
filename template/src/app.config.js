/**
 * Created by Webstorm.
 * @author taoqili
 * @date 2017/7/3
 */

// 应用类型 pc|mobile
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
export default AppConfig