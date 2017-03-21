let Url = require('../models/Url');
let base = require('../base/base');


exports.all_urls = (req, res, next) => {
  let shortId = req.params.url_id;
  let id = base.decode(shortId);

  Url.findOne({_id: id}, function (err, doc){
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

  // check if url already exists in database
  Url.findOne({long_url: longUrl}, function (err, doc){
    if (doc){

      shortUrl = 'localhost:3000/' + base.encode(doc.longId);

      // the document exists, so we return it without creating a new entry
      res.send({'shortUrl': shortUrl});
    } else {
      // since it doesn't exist, let's go ahead and create it:
      var newUrl = Url({
        long_url: longUrl
      });

      // save the new link
      newUrl.save(function(err) {
        if (err){
          console.log(err);
        }

        shortUrl = 'localhost:3000/' + base.encode(newUrl.longId);

        res.send({'shortUrl': shortUrl});
      });
    }

  });
};
