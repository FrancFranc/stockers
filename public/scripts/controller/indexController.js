'use strict';

var app = app || {};

(function(module) {
  const indexController = {};

  indexController.index = () => {
    console.log('indexController');
  };

  module.indexController = indexController;
})(app);
