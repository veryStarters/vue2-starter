/**
 * Created by Webstorm.
 * @author taoqili
 * @date 2017/7/3
 */
// 应用具体配置
const APP_CONFIG = {
  appName: 'V2S系统应用',
  // 是否是静态应用，静态应用指无任何跟后端交互的功能,包括权限验证、数据请求等
  // 当此处设置位true时，后续跟后台请求、权限相关的所有配置项均失效
  isStatic: false,
  // 是否需要一开始就校验权限，当isStatic为真时失效
  needGetUserInfoFirst: false,
  // session有效时间 ms, 当isStatic为真时失效
  sessionDuration: 30 * 60 * 1000,
  // 请求头配置, 当isStatic为真时失效
  httpHeaders: {
    'Content-Type': 'application/json'
  },
  // 每个路由默认的权限校验状态, 设置成true时，每隔10分钟自动校验登录信息；当isStatic为真时失效
  defaultAuth: false,
  // 首页路由名称, 用于处理遭遇各种异常路由时的最终跳转路由, 当isStatic为真时失效
  indexPageName: 'indexHome',
  // 登录页路由名称, 当isStatic为真时失效
  loginPageName: 'userLogin',
  // Api对应的服务器及前缀, 当isStatic为真时失效
  apiPath: {
    default: '/api',
    easybao: {
      development: '/jcy-api',
      test: 'http://test.jcyapi.easybao.com/jcy-api',
      pre: 'http://pre.jcyapi.easybao.com/jcy-api',
      production: 'http://jcyapi.easybao.com/jcy-api'
    }
  },
  //代理配置，key值同apiPath，修改后需要重启服务
  proxyTable: {
    '/api': {
      // 默认使用本地mock数据，如需直连线上或者测试环境，直接修改target即可
      target: 'http://localhost:10082',
      // target: 'http://admintest.activity.easybao.com',
      changeOrigin: true,
      pathRewrite: {
        // '^/api': '/'
      }
    },
    '/jcy-api': {
      target: 'http://localhost:10082',
      // target: 'http://test.jcyapi.easybao.com',
      changeOrigin: true,
      pathRewrite: {
        // '^/api': '/'
      }
    }
  },
  // 预渲染路由列表
  preRenderRouters: [
    // '/login'
  ],
  // 前端代码可直接访问的变量，修改后需要重启服务，e.g  console.log(process.env.SOMETHING) => 其他的值
  envs: {
    development: {
      NODE_ENV: '"development"',
      SOMETHING: '"其它的值"'
    },
    test: {
      NODE_ENV: '"test"',
    },
    pre: {
      NODE_ENV: '"pre"'
    },
    production: {
      NODE_ENV: '"production"',
    }
  },
  // req切面配置
  requestInterceptor(req) {
    return req
  },
  // response切面配置
  responseInterceptor(res) {
    // 可以统一处理一些http层面的异常，
    // 业务层面一些通用的异常可以在store/utils.js中处理，其余单独请求的异常请直接在接口api调用时catch就行
    return res.data
  },
  // 渲染错误处理
  errorHandler(e) {
    console.error('捕获到了错误：' + e)
  }
}

module.exports = APP_CONFIG
