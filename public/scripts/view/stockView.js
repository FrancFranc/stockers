'use strict';

var app = app || {};

(function(module) {
  const stockView = {};

  stockView.index = () => {
    renderComment();
    $('#company-name').text(app.searchView.searchedCompanyInfo);
    app.graph.createGraph();
  };

  module.stockView = stockView;
})(app);
