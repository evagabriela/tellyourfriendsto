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

function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

$(document).ready(function(){
  showRandomTell();

  $('.hashtag a').click(function(){ showRandomTell(); });

  // helper for debugging production
  if (getUrlVars()["show"]) {
    $(".tell").addClass("selected");
  }
});
