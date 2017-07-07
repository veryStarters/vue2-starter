/**
 * Created by Webstorm.
 * @author taoqili
 * @date 2017/7/3
 */
export default {
  // 应用名称
  appName: '非常可乐',
  // 应用类型 pc|mobile
  appType: 'pc',
  // 布局配置
  layout: {
    topbar: 0,
    sidebar: 0
  },
  // session有效时间 ms
  sessionDuration: 30 * 60 * 1000,
  // 采用token鉴权时的token名称
  tokenName: 'AccessToken',
  // 首页地址
  indexPath: '/',
  // 登录页地址
  loginPath: '/user/login'
}