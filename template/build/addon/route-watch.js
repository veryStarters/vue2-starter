/**
 * Created by Webstorm.
 * @author taoqili
 * @date 2017/4/26
 */
var fs = require('fs')
var Path = require('path')
var readLine = require('readline')
var shell = require('shelljs')
var mkdirp = require('mkdirp')
var chokidar = require('chokidar')
var pagesTemplate = require('./template/page-template')
var storeTemplate = require('./template/store-template')
var componentsTemplate = require('./template/component-template')
var componentsTestTemplate = require('./template/component-test-template')
var templates = {
  pages: pagesTemplate,
  components: componentsTemplate,
  test: componentsTestTemplate,
  store: storeTemplate
}
var server = {
  start(){
    var startTime = Date.now();
    var blocks = {};
    var routesPath = Path.join(__dirname, '../../src/pages/routes.js'),
      pagesPath = Path.join(__dirname, '../../src/pages');
      // componentsRoutePath = Path.join(__dirname, '../../src/common/components/routes.js'),
      // componentsPath = Path.join(__dirname, '../../src/common/components');

    routes2template(routesPath, pagesPath, 'pages');
    template2routes(pagesPath, routesPath, 'pages');
    template2Store()

    // routes2template(componentsRoutePath, componentsPath, 'components', true);
    // template2routes(componentsPath, componentsRoutePath, 'components', true);

    /**
     * 通过路由文件生成文件模板
     * @param routesPath
     * @param pagesPath
     * @param type
     */
    function routes2template(routesPath, pagesPath, type, needTest) {
      fs.watchFile(routesPath, {
        persistent: true,
        interval: 2
      }, () => {
        var time = Date.now();
        if (time - startTime < 5000) {
          return;
        }
        var rd = readLine.createInterface({
          input: fs.createReadStream(routesPath),
          terminal: false
        });
        rd.on('line', function (line) {
          var reg = new RegExp(`\\[(?:'|")(\\.\\.\\/${type}\\/.*)(?:'|")\\]`)
          var matches = line.match(reg)
          if (!matches || !matches[1]) return;
          var path = Path.join(__dirname, '../', matches[1].replace(`${type}/`, `src/${type}/`))
          var name = ''
          matches = line.match(/^export const\s*(\w*)\s*/)
          if (matches && matches[1]) {
            name = matches[1]
          }

          var testFileName;
          if (/\.vue$/.test(path)) {
            testFileName = path;
            path = path.substring(0, path.lastIndexOf(Path.sep) + 1)
          }
          var indexFileName = path + 'index.vue'
          if (checkExitsAndEmpty(path)) {
            if (!checkExitsAndEmpty(indexFileName)) {
              blocks[indexFileName] = true;
              mkfile(indexFileName, name, type)
              if (needTest && !checkExitsAndEmpty(testFileName)) {
                mkfile(testFileName, name, 'test')
              }
            }
          } else {
            mkdirp(path, function (err) {
              if (!err) {
                blocks[indexFileName] = true;
                mkfile(indexFileName, name, type)
                if (needTest && !checkExitsAndEmpty(testFileName)) {
                  mkfile(testFileName, name, 'test')
                }
              }
            })
          }
        })
      });

      var watcher = chokidar.watch(pagesPath, {
        ignored: /(^|[\/\\])\../
      })
      watcher.on('unlink', function (fileName) {
        if (/index\.vue$/.test(fileName)) {
          var path = formatPath(fileName, type),
            name = path2name(path);
          var reg = new RegExp(`^export const ${name}.*$`, 'gi')
          shell.sed('-i', reg, '', routesPath);
        }
      })
    }

    /**
     * 通过模板生成路由
     * @param pagesPath
     * @param routesPath
     * @param type
     */
    function template2routes(pagesPath, routesPath, type, needTest) {
      clearFileContent(routesPath);
      var watcher = chokidar.watch(pagesPath, {
        ignored: /(^|[\/\\])\../
      })
      watcher.on('add', function (fileName) {
        if (/index\.vue$/.test(fileName)) {
          if (blocks[fileName]) {
            delete blocks[fileName]
            return;
          }
          var path = formatPath(fileName, type);
          var name = path2name(path);
          var testFile = fileName.replace('index.vue', '_test.vue')
          if (needTest && !checkExitsAndEmpty(testFile)) {
            mkfile(testFile, name, 'test')
          }
          path = path + (needTest ? '_test.vue' : 'index.vue')
          fs.appendFile(
            routesPath,
            `export const ${name} = r => require(['../${type}${path}'], r)\n`,
            function (err) {
              if (err) throw err;
            }
          )
        }
      })
    }

    function template2Store() {
      var watcher = chokidar.watch(pagesPath, {
        ignored: /(^|[\/\\])\../
      })
      watcher.on('addDir', function (path) {
        var regStr = '.*\\' + Path.sep + 'pages\\' + Path.sep + '([a-zA-Z0-9]*?)$'
        var matches = path.match(new RegExp(regStr))
        if (matches && matches[1]) {
          var storePath = Path.join(__dirname, '../../src/store/modules/', matches[1] + '.js')
          if (!checkExitsAndEmpty(storePath)) {
            mkfile(storePath, '', 'store')
          }
        }
      })
    }

    function formatPath(path, type) {
      path = path.replace(/\\/gi, '/')
      var reg = new RegExp('^.*src\\/' + type, 'gi')
      return path.replace(reg, '').replace('index.vue', '').replace('_test.vue', '');
    }

    function path2name(path) {
      if (path === '/') {
        return 'index';
      }
      return path.toLowerCase().replace(/^\/|\/$/g, '').replace(/-|_/g, '').replace(/\/(.{1})/g, function (a, b) {
        return b.toUpperCase();
      })
    }

    function clearFileContent(path) {
      fs.writeFile(
        path,
        '/**\n' +
        ' * 新增路由请严格按照如下格式书写, 系统将自动在pages|components目录下生成对应模板文件\n' +
        ' * 变量名代表route的name，变量名请按照驼峰格式书写，每个驼峰单词将被切分成route的path  userLogin => /user/login\n' +
        ' * 所有components的路由自动增加/components前缀\n' +
        ' **/\n',
        function (err) {
          if (err) throw err;
        })
    }

    function mkfile(path, name, type) {
      name = name.replace(/([A-Z])/g, "-$1").toLowerCase()
      fs.open(path, 'w+', function (err, fd) {
        if (err) {
          return;
        }
        shell.exec('git add ' + path)
        fs.write(fd,
          templates[type]['tpl']
            .replace(/<%name%>/gi, name)
            .replace(/<%humpName%>/gi, function () {
              return name.replace(/-([a-z])/g, function (a, b) {
                return b.toUpperCase()
              })
            })
            .replace(/<%wrapper%>/gi, `${name}-wrapper`),
          function (err) {
            if (err) throw err;
            fs.closeSync(fd);
          })
      })
    }

    function checkExitsAndEmpty(file) {
      var stat = null;
      try {
        stat = fs.statSync(file);
      } catch (e) {
        return false;
      }
      return stat.isFile() && stat.size || stat.isDirectory();
    }

  }
}

module.exports = server
// 本地调试
if (process.env.debugger) {
  server.start()
}
