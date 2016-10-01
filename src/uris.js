import config from './config';
const base = 'http://localhost:3000';
console.log(config);

const uris = {
  base,
  resources: {
    images: {
      load: {
        url: base + '/apis/zenhack/images',
        method: 'GET'
      }
    },
    likes: {
      select: {
        url: base + '/apis/zenhack/likes',
        method: 'POST'
      }
    }
  },
  pages: {
    defaults: '/en',
    root: '/:lang',
    photos: '/:lang/photos'
  },

  // normalized functions
  normalize: (_uri, params) => {
    let uri = _uri;
    Object.keys(params).forEach(key =>
      uri = uri.replace(':' + key, encodeURIComponent(params[key]))
    );
    if (/\:/.test(uri) ) {
      throw new Error('Required params are remained [' + uri + ']');
    }
    return uri;
  }
};

export default uris;
