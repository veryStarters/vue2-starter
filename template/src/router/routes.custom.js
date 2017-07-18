/**
 * 配置路由中除了name之外的其余参数,
 * key的命名规则：按照pages文件夹下的文件路径来命名,忽略pages目录和index.vue文件 如/pages/user/login/index.vue  文件对应的key即为userLogin
 * @params children 包含所有子路由集合的component对象，命名规则按照『name＋子name』格式进行
 * @author taoqili
 * @date 2017/4/24
 */
export default function (children) {
  return {
    common: {
      meta: {
        auth: true,
        title: '通用'
      }
    },
    index: {
      meta: {
        auth: true,
        title: '首页'
      },
      children: {
        test4: {
          meta: {
            auth: false
          }
        }
      }
    },
    userLogin: {
      meta: {
        title: '系统登录'
      }
    },
    userInfo: {
      meta: {
        auth: true,
        title: '用户信息'
      }
    }
  }
}
