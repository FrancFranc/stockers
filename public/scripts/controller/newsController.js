'use strict';

var app = app || {};

(function(module) {
  const newsController = {};

  newsController.index => {
    app.news.getNewsResults(keyword, callback);
    

    // if(event.target.value.length > 2) {
    //   app.news.getSearchResults(event.target.value, app.newsView.index);
    // } else {
    //   $('#newsResults').css('display', 'none');
    // }
  };

  module.searchController = searchController;
})(app);
