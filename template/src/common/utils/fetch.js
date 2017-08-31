/**
 * Created by Webstorm.
 * @author taoqili
 * @date 2017/7/21
 */
import axios from 'axios'
import config from 'config'
let instance = axios.create({
  baseURL: config.apiPath[process.env.NODE_ENV] || config.apiPath['development'] || '/',
  method: 'post',
  withCredentials: true,
  timeout: 6000,
  headers: Object.assign({
    'Accept': '*',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }, config.httpHeaders || {})
})
instance.interceptors.request.use(function (config) {
  return config
}, function (err) {
  return Promise.reject(err)
})

instance.interceptors.response.use(function (response) {
  return response.data
}, function (err) {
  return Promise.reject(err)
})

export default async (url = '', params = {}, method = 'post') => {
  if (!url) {
    return Promise.reject(`params 'url' not exist！`)
  }
  method = method.toLowerCase()
  switch (method) {
    case 'get':
      return instance.get(url, {
        params: params
      })
    case 'post':
    case 'put':
    case 'patch':
      return instance.post(url, params)
    default:
      return Promise.reject(`unknown request method '${method}'`)
  }
}