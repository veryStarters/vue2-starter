
## vue2-starter

## Build Setup

``` bash
# 请使用yarn代替npm来安装依赖包
yarn install

# serve with hot reload at localhost:8080
yarn start

# build for production with minification
yarn run build

# build for test with minification
yarn run build:test

# build for production and view the bundle analyzer report
yarn run build --report
```

###主要功能
- vue-cli默认功能

- 自动路由：在pages|components文件夹下创建index.vue文件，系统将按照文件路径自动创建路由并初始化index.vue模板；删除index.vue文件则删除对应路由；
- 自动路由规则：pages下创建index.vue文件，如/pages/user/index.vue对应的路由为/user/; /pages/user/login/index.vue文件对应的路由为/user/login/。components下创建的路由规则同pages，但会自动在前面增加/components/
- 自动创建的路由均为平级，嵌套路由需要在routes.custom.js中手动设置, 但component可直接通过children参数获取,component的引用方式为children.routeName
- https支持(自签名证书)、权限控制支持
- 通用directive、mixin支持
- 数据mock：在/api/index.js文件中新增一个api接口，系统将自动按照其中定义的访问路径在api-mock下生成对应层级的文件夹和文件内容模板，填充该文件内容模板即可模拟服务端数据
- 标准html语法支持，less|sass|scss|postcss支持
- 标准html、css语法支持，less|sass|scss|postcss支持
- 页面布局定义，topbar，sidebar，navbar，appMain, 可在app.config.js中配置相关特性
- eslint规则调整




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


