/**
 * Created by Webstorm.
 * @author taoqili
 * @date 2017/4/26
 */
import fs from 'fs'
import Path from 'path'
import shell from 'shelljs'
import chokidar from 'chokidar'
import * as util from './util'
import pagesTemplate from './template/page-template'
import componentsTemplate from './template/component-template'
import componentsTestTemplate from './template/component-test-template'

const templates = {
  pages: pagesTemplate,
  components: componentsTemplate,
  test: componentsTestTemplate
}
const Watcher = {
  start() {
    let blocks = {}
    let routesPath = Path.join(__dirname, '../../src/common/router/routes-page.js')
    let pagesDir = Path.join(__dirname, '../../src/pages')
    let componentsRoutePath = Path.join(__dirname, '../../src/common/router/routes-component.js')
    let componentsDir = Path.join(__dirname, '../../src/common/components')
    template2routes(pagesDir, routesPath, 'pages')
    template2routes(componentsDir, componentsRoutePath, 'components', true)

    /**
     * 通过模板生成路由
     * @param pagesPath
     * @param routesPath
     * @param type
     * @param needTest
     */
    function template2routes(pagesPath, routesPath, type, needTest) {
      util.clearFileContent(routesPath, [
        '本文件由系统自动生成，请勿更改',
        '变量名代表route的name，变量名请按照驼峰格式书写，每个驼峰单词将被切分成route的path  userLogin => /user/login',
        '所有components的路由自动增加/components前缀'
      ])
      const fixTpl = (tpl, name) => {
        return tpl
          .replace(/<%name%>/gi, name)
          .replace(/<%humpName%>/gi, function () {
            return name.replace(/-([a-z])/g, function (a, b) {
              return b.toUpperCase()
            })
          })
          .replace(/<%wrapper%>/gi, `${name}-wrapper`)
      }
      let watcher = chokidar.watch(pagesPath, {
        ignored: /(^|[\/\\])\../
      })
      watcher.on('add', function (filePath) {
        if (/index\.vue$/.test(filePath)) {
          if (blocks[filePath]) {
            delete blocks[filePath]
            return
          }
          let path = util.formatPath(filePath, [
            type === 'pages' ? /.*\/src\/pages/i : /.*\/src\/common\/components/i,
            'index.vue'
          ])
          let name = util.path2name(path, 'index')
          let testFile = filePath.replace('index.vue', '_test.vue')
          if (needTest && !util.checkExitsAndEmpty(testFile)) {
            util.mkFile(testFile, fixTpl(templates.test, name))
          }
          path = path + (needTest ? '_test.vue' : 'index.vue')
          fs.appendFile(
            routesPath,
            `export const ${name} = r => require(['${type}${path}'], r)\n`,
            function (err) {
              if (err) throw err
            }
          )
          if (!util.checkExitsAndEmpty(filePath)) {
            util.mkFile(filePath, fixTpl(templates[type], name)
            )
          }
        }
      })
      watcher.on('unlink', (filePath) => {
        if (/index\.vue$/.test(filePath)) {
          let path = util.formatPath(filePath, [
            type === 'pages' ? /.*\/src\/pages/i : /.*\/src\/common\/components/i,
            'index.vue'
          ])
          let name = util.path2name(path, 'index')
          let reg = new RegExp(`^export const ${name}.*$`, 'gi')
          shell.sed('-i', reg, '', routesPath)
        }
      })
    }
  }
}

// 本地调试
if (process.env.debugger) {
  Watcher.start()
}

export default Watcher
