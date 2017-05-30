'use strict';

var app = app || {};

(function(module) {
  const stockView = {};

  stockView.index = () => {
    console.log(app.stock.stockData);
  };

  module.stockView = stockView;
})(app);
