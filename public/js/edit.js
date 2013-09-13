/**
 * edit page
 */
;(function() {
  // Cache dom elements
  var $edit = $('.edit-container textarea')
    , $preview = $('.preview-container')
    , previewPlaceholder = '<p class="text-muted">Snippet Preview</p>';

  // Parse markdown on key input
  var parseText = function() {
    var text = $edit.val();
    $preview.html(marked(text) || previewPlaceholder);
  };

  $edit.keyup(parseText);

  // Smooth css animation by appending newlines
  $edit.autosize({append: "\n"});

  // Parse in case history(-1)
  parseText();
})();