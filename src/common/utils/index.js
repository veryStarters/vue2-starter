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
    cookie: cookie
  }
})()