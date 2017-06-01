'use strict';

var app = app || {};

(function(module) {
  const stockView = {};

  stockView.index = () => {
    renderComment();
    app.graph.createGraph();
  };

  module.stockView = stockView;
})(app);
