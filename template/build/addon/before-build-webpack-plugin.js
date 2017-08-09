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
    walk(dirPath)
    console.log('\nroute create done')
  });

  function walk(filePath) {
    var fileList = fs.readdirSync(filePath);
    fileList.forEach(function (file) {
      var fileName = path.join(filePath, file)
      if (fs.statSync(fileName).isFile()) {
        if (/index\.vue$/.test(fileName)) {
          var tmpPath = formatPath(fileName);
          var name = path2name(tmpPath);
          fs.appendFile(
            routePath,
            `export const ${name} = r => require(['../pages${tmpPath}'], r)\n`,
            function (err) {
              if (err) throw err;
            }
          );
        }
      } else if (fs.statSync(fileName).isDirectory()) {
        walk(fileName)
      }
    });
  }
};
function formatPath(path) {
  path = path.replace(/\\/gi, '/')
  var reg = new RegExp('^.*src\\/pages', 'gi')
  return path.replace(reg, '').replace('index.vue', '');
}

function path2name(path) {
  if (path === '/') {
    return 'index';
  }
  return path.toLowerCase().replace(/^\/|\/$/g, '').replace(/-|_/g,'').replace(/\/(.{1})/g, function (a, b) {
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
