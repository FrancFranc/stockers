'use strict';

var app = app || {};

(function(module) {
  const newsView = {};

  newsView.index = () => {
    console.log(app.news.newsResults);
    let $news = $('#news-article').html('');
    let template = Handlebars.compile($('#news-template').text());
    app.news.newsResults.forEach(stat => {
      $news.append(template(stat)));
      $('#newsResults').append(`<p>${result.name} (${result.symbol})</p>`);
    });
  };

  module.newsView = newsView;
})(app);
