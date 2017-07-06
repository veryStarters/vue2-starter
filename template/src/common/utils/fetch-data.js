/**
 * Created by Webstorm.
 * @author taoqili
 * @date 2017/4/25
 */
import utils from './index'
export default async (url, params = {}, type = 'GET') => {
  if (!url) return
  if (params.ORIGIN) {
    url = params.ORIGIN + url
  }
  type = type.toUpperCase()
  const options = Object.assign({}, {
    method: type,
    mode: 'cors',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      'Accept': '*/*',
      'X-CSRFToken': utils.cookie.get('csrftoken') || ''
    },
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

