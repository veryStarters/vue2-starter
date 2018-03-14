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
    return fetch('/gettest', params)
  },
  // 向另外一个服务器发起的请求，在config/index.js可具体配置
  getAbout(params) {
    return fetch('/about', params, {prefixName: 'easybao'})
  }
}
