let Url = require('../models/Url');

exports.index = function (req, res) {
  res.send('Hello world');
};

exports.all_urls = function (req, res, next) {
  res.send('NOT YET IMPLEMENTED: List all URLs');
};

exports.create_url = function (req, res, next) {
  res.send('NOT YET IMPLEMENTED: Create URL');
};

/*exports.index = (req, res) => {
  res.send('Hello world');
};

exports.all_urls = (req, res, next) => {
  res.send('NOT YET IMPLEMENTED: List all URLs');
};

exports.create_url = (req, res, next) => {
  res.send('NOT YET IMPLEMENTED: Create URL');
};*/
