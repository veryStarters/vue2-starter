
## 特色小镇全生命周期系统 -- 金诚集团

## Build Setup

``` bash
# 请使用yarn代替npm来安装依赖包
yarn install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

###主要功能
- vue-cli默认功能
- 自动路由：在pages|components文件夹下创建index.vue文件，系统将按照文件路径自动创建路由并初始化index.vue模板；删除index.vue文件则删除对应路由；
  
  自动路由规则：pages下创建index.vue文件，如/pages/user/index.vue对应的路由为/user/; /pages/user/login/index.vue文件对应的路由为/user/login/。components下创建的路由规则同pages，但会自动在前面增加/components/
- 数据mock：在/api/index.js文件中新增一个api接口，系统将自动按照其中定义的访问路径在api-mock下生成对应层级的文件夹和文件内容模板，填充该文件内容模板即可模拟服务端数据
- 标准html语法支持，less|sass|scss|postcss支持
- 标准html、css语法支持，less|sass|scss|postcss支持
- eslint规则调整



###组件开发规范
1、


For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
