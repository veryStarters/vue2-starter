// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'whatwg-fetch'
import 'fetch-jsonp'
import 'babel-polyfill'
import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'
import App from './App'
import routes from './router'
import * as components from './components/global'

Vue.config.productionTip = false
Object.values(components).forEach(function (component) {
  Vue.component(component.name, component)
})

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'is-active',
  routes
})

router.beforeEach(({meta}, from, next) => {
  let {auth = false} = meta
  if (auth && !localStorage.getItem('user')) {
    return next({name: 'userLogin'})
  }
  next()
})

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
