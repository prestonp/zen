var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var snippetSchema = new Schema({
  body:   String,
  createdAt: { type: Date, default: Date.now }
});

exports = mongoose.model('Snippet', snippetSchema);
