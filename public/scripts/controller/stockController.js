'use strict';

var app = app || {};

(function(module) {
  const stockController = {};

  stockController.index = () => {
    app.stock.getStockInfo('FB', app.stockView.index);
  };

  module.stockController = stockController;
})(app);
