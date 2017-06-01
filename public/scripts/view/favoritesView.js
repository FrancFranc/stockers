'use strict';

var app = app || {};

(function(module) {
  const favoritesView = {};


  favoritesView.index = (data) => {
    let template = Handlebars.compile($('#table-template').text());
    $('stock-favorites').append(template(data));
  };

  module.favoritesView = favoritesView;
})(app);
