/**
 * Created by Webstorm.
 * @author taoqili
 * @date 2017/7/3
 */
// 应用类型 pc|mobile
// PS: 修改之后需要重新编译启动，否则不会生效;
// 由于无法做到条件加载，此处修改后，最好同步修改main.js中引入的UI库，否则element-ui对移动端来说太过巨大
const AppType = 'pc'

// 应用具体配置
const AppConfig = {
  appName: 'Vue2-Starter',
  appType: AppType,
  layout: (function (type) {
    return {
      // pc端配置
      pc: {
        topbar: 2,              // 0 hidden; 1 show; 2 fixed
        sidebar: 1,             // 0 hidden; 1 show;
        sidebarTheme: 'dark',   // light; dark
        menus: [                // 菜单配置，也可以通过配置getMenus接口从后端获取
          {
            name: 'menu1',
            label: '菜单一',
            icon: 'el-icon-menu',
            children: [
              {
                name: 'indexHome',
                label: '首页',
                icon: 'el-icon-star-on'
              },
              {
                name: 'submenu1',
                label: '子菜单1',
                icon: 'el-icon-menu',
                children: [
                  {
                    name: 'indexTest14',
                    label: '测试4',
                    icon: 'el-icon-edit'
                  }
                ]
              }
            ]
          }
        ],              // 前端定义的侧边menu
      },
      // 移动端配置
      mobile: {

      }
    }[type]
  })(AppType),
  // session有效时间 ms
  sessionDuration: 30 * 60 * 1000,
  // 请求头配置
  httpHeaders: {
    'Content-Type': 'application/json'
  },
  // 每个路由默认的权限校验状态
  defaultAuth: false,
  // 首页路由名称
  indexPageName: 'indexHome',
  // 登录页路由名称
  loginPageName: 'userLogin',
  // 预渲染路由列表
  preRenderRouters: [
    // '/user/login'
  ],

  // 渲染错误处理
  errorHandler(e){
    console.log('捕获到了错误：' + e)
  }
}

module.exports = AppConfig