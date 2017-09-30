/**
 * Created by Webstorm.
 * @author taoqili
 * @date 2017/9/30
 */
export const common = {
  meta: {
    title: '通用'
  }
}

export const another = {
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
}

export const index = {
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
}

export const userLogin = {
  meta: {
    auth: false,
    title: '系统登录'
  }
}

export const userInfo = {
  meta: {
    auth: true,
    title: '用户信息'
  }
}
