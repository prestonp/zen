var Snippet = require('../models/snippet');
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
  res.render('view');
};

/*
 * GET /view/:id
 */
exports.view = function(req, res) {
  res.render('view');
};
