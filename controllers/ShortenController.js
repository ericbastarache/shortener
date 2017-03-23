const URL = require('../models/Url');
const base = require('../base/base');
const urlCheck = require('../urlValidator');

exports.get_id = (req, res) => {
  URL.findOne({
    short: req.params.url_id
  }).then(found => {
    if (found) {
      res.redirect(found.url);
    } else {
      res.json({
        error: 'No short link found for that url'
      });
    }
  }).catch(err => {
    console.log(err);
  });
};

exports.create_url = (req, res) => {
  const url = req.params.url;
  URL.findOne({
    url
  }).then(foundUrl => {
    if (foundUrl) {
      const foundUrlObj = {
        original_url: foundUrl.url,
        short_url: foundUrl.short
      };
      res.json(foundUrlObj);
    } else {
      urlCheck.checkUrl(url).then(() => {
        let createUrl = new URL({
          url
        });
        createUrl.save()
          .then(newUrl => {
            const newUrlObj = {
              original_url: newUrl.url,
              short_url: newUrl.short
            };
            res.json(newUrlObj);
          });
      }).catch(err => {
        res.json({
          error: 'Wrong url format'
        });
      });
    }
  });
};
