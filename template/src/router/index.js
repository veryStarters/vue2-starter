/**
 * 路由生成，一般无需更改
 * Created by Webstorm.
 * @author taoqili
 * @date 2017/4/12
 */
import * as routes from '../pages/routes'
import * as comRoutes from '../components/routes'
import createCustoms from './routes.custom'


let children = {}
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
  routers.push({
    name: (name === 'index' && custom.children && custom.children.length) ? '' : name,
    path: custom.path || path,
    meta: custom.meta || {},
    component: custom.component || notChildren[name],
    children: custom.children || [],
    beforeRouteEnter: custom.beforeRouteEnter ||
    function (to, from, next) {
      next()
    }
  })
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