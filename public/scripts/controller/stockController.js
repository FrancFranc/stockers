'use strict';

var app = app || {};

(function(module) {
  const stockController = {};

  stockController.index = (event) => {
    if(event.target) {
      event.preventDefault();
      if($('#company').val() !== '') {
        page.show('/stockData');
        $('#comment-added').html('');
        if($('#favorites').css('display') === 'none') {
          $('#about-us').hide(1000);
        } else {
          $('#favorites, #about-us').hide(1000);
        }
        $('#result, #back-to-fav, #fav-button').show(1000);
        let ticker = event.target.form[0].value;
        app.stock.getStockInfo(ticker, date, app.stockView.index);
        app.newsController.index();
        // '' will trigger default start date and our default date is beginning of 2017
      }
    } else {
      page.show('/'); // there will be no event.target if it is just on page load, so go to index
    }
  };

  module.stockController = stockController;
})(app);
