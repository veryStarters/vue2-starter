/**
 * 配置路由中除了name之外的其余参数,
 * key的命名规则：按照pages文件夹下的文件路径来命名,忽略pages目录和index.vue文件 如/pages/user/login/index.vue  文件对应的key即为userLogin
 * @author taoqili
 * @date 2017/4/24
 */
export default function () {
  return {
    common: {
      meta: {
        title: '通用'
      }
    },
    another: {
      meta: {
        title: 'another'
      },
      children: {
        test1: {
          meta: {
            auth: true,
            title: 'test测试'
          },
          children: {
            test2: {
              meta: {
                title: 'another test2'
              },
              auth: true
            }
          }
        }
      }
    },
    index: {
      meta: {
        title: 'Home'
      },
      children: {
        home: {
          meta: {
            title: 'Home',
            auth: false
          }
        },
        test11: {
          meta: {
            title: 'test11'
          }
        },
        test14: {
          meta: {
            title: '测试',
            auth: false
          }
        }
      }
    },
    userLogin: {
      meta: {
        auth: false,
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
