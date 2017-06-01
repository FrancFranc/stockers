'use strict';

var app = app || {};

(function(module){
//Event Listener for "Search" button on homepage
  $(document).ready(function(){
    $('#result, #about-us, #fav-button').hide();
    $('#company').on('input', app.searchController.index);
    $('#graph-start-date').val('2017-01-01');

    $('#graph-start-date').on('change', app.graph.changeStartDate);
    $('#searchResults').on('click', 'p', app.searchView.selectCompany);

    $('#fav-button').on('click', app.indexController.index);

    $('#submit-search').on('click', app.stockController.index);
    renderFavorites();
  });

  // Handlebars for the data shown in table
  let source   = $('#table-template').html();
  let template = Handlebars.compile(source);
  // Event Listener for "Add to Favorites" button, so when user click on it, the selected stock will show on the table on front page.
  let favorites = [];

  function saveDataToLocalStorage(event) {
    event.preventDefault();
    // && localStorage.getItem('favorites').val
    if(localStorage.getItem('favorites')) {
      favorites = JSON.parse(localStorage.getItem('favorites'));
    }
    favorites.push(app.stock.ticker);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }

  $('#add-fav').on('click', saveDataToLocalStorage);

  $('#show-about').on('click',function(event){
    event.preventDefault();
    $('#result, #favorites, #show-about').hide(1000);
    $('#about-us, #fav-button').show(1000);
  });

  function renderFavorites(){
    var parsedFavs= JSON.parse(localStorage['favorites']);
    for (var i=0; i<parsedFavs; i++){
      let data = app.stock.getStockInfo(parsedFavs[i],'20170505', app.favoritesView.index);
      return data;
    }
  }

  function addComment(event) {
    event.preventDefault();
    let commentArray = [];
    let companyName = app.stockController.ticker;
    let comment = $('#comment-textarea').val();
    if (localStorage.getItem('comment')) {
      commentArray = JSON.parse(localStorage.getItem('comment'));
    }
    commentArray.push(comment);
    localStorage.setItem('comment', JSON.stringify(commentArray));
    $('#comment-textarea').empty();
  }
  // renderComment();

  $('#add-comment').on('click', addComment);
})(app);
