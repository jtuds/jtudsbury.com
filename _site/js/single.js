var getGif = function() {
    var gif = [];
    $('img').each(function() {
        var data = $(this).data('gif');
        gif.push(data);
    });
    return gif;
}
var gif = getGif();

var defaultButtonText = $('.portfolio__figure__gif-trigger').text();

$('.portfolio__figure__gif-trigger').on('click', function() {

  if ($('.portfolio__figure__gif-trigger').text() == "Stop GIF") {
    console.log("true");
    $('.portfolio__figure__gif-trigger').text(defaultButtonText);
  }
  else {
    console.log("false");
    $('.portfolio__figure__gif-trigger').text("Stop GIF");
  }
 
  var $this   = $(this),
          $index  = $this.index(),
           
          $img    = $this.siblings('img'),
          $imgSrc = $img.attr('src'),
          $imgAlt = $img.attr('data-gif'),
          $imgExt = $imgAlt.split('.');
           
  if($imgExt[1] === 'gif') {
      $img.attr('src', $img.data('gif')).attr('data-gif', $imgSrc);
  } else {
      $img.attr('src', $imgAlt).attr('data-gif', $img.data('gif'));
  }
 
});