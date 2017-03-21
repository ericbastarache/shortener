const Url = require('../models/Url');
const base = require('../base/base');

exports.by_id = (req, res) => {
  Url.findOne({'shortUrl' : req.params.shortUrl }, (err, doc) => {
    if(err) {
      res.send(err);
    } else {
      res.redirect(doc.baseUrl);
    }
  });
}

exports.all_urls = (req, res) => {
  Url.find({}, (err, urls) => {
    if(err) {
      res.send(err);
    } else {
      res.send({urls});
    }
  });
};

exports.create_url = (req, res) => {
  let _url = req.body;
  let newUrl = Url({
    baseURL: _url.baseUrl,
    short: _url.shortUrl
  });

  newUrl.save((err) => {
    if(err) {
      res.send(err);
    } else {
      res.send(newUrl);
    }
  })
};
