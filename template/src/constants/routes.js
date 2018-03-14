/**
 * Created by Webstorm.
 * @author taoqili
 * @date 2017/9/30
 * 整个框架的路由由系统自动生成，如需自定义配置相关细节，可在本文件内设置，即可覆盖系统默认
 * 配置规则：
 * 以pages下的目录（忽略children）驼峰化后作为该路由的名称进行配置；如有子路由，则需在其父路由中添加children字段来进行配置
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
      },
      beforeEnter(to, from, next) {
        next()
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
