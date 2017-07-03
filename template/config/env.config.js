/**
 * Created by Webstorm.
 * @author taoqili
 * @date 2017/7/3
 */
var configs = {
  development: {
    port: 8080,
    mockRunning: true,
    mockHost: 'http://localhost',
    mockPort: 10082,
    pathRewrite: {
      // '^/api': '/'
    },
    env: {
      NODE_ENV: '"development"',
    },
    assetsPublicPath: '/'
  },
  testing: {
    env: {
      NODE_ENV: '"testing"',
    },
    assetsPublicPath: 'http://beta.static.com/'
  },
  production: {
    env: {
      NODE_ENV: '"production"',
    },
    assetsPublicPath: 'http://prod.static.com/'
  }
}
module.exports = configs[process.env.NODE_ENV || 'development']