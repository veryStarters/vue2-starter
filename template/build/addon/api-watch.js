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
var fs = require('fs')
var Path = require('path')
var readLine = require('readline')
var mkdirp = require('mkdirp')
var shell = require('shelljs')
var apiTemplate = require('./template/api-template')
var server = {
  start() {
    var apiPath = Path.join(__dirname, '../../src/config/api.js')
    fs.watchFile(apiPath, {
      persistent: true,
      interval: 2
    }, () => {
      var rd = readLine.createInterface({
        input: fs.createReadStream(apiPath),
        terminal: false
      });
      rd.on('line', function (line) {
        var matches = line.match(/fetch\((?:'|")\/api(.*)\/(.*?)(?:'|")/)
        if (!matches || !matches[2]) return;
        var path = Path.join(__dirname, '../../src/config/mock', matches[1])
        var name = matches[2] + '.js'
        var apiFile = path + Path.sep + name;
        if (checkExits(path)) {
          if (!checkExits(apiFile)) {
            mkfile(apiFile)
          }
        } else {
          mkdirp(path, function (err) {
            if (!err) {
              mkfile(apiFile)
            }
          })
        }
      })
    });

    function mkfile(path) {
      fs.open(path, 'w+', function (err, fd) {
        if (err) {
          return;
        }
        shell.exec('git add ' + path)
        fs.write(fd, apiTemplate.tpl,
          function (err) {
            if (err) throw err;
            fs.closeSync(fd);
          })
      })
    }

    function checkExits(file) {
      var stat = null;
      try {
        stat = fs.statSync(file);
      } catch (e) {
        return false;
      }
      return stat.isFile() || stat.isDirectory();
    }
  }
}

module.exports = server
// 本地调试
if (process.env.debugger) {
  server.start()
}

