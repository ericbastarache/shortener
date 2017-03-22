const validUrl = require('valid-url');

exports.checkUrl = (url) => {
  return new Promise((resolve, reject) => {
    if(validUrl.isUri(url)) {
      resolve(true);
    } else {
      reject(false);
    }
  });
};
