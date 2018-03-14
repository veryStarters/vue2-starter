/**
 * Created by Webstorm.
 * @author taoqili
 * @date 2017/4/11
 */
import routeWatch from './route-watch'
import apiWatch from './api-watch'
import storeWatch from './store-watch'
export default () => {
  routeWatch.start()
  apiWatch.start()
  storeWatch.start()
}
