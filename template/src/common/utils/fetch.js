/**
 * Created by Webstorm.
 * @author taoqili
 * @date 2017/7/21
 */
import axios from 'axios'
import config from 'config'
const env = process.env.NODE_ENV || 'development'
let instance = axios.create({
  method: 'post',
  withCredentials: true,
  timeout: 6000,
  headers: Object.assign({
    'Accept': '*',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }, config.httpHeaders || {})
})
instance.interceptors.request.use(function (req) {
  return config.requestInterceptor ? config.requestInterceptor(req) : req
}, function (err) {
  return Promise.reject(err)
})

instance.interceptors.response.use(function (res) {
  return config.responseInterceptor ? config.responseInterceptor(res) : res.data
}, function (err) {
  return Promise.reject(err)
})

export default async (url = '', params = {}, option = {}) => {
  if (!url) {
    return Promise.reject(`params 'url' not exist！`)
  }
  let method = option.method || 'post'
  let prefixName = option.prefixName || 'default'
  if (url.indexOf('http') !== 0) {
    let prefix = config.apiPath[prefixName]
    if (typeof prefix === 'string') {
      url = prefix + url
    } else if (typeof prefix === 'object') {
      url = prefix[env] + url
    }
  }
  switch (method) {
    case 'get':
      return instance.get(url, {
        params: params
      })
    case 'post':
    case 'put':
    case 'patch':
      return instance.post(url, params, option)
    default:
      return Promise.reject(`unknown request method '${method}'`)
  }
}
