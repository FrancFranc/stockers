'use strict';

var app = app || {};

(function(module) {
  const search = {};

  search.searchResults = [];

  search.getSearchResults = (keyword, callback) => {
    let params = {
      keyword: keyword,
      limit: 4
    };

    $.ajax({ url: '/search', data: params, method: 'GET' })
      .then(data => search.searchResults = data)
      .then(callback);
  };

  module.search = search;
})(app);
