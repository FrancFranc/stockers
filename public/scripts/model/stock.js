// https://www.quandl.com/api/v3/datasets/WIKI/fb.json?start_date=" . $fromDate . "&end_date=" . $toDate . "&api_key=" . urlencode($_SESSION['QuandlAPIKey']);

'use strict';

var app = app || {};

(function(module) {
  const stock = {};

  stock.stockData = [];

  stock.getStockInfo = (companyTicker, callback) => {
    let params = {
      symbol: companyTicker,
      type: 'minutes',
      interval: '60',
      exchange: 'NYSE,AMEX,NASDAQ',
      maxRecords: 25
    };

    $.ajax({ url: `/barChart`, data: params, method: 'GET' })
      .then(data => stock.stockData = data)
      .then(callback);
  };

  module.stock = stock;
})(app);
