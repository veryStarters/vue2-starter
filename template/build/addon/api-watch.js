/**
 * Created by Webstorm.
 * @author taoqili
 * @date 2017/4/26
 */
/**
 * Created by Webstorm.
 * @author taoqili
 * @date 2017/4/26
 */
import fs from 'fs'
import path from 'path'
import readLine from 'readline'
import mkdirp from 'mkdirp'
import * as util from './util'
import apiTemplate from './template/api-template'
const Watcher = {
  start() {
    let apiPath = path.join(__dirname, '../../src/api/index.js')
    fs.watchFile(apiPath, {
      persistent: true,
      interval: 2
    }, () => {
      let rd = readLine.createInterface({
        input: fs.createReadStream(apiPath),
        terminal: false
      })
      rd.on('line', (line) => {
        let matches = line.match(/fetch\((?:'|")\/(?:(.*)\/)?(.*?)(?:'|")/)
        if (!matches || !matches[2]) return
        let name = matches[2] + '.js'
        let mockDir = path.join(__dirname, '../../src/api/mock', matches[1] || '')
        let mockFile = path.join(mockDir, name)
        if (util.checkExits(mockDir)) {
          if (!util.checkExits(mockFile)) {
            util.mkFile(mockFile, apiTemplate)
          }
        } else {
          mkdirp(mockDir, (err) => {
            if (!err) {
              util.mkFile(mockFile, apiTemplate)
            }
          })
        }
      })
    })
  }
}
// 本地调试
if (process.env.debugger) {
  Watcher.start()
}

export default Watcher


