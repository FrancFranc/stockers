'use strict';

var app = app || {};

(function(module) {
  const news = {};

  news.newsResults = [];

  news.timeParser = (newsArticle) => {
    let dateNumbers = newsArticle.substring(0, newsArticle.indexOf('T'));
    let date = dateNumbers.split('-');
    return date[1]+'/'+date[2]+'/'+date[0];
  };


  news.getNewsResults = (companyTicker, callback) => {
    let params = {
      symbols: companyTicker,
      maxRecords: 5,
      sources: 'ZACKS,CMTX:SEC,CMTX:WALLST,PRNW',
      displayType: 'full'
    };

    $.ajax({ url: '/news', data: params, method: 'GET' })
      .then(data => news.newsResults = data)
      .then(callback);
  };
  module.news = news;
})(app);
