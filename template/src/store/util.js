/**
 * Created by Webstorm.
 * @author taoqili
 * @date 2017/6/23
 */
import store from './index'
export const doAction = (options) => {
  options = Object.assign({
    api: function () {
      return new Promise(function (resolev, reject) {
      })
    },
    params: {},
    mutationName: ''
  }, options)
  return new Promise(async (resolve, reject) => {
    let res = await options.api(options.params)
    if (res.code === 0 && res.data) {
      let data = res.data
      store.commit(options.mutationName, data)
      resolve(data)
    } else {
      reject(res)
    }
  })
}