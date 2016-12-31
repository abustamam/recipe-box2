require('babel-polyfill')

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development']

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT,
  app: {
    title: 'Rasheed Boilerplate',
    description: 'Boilerplate of modern best practices.',
    head: {
      titleTemplate: 'Rasheed Boilerplate: %s',
      meta: [
        {name: 'description', content: 'Boilerplate of modern best practices'},
        {charset: 'utf-8'},
        {property: 'og:site_name', content: 'Rasheed Boilerplate'},
        {property: 'og:image', content: 'https://react-redux.herokuapp.com/logo.jpg'},
        {property: 'og:locale', content: 'en_US'},
        {property: 'og:title', content: 'Rasheed Boilerplate'},
        {property: 'og:description', content: 'Boilerplate of modern best practices'},
        {property: 'og:card', content: 'summary'},
        {property: 'og:site', content: '@abustamam'},
        {property: 'og:creator', content: '@abustamam'},
        {property: 'og:image:width', content: '200'},
        {property: 'og:image:height', content: '200'}
      ]
    }
  },

}, environment)
