// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'whatwg-fetch'
import 'fetch-jsonp'
import 'babel-polyfill'
import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'
import config from './app.config'
import App from './App'
import routes from './router'
import utils from 'utils'
import components from './components/global'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import directive from './common/directives'
import mixin from './common/mixins'
directive.init()
mixin.init()

Vue.config.productionTip = false

components.forEach(function (component) {
  Vue.component(component.name, component)
})

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'is-active',
  routes,
  scrollBehavior(to, from, savedPosition){
    if (savedPosition) {
      return savedPosition
    } else {
      return {x: 0, y: 0}
    }
  }
})

let userInfo = utils.getUserInfoFromCache()

//登录超时判断
const loginTimeout = function () {
  return utils.getLoginRemainingTime() <= 0
}

//路由权限判断
const hasPermission = function (routePath) {
  routePath = routePath === '/' ? '//' : routePath
  let userInfo = utils.getUserInfoFromCache()
  let permissions = userInfo.permissions
  return permissions.indexOf(routePath.replace(/\/$/, '')) !== -1
}

//刷新时重建登录信息store
if (userInfo) {
  if (!loginTimeout()) {
    store.commit('LOGIN', userInfo)
  } else {
    utils.removeUserInfoFromCache()
    store.commit('LOGOUT')
  }
} else {
  store.commit('LOGOUT')
}

NProgress.configure({
  showSpinner: false
});

router.beforeEach((to, from, next) => {
  NProgress.start()
  let {auth = false} = to.meta
  userInfo = utils.getUserInfoFromCache()
  if (auth) {
    //1.需要登录
    if (!userInfo || loginTimeout()) {
      //2.没有登录信息或者登录已经超时
      next({path: config.loginPath})
    } else {
      //2.正常登录状态
      if (to.path === config.loginPath) {
        //3.访问登录页时
        if (hasPermission(config.indexPath)) {
          //4.如果有首页权限，则直接跳转到首页
          next({path: config.indexPath})
        } else {
          //4.没有首页权限，则继续停留在登录页
          next()
        }
      } else {
        //3.访问非登录页
        if (hasPermission(to.path)) {
          //4.如果有权限，则直接访问
          next()
        } else {
          //4.无权限则访问401
          console.log('您无权限访问页面：' + to.path + ' ，请联系管理员添加！')
          next({path: '/401'})
        }
      }
    }
  } else {
    // 1.不需要登录
    if (to.path === config.loginPath) {
      // 2.如果访问的是登录页，且登录超时，则直接访问
      if (loginTimeout()) {
        // 3.登录已经超时了
        next()
      } else {
        // 3.登录未超时
        if (hasPermission(config.indexPath)) {
          // 4.有访问首页的权限则跳到首页
          next({path: config.indexPath})
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
  NProgress.done();
});

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
