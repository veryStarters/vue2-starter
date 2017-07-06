/**
 * Created by Webstorm.
 * @author taoqili
 * @date 2017/4/18
 */
import config from 'config'
import cookie from 'js-cookie'
import localStorage from './local-storage'
export default (() => {
  return {
    localStorage: localStorage,
    cookie: cookie,
    /**
     * 空对象判断
     * @param obj
     * @returns {boolean}
     */
    isEmpty: function (obj) {
      for (var key in obj) return false
      return true
    },
    /**
     * 获取登录剩余时间秒数
     * @returns {number}
     */
    getLoginRemainingTime(){
      let loginTime = Math.ceil(+localStorage.getItem('userLoginTime') / 1000)
      return config.sessionDuration / 1000 - (Math.ceil(Date.now() / 1000) - loginTime)
    },
    /**
     * 从缓存获取用户信息
     */
    getUserInfoFromCache(){
      return JSON.parse(localStorage.getItem('userInfo') || '""')
    },
    /**
     * 保存用户信息到缓存
     * @param userInfo
     */
    setUserInfoToCache(userInfo){
      localStorage.setItem('userInfo', JSON.stringify(userInfo))
      localStorage.setItem('userLoginTime', Date.now())
    },
    /**
     * 移除缓存中的用户信息
     */
    removeUserInfoFromCache(){
      localStorage.removeItem('userInfo')
      localStorage.removeItem('userLoginTime')
    },
    /**
     * 参数对象转换成请求参数字符串
     * @param params
     * @returns {*}
     */
    params2query(params) {
      if (typeof params !== 'object') return '';
      var queries = [];
      for (var i in params) {
        if (params.hasOwnProperty(i)) {
          params[i] && queries.push(i + '=' + params[i])
        }
      }
      return queries.join('&');
    }
  }
})()