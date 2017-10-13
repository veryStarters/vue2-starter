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

export const about = {
  meta: {
    title: 'another'
  },
  children: {
    test1: {
      meta: {
        auth: false,
        title: 'test测试'
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
        title: 'test14',
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
