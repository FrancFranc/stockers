'use strict';

var app = app || {};

(function(module) {
  const indexController = {};

  indexController.index = (event) => {
    let delay = 0;
    if(event.target) {
      event.preventDefault();
      delay = 1000;
    }
    $('#result, #about-us, #fav-button').hide(delay);
    $('#show-about').show(1000);
  };

  module.indexController = indexController;
})(app);
