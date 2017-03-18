let Url = require('../models/Url');

exports.index =  (req, res) => {
  res.redirect('/urls');
};

exports.all_urls = (req, res, next) => {
  res.send('NOT YET IMPLEMENTED: Retrieve URLS');
};

exports.create_url = (req, res, next) => {
  res.send('NOT YET IMPLEMENTED: Create URL');
};
