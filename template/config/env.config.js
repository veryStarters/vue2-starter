module.exports = {
  dev: {
    autoApiMock: true,
    port: 8080,
    mockPort: 10082,
    env: {
      NODE_ENV: '"development"',
    },
    apiPath: 'http://dev.api.com/api/',
    assetsPublicPath: 'http://dev.static.com/'
  },
  beta: {
    env: {
      NODE_ENV: '"beta"',
    },
    apiPath: 'http://beta.api.com/api/',
    assetsPublicPath: 'http://beta.static.com/'
  },
  prod: {
    env: {
      NODE_ENV: '"production"',
    },
    apiPath: 'http://prod.api.com/api/',
    assetsPublicPath: '/'
  }
}