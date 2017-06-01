'use strict';

var app = app || {};

(function(module) {
  const searchView = {};

  searchView.searchedCompanyInfo = '';

  searchView.index = () => {

    let results = app.search.searchResults.results;
    $('#searchResults').html('');
    if(results) {
      let x = $('#company').offset().left;
      let y = $('#company').offset().top;
      $('#searchResults').css('display', 'inline-block').css('left', x).css('top', y + $('#company').height()).append('<hr />');
      results.forEach(result => {
        $('#searchResults').append(`<p>${result.name} (${result.symbol})</p><hr />`);
      });
    }
  };

  searchView.selectCompany = (event) => {
    let ticker = event.target.textContent.split('(')[1].split(')')[0];
    $('#company').val(ticker);
    $('#searchResults').css('display', 'none');
    searchView.searchedCompanyInfo = event.target.textContent;
  };

  module.searchView = searchView;
})(app);
