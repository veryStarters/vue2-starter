
## Vue2-Starter(V2S)

Vue2-Starter(以下简称V2S)是基于vue-cli webpack模板项目扩展出来的一套『高度自动化』的前端开发脚手架。

它通过为vue-cli增加多个扩展插件来自动化完成一系列模板代码，并提供了一套简易、可行的基础代码框架，能同时支持pc端展示、pc端后台管理、移动端等常用的应用类型。

### 主要功能

- vue-cli默认功能（已经集成vue, vue-router, vuex, axios, element-ui, mint-ui）
- 根据vue文件自动生成（子）路由（可配置，支持无限级嵌套）
- 数据Mock（根据API自动生成mock数据文件，集成MockJS）
- https支持（可配置开启）
- 预渲染支持（可配置，支持多个指定路由的预渲染）
- less、scss、postcss支持（可配置）
- jsx|vue 两种语法模式支持（menubar采用了jsx语法来实现）
- PC端（前台展示、后台管理系统）、移动端等多种布局支持（可配置）
- 侧边菜单栏（可配置，支持无限级嵌套）
- 顶部导航栏（可配置，支持多级嵌套）
- 通用登录、登录超时检测支持
- 路由级别的权限控制（可配置）


### 开始

0. 安装vue-cli，初始化一个自己的项目
	```
	npm install -g vue-cli
	
	vue init veryStarters/vue2-starter MyProject
	
	cd MyProject 
	```
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
	│   ├── contants         // 常量定义
	│   ├── pages            // 页面视图，一个文件夹 + 一个index.vue文件 = 一个自动路由
	│   │   ├── another
	│   │   │   └── children // 嵌套路由，系统保留目录，位于其下的page将作为嵌套路由存在
	│   │   │       └── home // 嵌套路由的默认首页，该目录也为系统保留目录
	│   │   ├── common       
	│   │   │   ├── error
	│   │   │   └── layouts  // 布局组件
	│   │   │       ├── pc
	│   │   │       └── mobile
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

	在vue全家桶默认的开发环境下，大量的模板代码考验着开发者的时间和耐心。V2S通过内置的监听机制，在开发者创建完index.vue文件之后，即开始为系统创建正确的页面初始化内容以及路由配置。
	
	A. 默认情况下，自动创建的路由规则将按照以pages作为根目录的目录路径来代替，具体规则如下:
	```
	./src/pages/user/login/index.vue             =>    {name: 'userLogin', path: '/user/login'}
	./src/pages/test/index.vue                   =>    {name: 'test', path: '/test'}
	./src/pages/test/test1/index.vue             =>    {name: 'testTest1', path: '/test/test1'}
	./src/pages/hotel/children/home/index.vue    =>    {name: '', path: '/hotel/', children: [{name: 'hotelHome', path:''}]}
	./src/pages/hotel/children/test1/index.vue   =>    {name: '', path: '/hotel/', children: [{name: 'hotelTest1', path: 'test1'}]}
	```
	通俗来讲，就是将目录层级路径作为path，目录层级驼峰后化后作为name。
	
	自动创建的路由虽然能够满足我们简单的业务需求，但它没有参数，没有嵌套，这显然不够，因此我们需要手动修正某些需要特殊配置的路由。
	
	哪里入手呢？
	
	打开router目录，可以发现，除了常见的index.js文件外，我们还多了一个routes.custom.js文件。
	
	平时我们都是手动维护index.js文件内容，但是，在V2S中，这个文件封装了自动路由的相关逻辑，因此一般不需要做任何改动。
	
	我们可以在routes.custom.js文件中配置指定路由的细节，该路由细节以该路由的name作为key，以其余属性作为value，如：
	```
	userLogin: {
	  path: '/user/:id/login',
	  meta: {
	    title: '测试',
	    auth: false
	  },
	  children: {
	  	test1: {
	  		meta: {
	  			title: '子路由自定义设置'
	  		}
	  	}
	  }
	}
	```

2. 嵌套路由

	在某些后台管理系统项目中，经常会出现一些场景需要使用嵌套路由（可以避免路由跳转时页面整体刷新）。
	
	V2S中对嵌套路由的处理约定了一个特定的目录————children
	
	举例来说，如果需要在another页面路由下嵌套一个路由test，需要的操作步骤是：
	
	A. 在another目录下新建children目录，在children目录下新建test目录
	
	B. 在another/children/test目录下新建index.vue文件
	
	C. 在another/index.vue文件中放置&lt;router-view&gt;&lt;/router-view&gt;组件
	
	D. 稍候片刻，在浏览器中输入http://localhost:8080/another/test, 又可以见证奇迹了！
	
	同普通路由一样，自动生成的嵌套路由没有参数，但仍然可以通过route.custom.js文件进行手动配置。
	
	子路由可以无限嵌套，且children下的home路由将作为该子路由的默认路由

