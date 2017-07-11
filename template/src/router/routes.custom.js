/**
 * 配置路由中除了name之外的其余参数,
 * key的命名规则：按照pages文件夹下的文件路径来命名,忽略pages目录和index.vue文件 如/pages/user/login/index.vue  文件对应的key即为userLogin
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
      children: [
        {
          name: 'home',
          path: '',
          meta: {
            auth: true,
            title: 'Home'
          },
          component: children.indexHome
        },
        {
          name: 'test1',
          path: 'test1',
          meta: {
            auth: true,
            title: 'Test1'
          },
          component: children.indexTest1
        },
        {
          name: 'test2',
          path: 'test2',
          meta: {
            auth: true,
            title: 'Test2'
          },
          component: children.indexTest2
        }
      ]
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
