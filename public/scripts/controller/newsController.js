'use strict';

var app = app || {};

(function(module) {
  const newsController = {};

  newsController.index = () => {
    app.news.getNewsResults(app.stock.ticker, app.newsView.index);
  };

  module.newsController = newsController;
})(app);
