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
  var pageDirPath = path.join(__dirname, '../../src/pages/')
  var componentDirPath = path.join(__dirname, '../../src/components/')
  var routePath = path.join(pageDirPath, 'routes.js');
  var comRoutePath = path.join(componentDirPath, 'routes.js');
  compiler.plugin("compile", function () {
    clearFileContent(routePath)
    clearFileContent(comRoutePath)
    walk(pageDirPath, routePath, 'pages')
    walk(componentDirPath, comRoutePath, 'components')
    console.log('\nroute create done')
  });

  function walk(filePath, routePath, type) {
    var fileList = fs.readdirSync(filePath);
    fileList.forEach(function (file) {
      var fileName = path.join(filePath, file)
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
        walk(fileName,routePath,type)
      }
    });
  }
};
function formatPath(path, type) {
  path = path.replace(/\\/gi, '/')
  var reg = new RegExp('^.*src\\/' + type, 'gi')
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
