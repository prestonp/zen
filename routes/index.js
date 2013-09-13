var Snippet = require('../models/snippet')
  , shortId = require('shortid');
/*
 * GET /
 */
exports.edit = function(req, res) {
  res.render('edit');
};

/*
 * POST /
 */
exports.create = function(req, res) {
  var snippet = new Snippet({ _id: shortId.generate(), body: req.body.txt });
  snippet.save(function saveCb(err) {
    if (err) return res.render('error', { error: err, msg: 'couldn\'t save your snippet, try again!'});
    return res.redirect('/' + snippet._id);
  });
};

/*
 * GET /:id
 */
exports.view = function(req, res) {
  Snippet.findOne({_id: req.params.id}, function findOneCb(err, s) {
    if (err || !s) return res.render('error', { error: err, msg: 'couldn\'t find that snippet, sorry bro' });
    return res.render('view', { snippet: s});
  });
};
