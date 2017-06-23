/**
 * Created by Webstorm.
 * @author taoqili
 * @date 2017/4/18
 */
const local = window.localStorage
export default {
  getItem: (key) => {
    return local.getItem(key)
  },
  setItem: (key, value) => {
    return local.setItem(key, value)
  },
  removeItem: (key) => {
    return local.removeItem(key)
  }
}