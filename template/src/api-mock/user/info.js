module.exports = function (req, res, next) {
  return {
    ret: 'success',
    code: 0,
    msg: '接口提示信息',
    data: {
      name: req.body.name || '客人',
      accessToken: 'aabbccddeeffgghhiijjkk',
      menus: [],
      roles: [],
      permissions: []
    }
  }
}