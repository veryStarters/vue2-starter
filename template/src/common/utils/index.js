/**
 * Created by Webstorm.
 * @author taoqili
 * @date 2017/4/18
 */
import localStorage from './local-storage'
import cookie from './cookie'
export default (() => {
  return {
    localStorage: localStorage,
    cookie: cookie,
    isEmpty: function (obj) {
      for (var key in obj) {
        return false
      }
      return true
    }
  }
})()