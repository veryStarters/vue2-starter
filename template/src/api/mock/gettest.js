/**
* 可以采用mockjs来自动生成mock数据
* http://mockjs.com/examples.html#DPD
* @author taoqili
*/
import Mock from 'mockjs'
import sleep from 'system-sleep'
const data = Mock.mock('test3 message from server!!')
export default (req, res, next) => {
  sleep(2000)
  return {
    ret: 'success',
    code: 0,
    msg: '接口提示信息',
    data: data
  }
}
