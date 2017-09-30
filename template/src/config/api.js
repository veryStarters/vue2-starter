/**
 * Created by Webstorm.
 * @author taoqili
 * @date 2017/4/24
 */
import fetch from 'utils/fetch'

export default {
  async login(params) {
    return await fetch('/api/user/login', params)
  },
  async logout(params) {
    return await fetch('/api/user/logout', params)
  },
  async getUserInfo(params) {
    return await fetch('/api/user/info', params)
  },
  async getMenus(params) {
    return await fetch('/api/menus', params)
  },
  async getTest(params) {
    return await fetch('/api/gettest', params)
  },
  async getTest1(params) {
    return await fetch('/api/test', params)
  },
}