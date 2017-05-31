'use strict';

var app = app || {};

(function(module) {
  const searchView = {};

  searchView.index = () => {
    console.log(app.search.searchResults);
    $('#searchResults').html('');
    let x = $('#search').offset().left;
    let y = $('#search').offset().top;
    $('#searchResults').css('display', 'inline-block').css('left', x).css('top', y + $('#search').height());
    app.search.searchResults.results.forEach(result => {
      $('#searchResults').append(`${result.name} (${result.symbol})<br />`);
    });

  };

  module.searchView = searchView;
})(app);
