/**
 * Created by Webstorm.
 * @author taoqili
 * @date 2017/4/24
 */
import fetch from 'utils/fetch'

export default {
  login(params) {
    return fetch('/user/login', params)
  },
  logout(params) {
    return fetch('/user/logout', params)
  },
  getUserInfo(params) {
    return fetch('/user/info', params)
  },
  getMenus(params) {
    return fetch('/menus', params)
  },
  getTest(params) {
    return fetch('http://website.easybao.com/api/wx/config', params)
  },
  // 向另外一个服务器发起的请求，在src/config.js可具体配置
  getAbout(params) {
    return fetch('/about', params, {prefixName: 'easybao'})
  }
}
