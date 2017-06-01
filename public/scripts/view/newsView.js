'use strict';

var app = app || {};

(function(module) {
  const newsView = {};

  newsView.index = () => {
    console.log(app.news.newsResults);
    let $news = $('#news');
    $news.html('');
    let template = Handlebars.compile($('#news-template').text());
    app.news.newsResults.forEach(article => {
      $news.append(template(article));
    }
  );
  console.log('inside newsView.index');
  }
  module.newsView = newsView;
})(app);
