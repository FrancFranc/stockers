'use strict';

var app = app || {};

(function(module) {
  const favorites = {};

  favorites.favoritesData = [];
  // favorites.ticker = '';

  favorites.getFavoritesInfo = (companyTicker, startDate, callback) => {
    favorites.ticker = companyTicker;
    let params = {
      symbol: companyTicker,
      startDate: startDate,
      maxRecords: 1,
      type: 'daily',
      interval: '1',
      exchange: 'NYSE,AMEX,NASDAQ',
    };
    $.ajax({ url: '/barChart', data: params, method: 'GET' })
      .then(data => favorites.favoritesData = data)
      .then(callback);
  };

  module.favorites = favorites;
})(app);
