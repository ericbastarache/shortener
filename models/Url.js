let Url = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  link: String,
  token: String
});

module.exports = mongoose.model('Url', Url);
