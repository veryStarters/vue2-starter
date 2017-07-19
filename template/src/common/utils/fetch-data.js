/**
 * Created by Webstorm.
 * @author taoqili
 * @date 2017/4/25
 */
import config from 'config'
import utils from './index'
export default async (url, params = {}, type = 'POST') => {
  if (!url) return
  if (params.ORIGIN) {
    url = params.ORIGIN + url
  }
  type = type.toUpperCase()
  //默认headers
  let headers = {
    'Content-Type': 'application/json',
    'Accept': '*/*',
    // 'X-CSRF-Token': utils.localStorage.getItem('XCSRFToken') || ''
  }
  Object.assign(headers, config.headers || {})
  let tokenName = config.tokenName || 'AccessToken'
  headers[tokenName] = utils.localStorage.getItem(tokenName) || ''
  const options = Object.assign({}, {
    method: type,
    mode: 'cors',
    credentials: 'include',
    headers: headers
  })
  switch (type) {
    case 'GET':
      let query = utils.params2query(params)
      if (query) {
        url += (url.indexOf('?') === -1 ? '?' : '&') + query
      }
      break
    case 'POST':
    case 'PUT':
      options.body = JSON.stringify(params)
      break
    default:
      break
  }
  try {
    let res = await fetch(url, options)
    if (res.status !== 200) {
      throw res
    }
    return res.json()
  } catch (error) {
    console.log(error)
    return new Promise(function (resolev, reject) {
      reject(error)
    })
  }
}

