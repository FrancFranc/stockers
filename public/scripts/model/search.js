'use strict';

var app = app || {};

(function(module) {
  const stock = {};

  stock.searchResults = [];

  stock.getSearchResults = (keyword) => {
    let params = {
      keyword: keyword
    };

    $.ajax({ url: '/search', data: params, method: 'GET' })
      .then(data => stock.searchResults = data)
      .then(callback);
  };

  module.stock = stock;
})(app);
