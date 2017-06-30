/**
 * 配置路由中除了name之外的其余参数,
 * key的命名规则：按照pages文件夹下的文件路径来命名,忽略pages目录和index.vue文件 如/pages/user/login/index.vue  文件对应的key即为userLogin
 * @author taoqili
 * @date 2017/4/24
 */
export default {
  index: {
    meta: {
      auth: true
    }
  },
  userLogin: {
    meta: {
      title: '用户登录'
    }
  }
}
