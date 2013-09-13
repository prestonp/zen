var
  mongoose = require('mongoose')
, shortId = require('shortid')
, Schema = mongoose.Schema;

// Use custom id generation
var options = {
  _id: false
};

var snippetSchema = new Schema({
  _id: { type: String, default: shortId.generate() }
, body:   String
, createdAt: { type: Date, default: Date.now }
}, options);

module.exports = mongoose.model('Snippet', snippetSchema);
