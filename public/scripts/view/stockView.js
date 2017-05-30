'use strict';

var app = app || {};

(function(module) {
  const stockView = {};

  stockView.index = () => {
    app.graph.createGraph();
  };

  module.stockView = stockView;
})(app);
