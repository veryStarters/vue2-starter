/**
 * Created by Webstorm.
 * 可以采用mockjs来自动生成mock数据
 * http://mockjs.com/examples.html#DPD
 * @author taoqili
 * @date 2017/6/23
 */
import Mock from 'mockjs'
const char = 'abcdefghijklmnopqrstuvwxyz'
const userInfo = Mock.mock({
  'name': '@cname',
  'accessToken': '@string(char,32)',
  'menus|3': [{
    'label': '@string(char, 10)',
    'path': '/@string(char,8)/@string(char,8)',
    'children|3': [{
      'label': '@string(char, 10)',
      'path': '/@string(char,8)/@string(char,8)'
    }]
  }],
  'roles': ['admin', 'editor'],
  'permissions': [
    'indexHome',
    'indexTest11',
    'userInfo',
    'indexTest13',
    'anotherTest1'
  ]
})
export default (req, res, next) => {
  return {
    ret: 'success',
    code: 0,
    msg: '接口提示信息',
    data: userInfo
  }
}
