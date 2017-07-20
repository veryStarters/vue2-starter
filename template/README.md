
## vue2-starter

vue2-starter是基于vue-cli webpack模板项目扩展出来的一套『高度自动化』的前端开发脚手架。

它通过为vue-cli增加多个扩展插件来自动化完成一系列模板代码，并提供了一套简易、可行的基础代码框架，能同时支持pc端展示、pc端后台管理、移动端
等常用的应用类型。

###主要功能
- vue-cli默认功能（已经集成vue, vue-router, vuex, fetch, element-ui）
- 自动路由（可配置，支持一级、二级嵌套）
- 数据Mock（自动生成mock数据文件，集成MockJS）
- https支持（可配置开启）
- 侧边菜单栏（可配置，支持无限级嵌套）
- 顶部导航栏（可配置，支持多级嵌套）
- 通用登录、登录超时检测支持
- 路由级别的权限控制（可配置）
- 通用directive、mixin支持
- 预渲染支持（可配置，支持多个指定路由的预渲染）
- less、scss、postcss支持


###DEVELOPER GET START
1. 安装依赖（yarn install）

2. 启动开发环境（yarn start），该命令会启动2个本地服务：一个是本地开发服务，另一个是本地数据模拟服务 

3. 找到pages目录，新建一个目录test, 然后在该目录下创建一个index.vue文件

4. 稍等片刻，在浏览器中输入http://localhost:8080/test，见证奇迹的时刻！


### 基础
0. 目录结构介绍
```
	.
  ├── build                          
  │   ├── addon            // 新增的编译插件目录，所有自动化功能均位于此处 
  │   │   └── template     // 自动化生成的相关文件的模板
  │   └── dll
  ├── config
  ├── src
  │   ├── api              // API接口配置
  │   ├── api-mock         // 自动生成的mock数据文件目录
  │   │   └── user
  │   ├── assets
  │   │   ├── fonts        // 字体
  │   │   ├── images       // 图片
  │   │   └── styles       // 通用样式 
  │   ├── common           // 通用组件
  │   │   ├── directives   // 全局指令
  │   │   ├── mixins       // 全局mixin
  │   │   └── utils        // 工具函数
  │   ├── components       // 组件库
  │   │   ├── hello
  │   │   └── sticky
  │   ├── pages            // 页面视图，一个文件夹 + 一个index.vue文件 = 一个自动路由
  │   │   ├── another
  │   │   │   └── children // 嵌套路由组件库，该目录为系统保留目录，位于其下的page将作为嵌套路由存在
  │   │   │       └── home // 嵌套路由的默认首页，该目录也为系统保留目录
  │   │   ├── common       
  │   │   │   ├── error
  │   │   │   └── layout   // 布局组件
  │   │   ├── index        // 系统首页
  │   │   │   └── children
  │   │   │       └── home
  │   │   └── user
  │   ├── router           // 路由
  │   └── store
  │       └── modules      // 按模块拆分的store
  └── static
```

1. 自动路由

在vue全家桶默认的开发环境下，大量的模板代码考验着开发者的时间和耐心。vue2-starter通过内置的监听机制，在开发者创建完index.vue文件之后，即开始为系统创建正确的页面初始化内容以及路由配置。

A. 默认情况下，自动创建的路由规则将按照以pages作为根目录的目录路径来代替，具体规则如下:
```
	./src/pages/user/login/index.vue    =>    {name: 'userLogin', path: '/user/login'}
	./src/pages/test/index.vue          =>    {name: 'test', path: '/test'}
	./src/pages/test/test1/index.vue    =>    {name: 'testTest1', path: '/test/test1'}
```
通俗来讲，就是将目录层级路径作为path，目录层级驼峰后化后作为name。

自动创建的路由虽然能够满足我们简单的业务需求，但它没有参数，没有嵌套，这显然不够，因此我们需要手动修正某些需要特殊配置的路由。

哪里入手呢？

打开router目录，可以发现，除了常见的index.js文件外，我们还多了一个routes.custom.js文件。

平时我们都是手动维护index.js文件内容，但是，在vue2-starter中，这个文件封装了自动路由的相关逻辑，因此一般不需要做任何改动。

我们可以在routes.custom.js文件中配置指定路由的细节，该路由细节以该路由的name作为key，以其余属性作为value，如：
```
	userLogin: {
		path: '/user/:id/login',
		meta: {
			title: '测试',
			auth: false
		}
	}
```

2. 嵌套路由

在某些后台管理系统项目中，经常会出现一些场景需要使用嵌套路由（可以避免路由跳转时页面整体刷新）。

vue2-starter中对嵌套路由的处理约定了一个特定的目录————children

举例来说，如果需要在another页面路由下嵌套一个路由test，需要的操作步骤是：

A. 在another目录下新建children目录，在children目录下新建test目录

B. 在another/children/test目录下新建index.vue文件

C. 在another/index.vue文件中放置<router-view></router-view>组件

D. 稍候片刻，在浏览器中输入http://localhost:8080/another/test, 又可以见证奇迹了！

同普通路由一样，自动生成的嵌套路由没有参数，但仍然可以通过route.custom.js文件进行手动配置。

和普通路由不一样的是，自动生成的嵌套路由不支持再次嵌套 :(，且children下的home路由将作为该子路由的默认路由

2. 数据mock



3. https支持



###开发规范
- pages下文件夹的命名允许使用驼峰或者横杠或者下划线方式命名，但访问时均会被忽略，如
```
	 PATH(文件路径)                         ROUTE(访问路由)
  /pages/user/info/index.vue      =>    /user/info/
  /pages/testModule/index.vue     =>    /testmodule/
  /pages/test-module/c/index.vue  =>    /testmodule/c/
  /pages/test_module/a/index.vue  =>    /testmodule/a/

```
- 

### Q | A

Q: 编译过程中提示sass解析错误
A: 一般情况下删除sass-loader并重装即可， 
```
  yarn remove sass-loader --dev
  
  yarn add sass-loader --dev

```


For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


