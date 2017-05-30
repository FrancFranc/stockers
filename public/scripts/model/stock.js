// https://www.quandl.com/api/v3/datasets/WIKI/fb.json?start_date=" . $fromDate . "&end_date=" . $toDate . "&api_key=" . urlencode($_SESSION['QuandlAPIKey']);

'use strict';

var app = app || {};

(function(module) {
  const stock = {};

  stock.stockData = [];

  stock.getStockInfo = (companyTicker, callback) => {
    let params = {
      startDate: '20160925',
      endDate: '20161120',
      symbol: companyTicker,
      type: 'daily',
      interval: '1',
      volume: 'total',
      exchange: 'NYSE,AMEX,NASDAQ',
    };

    $.ajax({ url: `/barChart`, data: params, method: 'GET' })
      .then(data => stock.stockData = data)
      .then(callback);
  };

  module.stock = stock;
})(app);
