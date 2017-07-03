/**
 * 路由生成，一般无需更改
 * Created by Webstorm.
 * @author taoqili
 * @date 2017/4/12
 */
import * as routes from '../pages/routes'
import * as comRoutes from '../components/routes'
import customs from './routes.custom'

const routers = [];
Object.keys(routes).forEach((name) => {
  let path = '/' + name.replace(/([A-Z])/g, "/$1").toLowerCase()
  if (name === 'index') {
    path = '/'
  }
  const custom = customs[name] || {}
  routers.push({
    name: name,
    path: custom.path || path,
    meta: custom.meta || {},
    component: routes[name],
    beforeEnter: custom.beforeEnter ||
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
    auth: false
  },
  component: r => require(['../pages/index/401.vue'], r)
})
routers.push({
  path: '*',
  name: '404',
  meta: {
    auth: false
  },
  component: r => require(['../pages/index/404.vue'], r)
})
export default routers