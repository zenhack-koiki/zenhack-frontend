require('babel-polyfill');

const title = 'spot4u';
const description = 'spot4u';

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: Number( process.env.PORT || 3000 ),
  api: {
    host: '52.197.202.44',
    port: 80
  },
  app: {
    host: process.env.APP_HOST || 'localhost',
    port: Number( process.env.APP_PORT || 3000 ),
    title: title,
    description: description,
    head: {
      titleTemplate: title + ' - %s',
      meta: [
        {name: 'description', content: description},
        {charset: 'utf-8'},
        {property: 'og:site_name', content: title},
        {property: 'og:image', content: 'https://avatars1.githubusercontent.com/u/22523721?v=3&s=200'},
        {property: 'og:locale', content: 'en_US'},
        {property: 'og:title', content: title},
        {property: 'og:description', content: description},
        {property: 'og:card', content: 'summary'},
        {property: 'og:site', content: '@side_road'},
        {property: 'og:creator', content: '@side_road'},
        {property: 'og:image:width', content: '300'},
        {property: 'og:image:height', content: '300'}
      ]
    }
  }
}, environment);
