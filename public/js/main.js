;(function() {
  var $edit = $('.edit-container textarea')
    , $preview = $('.preview-container');

  $edit.keyup(function() {
    var text = $edit.val();
    $preview.html(marked(text));
  });
})();
