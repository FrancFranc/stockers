'use strict';



function getNews() {
  let params = {
    key: '',
    sources: 'AP,IF',
    symbols: 'AMZN'
  };

  $.ajax({ url: '/news', data: params, method: 'GET' })
  .then(data => console.log(data))
}

function searchCompany() {
  let params = {
    apikey: '',
    keyword: 'face'
  };

  $.ajax({ url: '/search', data: params, method: 'GET' })
  .then(data => console.log(data))
}
