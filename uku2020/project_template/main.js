const gridColors = ['#ba00f3', '#b35ded', '#a788e7', '#94ade1', '#75cfda', '#30efd2'];

if ($(document).width() > 800) {
  $('ul#grid li').css('background-color', function(i) {
    return gridColors[i];
  })
}