'use strict';

var app = app || {};

(function(module) {
  const search = {};

  search.searchResults = [];

  search.getSearchResults = (keyword, callback) => {
    let params = {
      keyword: keyword
    };

    $.ajax({ url: '/search', data: params, method: 'GET' })
      .then(data => search.searchResults = data)
      .then(callback);
  };

  module.search = search;
})(app);
