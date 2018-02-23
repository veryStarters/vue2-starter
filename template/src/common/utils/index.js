/**
 * Created by Webstorm.
 * @author taoqili
 * @date 2017/4/18
 */
import config from 'config'
import cookie from 'js-cookie'
import localStorage from './local-storage'
import fetch from './fetch'

export default (() => {
  const TOKEN = config.accessToken || 'AccessToken'
  const LOGIN_TIME = 'UserLoginTime'
  const USER_INFO = 'UserInfo'
  return {
    fetch,
    localStorage,
    cookie,
    /**
     * 空对象判断
     * @param obj
     * @returns {boolean}
     */
    isEmpty(obj) {
      for (var key in obj) return false
      return true
    },
    /**
     * 获取登录剩余时间秒数
     * @returns {number}
     */
    getLoginRemainingTime() {
      let loginTime = Math.ceil(+localStorage.getItem(LOGIN_TIME) / 1000)
      return (config.sessionDuration || 30 * 60 * 1000) / 1000 - (Math.ceil(Date.now() / 1000) - loginTime)
    },
    /**
     * 从缓存获取用户信息
     */
    getUserInfoFromCache() {
      return JSON.parse(localStorage.getItem(USER_INFO) || '""')
    },
    getAccessToken() {
      return localStorage.getItem(TOKEN)
    },
    /**
     * 保存用户信息到缓存
     * @param userInfo
     */
    setUserInfoToCache(userInfo){
      localStorage.setItem(USER_INFO, JSON.stringify({
        name: userInfo.name
      }))
      localStorage.setItem(LOGIN_TIME, Date.now())
      localStorage.setItem(TOKEN, userInfo.accessToken)
    },
    /**
     * 移除缓存中的用户信息
     */
    removeUserInfoFromCache(){
      localStorage.removeItem(USER_INFO)
      localStorage.removeItem(LOGIN_TIME)
      localStorage.removeItem(TOKEN)
    },
    /**
     * 参数对象转换成请求参数字符串
     * @param params
     * @returns {*}
     */
    params2query(params) {
      if (typeof params !== 'object') return ''
      var queries = []
      for (var i in params) {
        if (params.hasOwnProperty(i)) {
          params[i] && queries.push(i + '=' + params[i])
        }
      }
      return queries.join('&')
    },
    query2params(query) {
      if (typeof query !== "string") return {}
      let param = {}
      let params
      let kv
      params = query.split('&')
      for (let i = 0, len = params.length; i < len; i++) {
        if (!params[i]) continue
        kv = params[i].split('=')
        if (kv[0] && kv[1]) param[kv[0]] = kv[1]
      }
      return param
    }
  }
})()
