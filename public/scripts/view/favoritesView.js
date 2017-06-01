'use strict';

var app = app || {};

(function(module) {
  const favoritesView = {};


  favoritesView.index = () => {
    let template = Handlebars.compile($('#table-template').text());
    $('#stock-favorites').append(template(app.favorites.favoritesData.results[0]));
  };

  module.favoritesView = favoritesView;
})(app);
