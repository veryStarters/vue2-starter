/**
 * Created by Webstorm.
 * @author taoqili
 * @date 2017/4/25
 */
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
      // 'X-CSRFToken': cookie('csrftoken')
    },
  })
  switch (type) {
    case 'GET':
      let query = params2query(params)
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

function params2query(params) {
  if (typeof params !== 'object') return '';
  var queries = [];
  for (var i in params) {
    if (params.hasOwnProperty(i)) {
      params[i] && queries.push(i + '=' + params[i])
    }
  }
  return queries.join('&');
}

function cookie(key, value, path, expires) {
  var cookie = document.cookie
  var start = cookie.indexOf(key + "=")
  var end
  if (value) {
    document.cookie = encodeURIComponent(key) + '=' + encodeURIComponent(value) + ((expires == null) ? '' : ';expires=' + expires.toGMTString()) + ((path == null) ? '' : ';path=' + path);
    return;
  }
  if (start !== -1) {
    start = start + key.length + 1;
    end = cookie.indexOf(";", start);
    if (end === -1) {
      end = cookie.length;
    }
    return decodeURIComponent(cookie.substring(start, end))
  }
}