3. 数据mock

	针对每一个api，V2S都会自动生成一个mock数据文件，具体操作步骤：
	
	A. 在contants/api.js文件中新增一条API记录
	```
	async getTestInfo(params) {
	  return await fetchData('/api/test/info', params)
	}
	```
	
	B. 稍等片刻，查看api-mock文件夹，可以发现已经在该文件夹下自动生成了test/info.js文件，文件内容为：
	```
	var Mock = require('mockjs')
	var data = Mock.mock({
		
	})
	var sleep = require('system-sleep')
	module.exports = function (req, res, next) {
	  sleep(2000)
	  return {
	    ret: 'success',
	    code: 0,
	    msg: '接口提示信息',
	    data: data
	  }
	}
	```
	
	然后只需要在data中填入对应的mock数据信息，组件中就可以通过如下方式访问该数据：
	```
	import api from 'api'
	
	api.getTestInfo({}).then(res => {
	  console.log(res)
	})
	```
	
	mock相关配置在config/index.js和config/env.config.js文件中

4. https支持

	随着当前网络速度的提升、网络安全面临的威胁以及苹果等公司的推动，全面部署https已经是大势所趋。
	
	开发环境下使用http，生产环境使用https是目前绝大多数公司的选择，但这不可避免会碰到一些两个环境不一致的场景，导致出现线上故障。
	
	那何不直接将开发环境也切换成https呢？ 
	
	V2S内置自签名证书，可以通过config/index.js中的httpsEnable参数轻易开启https支持
	
5. 路由级别的权限控制
	
	路由从后端切换到前端，很多基础设施需要做出更改，使用history模式的路由最大的更改有2点：
	
	A. 需要在ng配置中增加try_files参数
	
	B. 权限控制由后端部分让渡到前端
	
	针对这个改变，前端需要在访问每一个可访问路由之前进行权限校验，V2S采用2层校验机制完成了这个功能。
	
	第一层：每个路由可以在meta中配置auth参数是否为true来进行大范围的权限区分，通常这个大范围区分往往指的是登录或者未登录。
	
	第二层：每个用户在登录时(或者刷新页面时)，需要由后端返回当前用户的权限（permissions）或者角色（roles）列表，而后通过permissions或者roles来细分每一个路由的访问权限。
	
	vue2.2版本之后提供的动态添加路由（addRouters）方式，虽然能够在一定程度上解决权限问题，但对路由定义层面要求较多，略显繁琐，且很难做到自动化。V2S采用了另外一种模式来
	实现该功能，仅需后端提供一个配套的获取用户权限信息接口即可（如果不做脚手架改动的情况下，此接口必须提供）。
	
  ```
    // 代码具体内容请查看main.js
    api.getUserInfo().then(res => {
      // 1. 判断本地是否已经登录，可通过token或者cookie，如果已经登录，跳到2；如果没有登录，跳到3
      // 2. 从res中获取用户权限信息，并根据此信息重建store，然后初始化应用，此时用户能访问对应的权限页面
      // 3. 未登录，直接初始化应用，此时用户仅能访问不许权限的页面，即meta.auth === false的路由
    }).catch(() => {
      // 如果出现获取用户信息异常，那就当作未登录处理，直接初始化应用
    })
    
  ```
6. PC端、移动端多种布局支持，且支持自定义扩展，仅需在pages/common/layouts下增加对应的布局文件即可。

	V2S默认提供了pc和mobile两个布局，分别引入了element-ui和mint-ui组件库，有需要的同学也可以替换成自己熟悉的。
	
	先睹为快，不妨试试修改app.config.js中的appType为'mobile'或者'pc'试试！（记得要重新编译构建哦）
	
7. 侧边菜单栏、顶部导航栏
	
	对于PC端的后台管理系统来说，侧边菜单栏几乎是一个标配般的存在。
	
	但如何实现侧边菜单栏，尤其是跟权限结合起来菜单栏相信是很多人的噩梦。
	
	V2S内置了可无限级嵌套的侧边菜单栏和顶部导航栏（可配置是否使用, 在app.config.js以及contants/menus.js中配置），可大幅提升开发者的开发效率



### 开发规范

1、API接口返回数据格式约定：
	```
		{
			ret: Boolean,
			code: Number,
			msg: Sring,
			data: Object|Array|String|Boolean
		}
	```

### Q | A

Q: Windows系统下安装时提示缺少python，为什么？
A: 由于集成了sass预处理库，而sass的运行需要依赖python，故V2S也需要依赖python环境。
python的安装方法可参加python官网(python版本请使用2.7+ && 3.0-)

Q: 编译过程中提示sass解析错误
A: 一般情况下删除sass-loader并重装即可， 
```
  yarn remove sass-loader --dev
  yarn add sass-loader --dev

```

Q: yarn install的时候老是失败怎么办？
A: 换个时间重试或者更换npm源（直接使用npm config set registry = "https://registry.npm.taobao.org/" , 不要使用cnmp）

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
