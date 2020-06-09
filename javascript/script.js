// main js file
function showRandomTell() {
  // make sure we reset all tells to hidden
  $(".tell").removeClass("selected");

  // optionally scope to specific hashtag if anchor present
  var hashtag = $(location).attr('hash');
  var selector = ".tell" + hashtag.replace("#", ".");

  // pick a tell at random, where max is the number of tells (within the scope)
  var max = $(selector).length;
  var random = Math.floor(Math.random()*max);

  $(selector).eq(random).addClass("selected");
}

$(document).ready(function(){
  showRandomTell();
});
