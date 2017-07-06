/**
 * 配置路由中除了name之外的其余参数,
 * key的命名规则：按照pages文件夹下的文件路径来命名,忽略pages目录和index.vue文件 如/pages/user/login/index.vue  文件对应的key即为userLogin
 * @author taoqili
 * @date 2017/4/24
 */
const home = r => require(['../pages/index/children/home'], r)
const test1 = r => require(['../pages/index/children/test1'], r)
const test2 = r => require(['../pages/index/children/test2'], r)
export default {
  common: {
    meta: {
      auth: true
    }
  },
  index: {
    meta: {
      auth: true
    },
    children: [
      {
        name: 'home',
        path: '',
        component: home,
        meta: {
          auth: true
        }
      },
      {
        name: 'test1',
        path: 'test1',
        meta: {
          auth: true
        },
        component: test1
      },
      {
        name: 'test2',
        path: 'test2',
        meta: {
          auth: true
        },
        component: test2
      }
    ]
  },
  userLogin: {
    meta: {
      title: '用户登录'
    }
  }
}
