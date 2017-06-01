'use strict';

var app = app || {};

(function(module) {
  const newsController = {};

  newsController.index = () => {
    console.log('in news controller');
    app.news.getNewsResults(app.stock.ticker, app.newsView.index);
  };

  module.newsController = newsController;
})(app);
