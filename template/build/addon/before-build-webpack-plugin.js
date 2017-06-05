/**
 * Created by Webstorm.
 * @author taoqili
 * @date 2017/6/5
 */
var fs = require('fs')
var path = require('path')
function BeforeBuildPlugin() {
}
BeforeBuildPlugin.prototype.apply = function (compiler) {
  var dirPath = path.join(__dirname, '../../src/pages/')
  var routePath = path.join(dirPath, 'routes.js');
  compiler.plugin("compile", function () {
    clearFileContent(routePath)
    walk(dirPath, 'pages')
    console.log('\nroute create done')
  });

  function walk(filePath, type) {
    var list = fs.readdirSync(filePath);
    list.forEach(function (item) {
      var fileName = path.join(filePath, item)
      if (fs.statSync(fileName).isFile()) {
        if (/index\.vue$/.test(fileName)) {
          var tmpPath = formatPath(fileName, type);
          var name = path2name(tmpPath);
          fs.appendFile(
            routePath,
            `export const ${name} = r => require(['../${type}${tmpPath}'], r)\n`,
            function (err) {
              if (err) throw err;
            }
          );
        }
      } else if (fs.statSync(fileName).isDirectory()) {
        walk(fileName, type)
      }
    });
  }
};
function formatPath(path, type) {
  var reg = new RegExp('^.*src\\/' + type, 'gi')
  return path.replace(reg, '').replace('index.vue', '');
}

function path2name(path) {
  if (path === '/') {
    return 'index';
  }
  return path.replace(/^\/|\/$/g, '').replace(/\/(.{1})/g, function (a, b) {
    return b.toUpperCase();
  })
}
function clearFileContent(path) {
  fs.writeFile(
    path,
    '',
    function (err) {
      if (err) throw err;
    })
}


module.exports = BeforeBuildPlugin;