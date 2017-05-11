/**
 * Created by Webstorm.
 * @author taoqili
 * @date 2017/4/24
 */
import fetchData from 'utils/fetch-data'

export default {
  async login(params) {
    return await fetchData('/api/user/login', params, 'POST')
  },
  async logout(params) {
    return await fetchData('/api/user/logout', params)
  },
  async test(params) {
    return await fetchData('/api/user/test', params)
  }
}