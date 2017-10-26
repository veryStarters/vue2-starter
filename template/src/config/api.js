/**
 * Created by Webstorm.
 * @author taoqili
 * @date 2017/4/24
 */
import fetch from 'utils/fetch'

export default {
  async login(params) {
    return await fetch('/user/login', params)
  },
  async logout(params) {
    return await fetch('/user/logout', params)
  },
  async getUserInfo(params) {
    return await fetch('/user/info', params)
  },
  async getMenus(params) {
    return await fetch('/menus', params)
  },
  async getTest(params) {
    return await fetch('/gettest', params)
  },
  // 向另外一个服务器发起的请求，在config/index.js可具体配置
  async getAbout(params) {
    return await fetch('/about', params, {prefixName: 'easybao'})
  }
}
