let Url = require('../models/Url');
let base = require('../base/base');


exports.all_urls = (req, res, next) => {
  let shortId = req.params.url_id;
  let id = base.decode(shortId);

  Url.findOne({longId: id}, function (err, doc){
    if (doc) {
      res.redirect(doc.long_url);
    } else {
      res.redirect('localhost:3000');
    }
  });
};

exports.create_url = (req, res, next) => {
  var longUrl = req.body.url;
  var shortUrl = '';

  Url.findOne({long_url: longUrl}, function (err, doc){
    console.log(doc.long_url);
    return;
    if (doc){

      shortUrl = 'localhost:3000/' + base.encode(doc.longId);

      res.send({'shortUrl': shortUrl});
    } else {

      var newUrl = Url({
        long_url: longUrl
      });

      // save the new link
      newUrl.save((err) => {
        if (err){
          console.log(err);
        }

        shortUrl = 'localhost:3000/' + base.encode(newUrl.longId);

        res.send({'shortUrl': shortUrl});
      });
    }

  });
};
