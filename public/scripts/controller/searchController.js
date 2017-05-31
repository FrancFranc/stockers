'use strict';

var app = app || {};

(function(module) {
  const searchController = {};

  searchController.index = keyword => {
    if(event.target.value.length > 2) {
      app.search.getSearchResults(event.target.value, app.searchView.index);
    } else {
      $('#searchResults').css('display', 'none');
    }
  };

  module.searchController = searchController;
})(app);
