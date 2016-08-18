function applyWebmote(code, image) {
  var replace = "[" + code + "]"
  $("div:contains(" + replace + ")").html(function(_, html) {
      return html.replace(replace, "<img src='" + image + "'>");
  });
}

function applyWebmoteWithLink(code, image, link) {
  var replace = "[" + code + "]"
  $("div:contains(" + replace + ")").html(function(_, html) {
      return html.replace(replace, "<a href='" + link + "'><img src='" + image + "'></a>");
  });
} 
