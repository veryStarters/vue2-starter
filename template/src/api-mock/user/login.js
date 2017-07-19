var sleep = require('sleep')
module.exports = function (req, res, next) {
  sleep.msleep(2000)
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
        '/',
        '/test1',
        '/user/info'
      ]
    }
  }
}