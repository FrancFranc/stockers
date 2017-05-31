'use strict';

var app = app || {};

(function(module) {
  const news = {};

  news.newsResults = [];

  news.timeParser = (date) => {
    
  };

  news.getNewsResults = (keyword, callback) => {
    let params = {
      keyword: keyword
    };

    $.ajax({ url: '/news', data: params, method: 'GET' })
      .then(data => news.newsResults = data)
      .then(callback);
  };

  console.log(news.newsResults);
  module.news = news;
})(app);
