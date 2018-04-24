/**
 * Created by Webstorm.
 * @author taoqili
 * @date 2017/6/5
 */
import fs from 'fs'
import Path from 'path'
import * as util from './util'

function StoreModulePlugin(options) {
  const storeDirPath = Path.join(__dirname, '../../src/store/modules/')
  const modulePath = Path.join(__dirname, '../../src/common/core/store/modules.js')
  this.options = Object.assign({
    dirPath: storeDirPath,
    modulePath: modulePath
  }, options || {})
}

StoreModulePlugin.prototype.apply = function (compiler) {
  const opt = this.options
  compiler.plugin('compile', () => {
    util.clearFileContent(opt.modulePath, ['本文件由系统自动生成'])
    walk(opt.dirPath, opt.modulePath)
    console.log('\nstore module create done')
  })

  function walk(filePath, modulePath) {
    const fileList = fs.readdirSync(filePath)
    fileList.forEach(function (file) {
      const fileName = Path.join(filePath, file)
      if (fs.statSync(fileName).isFile()) {
        if (/\.js$/.test(fileName)) {
          let path = util.formatPath(fileName, [
            /.*\/src\/store\/modules/i,
            /.js/
          ])
          const name = util.path2name(path, 'index')
          fs.appendFile(
            modulePath,
            `export const ${name} = require('src/store/modules${path}')\n`,
            function (err) {
              if (err) throw err
            }
          )
        }
      } else if (fs.statSync(fileName).isDirectory()) {
        walk(fileName, modulePath)
      }
    })
  }
}

module.exports = StoreModulePlugin
