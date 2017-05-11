/**
 * Created by Webstorm.
 * @author taoqili
 * @date 2017/4/26
 */
var fs = require('fs'),
  path = require('path');
module.exports = function (dir) {
  let patcher = {}
  fs.readdirSync(dir).forEach(function (filename) {
    if (!/\.js$/.test(filename)) {
      return;
    }
    var name = path.basename(filename, '.js'),
      _load = load.bind(null, dir, name);
    patcher.__defineGetter__(name, _load);
  });
  return patcher;
}
function load(path, name) {
  return require(path + (name || ''))
}