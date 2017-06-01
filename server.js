'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const requestProxy = require('express-request-proxy');
const PORT = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));

function proxyBarChart(request, response) {
  console.log(`Routing api call to BarChart for ${JSON.stringify(request.query)}`);
  (requestProxy({
    url: 'http://marketdata.websol.barchart.com/getHistory.json',
    query: Object.assign({ key: process.env.BARCHART_TOKEN }, request.query)
  }))(request, response);
}

function proxyNews(request, response) {
  console.log(`Routing api call to BarChart news for ${JSON.stringify(request.query)}`);
  (requestProxy({
    url: 'http://ondemand.websol.barchart.com/getNews.json',
    query: Object.assign({ apikey: process.env.BARCHART_TOKEN }, request.query)
  }))(request, response);
}

function proxySearch(request, response) {
  console.log(`Routing api call to BarChart news for ${JSON.stringify(request.query)}`);
  (requestProxy({
    url: 'http://ondemand.websol.barchart.com/getSymbolLookUp.json',
    query: Object.assign({ apikey: process.env.BARCHART_TOKEN }, request.query)
  }))(request, response);
}

app.get('/barChart', proxyBarChart);

app.get('/news', proxyNews);

app.get('/search', proxySearch);

app.get('*', (request, response) => response.sendFile('index.html', { root: './public' }));

app.listen(PORT, () => console.log(`Server started on localhost:${PORT}`));
