// https://www.quandl.com/api/v3/datasets/WIKI/fb.json?start_date=" . $fromDate . "&end_date=" . $toDate . "&api_key=" . urlencode($_SESSION['QuandlAPIKey']);

'use strict';

var app = app || {};

(function(module) {
  const stock = {};

  stock.stockData = [];

  stock.getStockInfo = (companyTicker, callback) => {
    let params = {
      sources: 'AP,IF',
      symbols: companyTicker,
      category: 'stocks',
      maxRecords: 15,
      images: true
    };

    $.get(`/barChart/?sources=${params.sources}&symbols=${params.companyTicker}&category=${params.category}&maxRecords=${params.maxRecords}&images=${params.images}`)
      .then(data => stock.stockData = data, err => console.error(err))
      .then(callback);
  };

  module.stock = stock;
})(app);
