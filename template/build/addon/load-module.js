/**
 * Created by Webstorm.
 * @author taoqili
 * @date 2017/4/26
 */
import fs from 'fs'
import path from 'path'
export default (dir) => {
  let patcher = {}
  function load(path, name) {
    return require(path + (name || '')).default
  }
  fs.readdirSync(dir).forEach(function (filename) {
    if (!/\.js$/.test(filename)) {
      return
    }
    let name = path.basename(filename, '.js')
    let _load = load.bind(null, dir, name)
    patcher.__defineGetter__(name, _load)
  })
  return patcher
}
