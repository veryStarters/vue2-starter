var sleep = require('sleep')
module.exports = function (req, res, next) {
  sleep.msleep(200)
  return {
    ret: 'success',
    code: 0,
    msg: '登录成功',
    data: {
      name: req.body.name || '客人',
      accessToken: 'zhongguorenminggongheguozhongyangrenminzhengfu',
      menus: [],
      roles: [
        'role1',
        'role2'
      ],
      permissions: [
        'indexHome',
        'indexTest11',
        'userInfo',
        'indexTest13',
        'anotherTest1'
      ]
    }
  }
}