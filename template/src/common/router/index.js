/**
 * Created by Webstorm.
 * @author taoqili
 * @date 2017/8/14
 */
/**
 * 路由生成，本模块处理了自动生成路由的相关逻辑，一般无需更改。
 * 如有自定义路由需求，请移步至routes.custom.js文件
 * Created by Webstorm.
 * @author taoqili
 * @date 2017/4/12
 */
import * as routes from 'pages/routes'
import * as componentRoutes from 'components/routes'
import * as customRoutes from 'config/routes'

// 顶级路由
let topRouters = {}
// 所有子路由
let allChildRouters = {}

// 拆分路由分类
Object.keys(routes).forEach((key) => {
  if (key.indexOf('Children') === -1) {
    topRouters[key] = routes[key]
  } else {
    allChildRouters[key] = routes[key]
  }
})

let routers = []

//从顶层路由开始构建
Object.keys(topRouters).forEach((name) => {
  let path = '/' + name.replace(/([A-Z])/g, "/$1").toLowerCase()
  if (name === 'index') {
    path = '/'
  }
  let custom = customRoutes[name] || {}
  let router = {
    name: name,
    _name: name,  // 存在子路由的路由会被清空name，此处做一个备份
    path: custom.path || path,
    meta: custom.meta || {},
    component: custom.component || topRouters[name],
    beforeRouteEnter: custom.beforeEnter || function (to, from, next) {
      next()
    }
  }
  router.children = getChildren(name) || []
  // 若存在子路由，则父路由增加/结尾, 且清空命名路由
  if (router.children.length) {
    router.path = /\/$/.test(path) ? path : (path + '/')
    router.name = ''
  }
  routers.push(router)
})

// 获取并设置当前路由的子路由信息
function getChildren(parentName) {
  let ret = []
  let router = {}
  Object.keys(allChildRouters).forEach((name) => {
    //获取以父路由名称开头的子路由
    if (hasChildren(name, parentName)) {
      let parentPath = getParentPath(parentName)
      let childName = getChildName(name, parentName)
      let childPath = getChildPath(childName, parentPath)
      if (childName === parentName.replace(/Children/g, '') + 'Home') {
        childPath = ''
      }
      let custom = getCustomRoutes(name) || {}
      router = {
        name: childName,
        _name: childName,
        path: custom.path || childPath,
        meta: custom.meta || {},
        component: custom.component || allChildRouters[name],
        beforeEnter: custom.beforeEnter || function (to, from, next) {
          next()
        }
      }
      router.children = getChildren(name) || []
      if (router.children.length) {
        router.name = ''
        router.path = /\/$/.test(router.path) ? router.path : (router.path + '/')
        if (router.children.length === 1 && router.children[0].name !== 'home') {
          console.warn('路由' + childName + ' 缺少默认的home路由')
        }
      }

      ret.push(router)
    }
  })
  return ret
}

// 组件路由注册
Object.keys(componentRoutes).forEach((name) => {
  routers.push({
    name: 'com_' + name,
    path: '/components/' + name.replace(/([A-Z])/g, "/$1").toLowerCase(),
    component: componentRoutes[name]
  })
})
// 401
routers.push({
  name: '401',
  path: '/401',
  meta: {
    auth: false,
    title: '您暂无访问权限！'
  },
  component: r => require(['pages/common/errors/401.vue'], r)
})
// 404
routers.push({
  path: '*',
  name: '404',
  meta: {
    auth: false,
    title: '您访问的页面丢了！'
  },
  component: r => require(['pages/common/errors/404.vue'], r)
})

function hasChildren(fullName, parentName) {
  let tmpName = parentName + 'Children'
  return fullName.indexOf(tmpName) === 0 && fullName.replace(tmpName, '').indexOf('Children') === -1
}

function getChildName(fullName, parentName) {
  return parentName.replace(/Children/g, '') + fullName.replace(parentName, '').replace('Children', '').replace(/Children.*/, '')
}

function getChildPath(childName, parentPath) {
  return childName.replace(/([A-Z])/g, '/$1').toLowerCase().replace(parentPath + '/', '')
}

function getParentPath(parentName) {
  return parentName.replace(/Children/g, '').replace(/([A-Z])/g, "/$1").toLowerCase()
}

function getCustomRoutes(name) {
  let keys = name.toLowerCase().split('children')
  let config = {}
  let parentConfig = customRoutes
  for (let i = 0; i < keys.length; i++) {
    config = parentConfig[keys[i]]
    if(config && config.children) {
      parentConfig = config.children
    }
  }
  return config || {}
}

export default routers