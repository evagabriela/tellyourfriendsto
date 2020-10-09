// main js file
function showRandomAction() {
  // make sure we reset all action cards to hidden
  $(".action-card").removeClass("selected");

  // optionally scope to specific hashtag if anchor present
  var hashtag = $(location).attr("hash");
  var selector = ".action-card" + hashtag.replace("#", ".");

  // pick a action card at random, where max is the number of action cards (within the scope)
  var max = $(selector).length;
  var random = Math.floor(Math.random() * max);

  $(selector)
    .eq(random)
    .addClass("selected");
}

function getUrlVars() {
  var vars = [],
    hash;
  var hashes = window.location.href
    .slice(window.location.href.indexOf("?") + 1)
    .split("&");
  for (var i = 0; i < hashes.length; i++) {
    hash = hashes[i].split("=");
    vars.push(hash[0]);
    vars[hash[0]] = hash[1];
  }
  return vars;
}

$(document).ready(function() {
  showRandomAction();

  $(".hashtag a").click(function() {
    showRandomAction();
  });

  // helper for debugging production
  if (getUrlVars()["show"]) {
    $(".action-card").addClass("selected");
  }
});
