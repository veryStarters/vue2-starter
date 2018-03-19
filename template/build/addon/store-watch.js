/**
 * Created by Webstorm.
 * @author taoqili
 * @date 2017/4/26
 */
import fs from 'fs'
import path from 'path'
import chokidar from 'chokidar'
import shell from 'shelljs'
import storeTpl from './template/store-template'
import * as util from './util'

let modulesPath = path.join(__dirname, '../../src/common/store/modules.js')
let modulesDir = path.join(__dirname, '../../src/store/modules/')
let blocks = []
const Watcher = {
  start() {
    util.clearFileContent(modulesPath, ['本文件由系统生成，一般情况下无需修改'])
    const watcher = chokidar.watch(modulesDir, {
      ignored: /(^|[\/\\])\../
    })
    watcher.on('add', function (filePath) {
      if (/\.js$/.test(filePath)) {
        if (blocks[filePath]) {
          delete blocks[filePath]
          return
        }
        let path = util.formatPath(filePath, [/.*\/src\/store\/modules\//i, /\.js$/])
        let name = util.path2name(path + '/', 'index')
        fs.appendFile(
          modulesPath,
          `export const ${name} = require('src/store/modules/${path}')\n`,
          function (err) {
            if (err) throw err
          }
        )
        if (!util.checkExitsAndEmpty(filePath)) {
          util.mkFile(filePath, storeTpl)
        }
      }
    })

    watcher.on('unlink', filePath => {
      if (/\.js$/.test(filePath)) {
        let path = util.formatPath(filePath, [/.*\/src\/store\/modules\//i, /\.js$/])
        let name = util.path2name(path + '/', 'index')
        let reg = new RegExp(`^export const ${name}.*$`, 'gi')
        shell.sed('-i', reg, '', modulesPath)
      }
    })
  }
}

// 本地调试
if (process.env.debugger) {
  Watcher.start()
}

export default Watcher

