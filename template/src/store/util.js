/**
 * Created by Webstorm.
 * @author taoqili
 * @date 2017/6/23
 */
import store from './index'
export const doAction = (options) => {
  options = Object.assign({
    api: function () {
      return new Promise(() => {})
    },
    params: {},
    mutationName: ''
  }, options)
  return new Promise(async (resolve, reject) => {
    let res = await options.api(options.params)
    if (res.code === 0 || res.code === '0') {
      let data = res.data
      options.mutationName && store.commit(options.mutationName, data)
      resolve(data, res)
    } else {
      reject(res)
      console.log('返回数据出现问题，请在catch中处理异常流程')
      console.log(res)
    }
  })
}
