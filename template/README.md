
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
- 自动路由（可配置，支持一级、二级嵌套）
- 数据Mock（自动生成mock数据文件，集成MockJS）
- https支持（可配置开启）
- 路由级别的权限控制（可配置）
- 侧边菜单栏（可配置，支持一级、二级嵌套）
- 顶部导航栏（可配置，支持多级嵌套）
- 通用登录、登录超时检测支持
- 通用directive、mixin支持
- less、scss、postcss支持

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


