'use strict';

var app = app || {};

(function(module) {
  const searchView = {};

  searchView.index = () => {
    console.log(app.search.searchResults);
  };

  module.searchView = searchView;
})(app);
