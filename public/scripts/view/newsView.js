'use strict';

var app = app || {};

(function(module) {
  const newsView = {};

  newsView.index = () => {
    let $news = $('#news');
    $news.html('');
    let template = Handlebars.compile($('#news-template').text());
    app.news.newsResults.results.forEach(article => {
      $news.append(template(article));
    });
  };
  module.newsView = newsView;
})(app);
