/**
 * Created by Webstorm.
 * @author taoqili
 * @date 2017/6/5
 */
import fs from 'fs'
import path from 'path'
import * as util from './util'
function AsyncRoutePlugin() {
}
AsyncRoutePlugin.prototype.apply = function (compiler) {
  let pagesDir = path.join(__dirname, '../../src/pages/')
  let componentsDir = path.join(__dirname, '../../src/common/components/')
  let routeDir = path.join(__dirname, '../../src/common/router/')
  let routePath = path.join(routeDir, 'routes-page.js')
  let comRoutePath = path.join(routeDir, 'routes-component.js')
  compiler.plugin("compile", function () {
    util.clearFileContent(routePath)
    util.clearFileContent(comRoutePath)
    walk(pagesDir, routePath, 'pages')
    walk(componentsDir, comRoutePath, 'components')
    console.log('\nAll routes create done!')
  })

  function walk(dir, routePath, type) {
    let fileList = fs.readdirSync(dir)
    fileList.forEach(file => {
      let filePath = path.join(dir, file)
      if (fs.statSync(filePath).isFile()) {
        if (/index\.vue$/.test(filePath)) {
          let path = util.formatPath(filePath, [
            type === 'pages' ? /.*\/src\/pages/i : /.*\/src\/common\/components/i,
            'index.vue'
          ])
          let name = util.path2name(path, 'index')
          fs.appendFile(
            routePath,
            `export const ${name} = r => require(['${type}${path}'], r)\n`,
            function (err) {
              if (err) throw err
            }
          )
        }
      } else if (fs.statSync(filePath).isDirectory()) {
        walk(filePath, routePath, type)
      }
    })
  }
}

export default AsyncRoutePlugin
