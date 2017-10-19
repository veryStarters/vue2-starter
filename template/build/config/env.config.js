/**
 * Created by Webstorm.
 * @author taoqili
 * @date 2017/7/3
 */
const CONFIG = {
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
    }
  },
  test: {
    env: {
      NODE_ENV: '"test"',
    }
  },
  pre: {
    env: {
      NODE_ENV: '"pre"'
    }
  },
  production: {
    env: {
      NODE_ENV: '"production"',
    }
  }
}
module.exports = CONFIG[process.env.NODE_ENV || 'development']