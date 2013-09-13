/**
 * view page
 */
;(function() {
  // Cache dom elements
  var $snippet = $('.snippet-container')
    , $raw  = $('.raw-container textarea')
    , $toggleBtn = $('.btn-toggle')
    , raw = $snippet.text()
    , html = marked(raw)
    , snippetState = false;

  $snippet.html(html);
})();