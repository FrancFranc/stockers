'use strict';

var app = app || {};

page('/', app.indexController.index);
page('/stockData', app.stockController.index);


page();
