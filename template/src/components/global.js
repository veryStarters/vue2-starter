/**
 * Created by Webstorm.
 * @author taoqili
 * @date 2017/5/12
 * @desc 全局公共组件请在此引入并导出，系统将自动注册到Vue组件系统，后续无需在具体使用页面上单独引入
 * 未在此引入的组件，需要在使用位置手动导入并配置后方可使用
 */
export default [
  require('./dialog'),
  require('./layout'),
  require('./hello')
]