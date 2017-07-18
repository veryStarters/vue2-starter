/**
 * 路由生成，一般无需更改
 * Created by Webstorm.
 * @author taoqili
 * @date 2017/4/12
 */
import * as routes from '../pages/routes'
import * as comRoutes from '../components/routes'
import createCustoms from './routes.custom'
import utils from 'utils'

//所有子路由
let children = {}
//所有父路由
let notChildren = {}
Object.keys(routes).forEach((key) => {
  if (key.indexOf('Children') === -1) {
    notChildren[key] = routes[key]
  } else {
    children[key.replace(/Children/g, '')] = routes[key]
  }
})

let customs = createCustoms(children)
const routers = [];

Object.keys(notChildren).forEach((name) => {
  let path = '/' + name.replace(/([A-Z])/g, "/$1").toLowerCase()
  if (name === 'index') {
    path = '/'
  }
  const custom = customs[name] || {}
  let router = {
    name: name,
    path: custom.path || path,
    meta: custom.meta || {},
    component: custom.component || notChildren[name],
    children: (() => {
      let ret = []
      if (utils.isEmpty(children)) {
        return ret
      }
      Object.keys(children).forEach((componentName) => {
        //获取当前
        if (componentName.indexOf(name) === 0) {
          let childName = componentName.replace(name, '').replace(/^[A-Z]{1}/g, function (match) {
            return match.toLowerCase()
          })
          let childPath = childName.replace(/([A-Z])/g, "/$1").toLowerCase()
          if (childName === 'home') {
            childPath = ''
          }
          let childCustom = custom.children ? (custom.children[childName] || {}) : {}
          ret.push({
            name: componentName,
            path: childCustom.path || childPath,
            meta: childCustom.meta || {},
            component: childCustom.component || children[componentName],
            beforeEnter: childCustom.beforeEnter ||
            function (to, from, next) {
              next()
            }
          })
        }
      })
      return ret
    })(),
    beforeRouteEnter: custom.beforeRouteEnter ||
    function (to, from, next) {
      next()
    }
  }
  //若存在子路由，则父路由增加/结尾, 且清空命名路由
  if (router.children.length) {
    router.path = /\/$/.test(router.path) ? router.path : (router.path + '/')
    router.name = ''
  }
  routers.push(router)
})
//组件路由注册
Object.keys(comRoutes).forEach((name) => {
  routers.push({
    name: 'com_' + name,
    path: '/components/' + name.replace(/([A-Z])/g, "/$1").toLowerCase(),
    component: comRoutes[name]
  })
})
routers.push({
  name: '401',
  path: '/401',
  meta: {
    auth: false,
    title: '您暂无访问权限！'
  },
  component: r => require(['../pages/common/error/401.vue'], r)
})
routers.push({
  path: '*',
  name: '404',
  meta: {
    auth: false,
    title: '您访问的页面丢了！'
  },
  component: r => require(['../pages/common/error/404.vue'], r)
})
export default routers