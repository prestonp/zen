/**
 * Zen mode markdown paste app
 */
;(function() {
  // Cache dom elements
  var $edit = $('.edit-container textarea')
    , $preview = $('.preview-container')
    , previewPlaceholder = '<p class="text-muted">Snippet Preview</p>';

  // Smooth css animation by appending newlines
  $edit.autosize({append: "\n"});

  // Parse markdown on key input
  $edit.keyup(function() {
    var text = $edit.val();
    $preview.html(marked(text) || previewPlaceholder);
  });
})();