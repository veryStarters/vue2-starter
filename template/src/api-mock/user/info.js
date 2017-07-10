module.exports = function (req, res, next) {
  return {
    ret: 'success',
    code: 0,
    msg: '接口提示信息',
    data: {
      name: req.body.name || '客人',
      accessToken: 'ajdksldjfkcirpqiwertjdljcv=djrkw',
      menus: [],
      roles: [
        'admin',
        'editor'
      ],
      permissions: [
        '/',
        '/test1',
        '/test2'
      ]
    }
  }
}