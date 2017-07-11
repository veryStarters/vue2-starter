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
  // 样式、脚本、模板分离 TODO
  splitSource: false,
  // 布局配置
  layout: {
    topbar: 0,  //0 hidden; 1 show; 2 fixed
    sidebar: 0  //0 hidden; 1 show;
  },
  // session有效时间 ms
  sessionDuration: 30 * 60 * 1000,
  // 采用token鉴权时的token名称
  tokenName: 'AccessToken',
  // 首页地址
  indexPath: '/',
  // 登录页地址
  loginPath: '/user/login',
  //渲染错误处理
  errorHandler(e){
    console.log('错误：' + e)
  }
}