/**
 * 新增路由请严格按照如下格式书写, 系统将自动在pages|components目录下生成对应模板文件
 * 变量名代表route的name，变量名请按照驼峰格式书写，每个驼峰单词将被切分成route的path  userLogin => /user/login
 * 所有components的路由自动增加/components前缀
 **/
export const hello = r => require(['../components/hello/_test.vue'], r)
