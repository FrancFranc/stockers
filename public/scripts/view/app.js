'use strict';

var app = app || {};

//Event Listener for "Search" button on homepage

$(document).ready(function(){
  $('#result #about-us').hide();

  $('#graph-start-date').on('change', app.graph.changeStartDate);

  $('#submit-search').on('click',function(event){
    event.preventDefault();
    page.show('/stockData');
    $('#favorites').hide(1000);
    $('#result').show(1000);
  });
});


// Handlebars for the data shown in table




// Hide section "Favourite Stocks" and show section "Stock Search Result"
