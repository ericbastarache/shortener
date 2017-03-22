const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const shortId = require('shortId');

shortId.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@');

const urlSchema = new Schema({
  url: { type: String, unique: true, required: true },
  short: String,
  created_at: { type: Date, default: Date.now }
});

urlSchema.pre('save', function (next) {
  this.short = shortId.generate();
  next(this);
});

const Url = mongoose.model('Url', urlSchema);
module.exports = Url;
