var sleep = require('system-sleep')
module.exports = function (req, res, next) {
  sleep(200)
  return {
    ret: 'success',
    code: 0,
    msg: '登录成功',
    data: {
      name: req.body.name || '游客',
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