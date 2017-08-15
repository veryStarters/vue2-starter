/**
 * Created by Webstorm.
 * @author taoqili
 * @date 2017/6/3
 */
import 'babel-polyfill'
import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'
import config from './app.config'
import App from './App'
import routes from './router'
import utils from 'utils'
import api from 'api'
import components from './components/global'
import directive from './common/directives'
import mixin from './common/mixins'
import progress from 'nprogress'
import 'nprogress/nprogress.css'

// 导入布局pc的基础UI库，请配合app.config.js中的appType参数选择性导入，这样能最大程度减少最后的打包尺寸
import 'pages/common/layouts/pc/uilibs'

// 导入布局mobile的基础UI库
import 'pages/common/layouts/mobile/uilibs'

// 初始化系统模块配置信息
Vue.config.productionTip = false
Vue.config.errorHandler = config.errorHandler || new Function()
progress.configure({
  showSpinner: false
})
Vue.use(VueRouter)
components.forEach(component => {
  Vue.component(component.name, component)
})

// 1.创建一个路由实例
const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'is-active',
  routes,
  scrollBehavior(to, from, savedPosition){
    if (savedPosition) {
      return savedPosition
    } else {
      let position = {}
      // new navigation.
      // scroll to anchor by returning the selector
      if (to.hash) {
        position.selector = to.hash
      }
      // check if any matched route config has meta that requires scrolling to top
      if (to.matched.some(m => m.meta.scrollToTop)) {
        // cords will be used if no selector is provided,
        // or if the selector didn't match any element.
        position.x = 0
        position.y = 0
      }
      // if the returned position is falsy or an empty object,
      // will retain current scroll position.
      return position
    }
  }
})

// 2.应用初始化
const initApp = () => {
  //初始化全局指令和混入
  directive.init()
  mixin.init()

  // 路由权限控制
  router.beforeEach((to, from, next) => {
    console.log('即将访问路由：' + (to.name || to.path))
    progress.start()
    setTimeout(() => {
      progress.done()
    }, 5000)

    let meta = to.meta || {}
    let auth = config.defaultAuth || false
    if (meta.auth !== undefined) {
      auth = meta.auth
    }
    let accessToken = utils.getAccessToken()
    let permissions = store.getters.userInfo.permissions || []
    if (auth) {
      //1.需要登录
      if (!accessToken || loginTimeout()) {
        //2.没有登录信息或者登录已经超时
        next({name: config.loginPageName})
      } else {
        //2.正常登录状态
        if (to.name === config.loginPageName) {
          //3.访问登录页时
          if (hasPermission(permissions, config.indexPageName)) {
            //4.如果有首页权限，则直接跳转到首页
            next({name: config.indexPageName})
          } else {
            //4.没有首页权限，则继续停留在登录页
            next()
          }
        } else {
          //3.访问非登录页
          if (hasPermission(permissions, to.name)) {
            //4.如果有权限，则直接访问
            next()
          } else {
            //4.无权限则访问401
            console.log('无权访问路由：' + to.name + ' ，请联系管理员添加！')
            next({name: '401'})
          }
        }
      }
    } else {
      // 1.不需要登录
      if (to.name === config.loginPageName) {
        // 2.如果访问的是登录页，且登录超时，则直接访问
        if (loginTimeout()) {
          // 3.登录已经超时了
          next()
        } else {
          // 3.登录未超时
          if (hasPermission(permissions, config.indexPageName)) {
            // 4.有访问首页的权限则跳到首页
            next({name: config.indexPageName})
          } else {
            // 4.没有就继续访问登录页
            next()
          }
        }
      } else {
        // 2.不是登录页直接访问
        next()
      }
    }
  })

  router.afterEach(() => {
    progress.done();
  });

  new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {App}
  })
}

// 3.应用启动主流程
api.getUserInfo().then(res => {
  let accessToken = utils.getAccessToken()
  if (accessToken && res.code === 0 && res.data) {
    rebuildStore(accessToken, res.data)
    initApp()
  } else {
    if (config.defaultAuth) {
      console.log('当前未登录或者登录状态已经失效，仅能访问无权限页面！')
    }
    initApp()
  }
}).catch(() => {
  initApp()
})

/**-------------以下为辅助函数-------------**/
//登录超时判断
const loginTimeout = () => {
  return utils.getLoginRemainingTime() <= 0
}

//路由权限判断
const hasPermission = (permissions, routeName) => {
  permissions = permissions || []
  return permissions.indexOf(routeName) !== -1
}

//已登录且未超时的情况下，刷新页面时重建store信息
const rebuildStore = (accessToken, userInfo) => {
  //刷新时重建登录信息store
  if (accessToken) {
    if (!loginTimeout()) {
      store.commit('LOGIN', userInfo)
    } else {
      utils.removeUserInfoFromCache()
      store.commit('LOGOUT')
    }
  }
}

