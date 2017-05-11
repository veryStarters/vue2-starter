/**
 * Created by Webstorm.
 * @author taoqili
 * @date 2017/4/11
 */
var routeWatch = require('./route-watch')
var apiWatch = require('./api-watch')
module.exports = function () {
  routeWatch.start()
  apiWatch.start()
}