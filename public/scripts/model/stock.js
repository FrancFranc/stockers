'use strict';

var app = app || {};

(function(module) {
  const stock = {};

  stock.stockData = [];
  stock.ticker = '';

  stock.getStockInfo = (companyTicker, startDate, callback) => {
    stock.ticker = companyTicker;
    let params = {
      symbol: companyTicker,
      startDate: startDate,
      type: 'daily',
      interval: '1',
      exchange: 'NYSE,AMEX,NASDAQ',
    };

    $.ajax({ url: '/barChart', data: params, method: 'GET' })
      .then(data => stock.stockData = data)
      .then(callback);
  };

  module.stock = stock;
})(app);
