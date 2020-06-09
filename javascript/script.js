// main js file
function showRandomTell() {
  // make sure we reset all tells to hidden
  $(".tell").removeClass("selected");

  var selector = ".tell";

  // pick a tell at random, where max is the number of tells (within the scope)
  var max = $(selector).length;
  var random = Math.floor(Math.random()*max);

  $(selector).eq(random).addClass("selected");
}

$(document).ready(function(){
  showRandomTell();
});
