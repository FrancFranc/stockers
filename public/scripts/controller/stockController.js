'use strict';

var app = app || {};

(function(module) {
  const stockController = {};

  stockController.index = () => {
    app.stock.getStockInfo('FB', '20160925', '20161120', app.stockView.index);
  };

  module.stockController = stockController;
})(app);
