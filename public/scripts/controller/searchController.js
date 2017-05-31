'use strict';

var app = app || {};

(function(module) {
  const searchController = {};

  searchController.index = () => {
    app.search.getSearchResults(keyword, app.searchView.index);
  };

  module.stockController = stockController;
})(app);
