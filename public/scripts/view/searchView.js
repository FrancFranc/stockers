'use strict';

var app = app || {};

(function(module) {
  const stockView = {};

  stockView.index = () => {
    app.search.showResults();
  };

  module.stockView = stockView;
})(app);
