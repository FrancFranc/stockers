'use strict';

//Event Listener for "Search" button on homepage

$(document).ready(function(){
  $('#result').hide()
});
$('#submit-search').on('click',function(event){
  event.preventDefault();
  $('#favorites').hide(1000);
  $('#result').show(1000);
});


// Handlebars for the data shown in table




// Hide section "Favourite Stocks" and show section "Stock Search Result"
