'use strict';

var app = app || {};

(function(module) {
  const searchView = {};

  searchView.index = () => {
    console.log(app.search.searchResults);
    $('#searchResults').html('');
    let x = $('#company').offset().left;
    let y = $('#company').offset().top;
    $('#searchResults').css('display', 'inline-block').css('left', x).css('top', y + $('#company').height());
    app.search.searchResults.results.forEach(result => {
      $('#searchResults').append(`<p>${result.name} (${result.symbol})</p>`);
    });
  };

  searchView.selectCompany = (event) => {
    $('#company').val(event.target.textContent);
  };

  module.searchView = searchView;
})(app);
