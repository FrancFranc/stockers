'use strict';

var app = app || {};


(function (module){
  const graph = {};
  graph.closePrice = [];
  graph.labels = [];

  graph.createGraph = () => {
    let ctx = $('#stock-graph')[0].getContext('2d');
    graph.closePrice = []; // reset data arrays when changing date
    graph.labels = [];
    app.stock.stockData.results.forEach((dataPoint) => {
      graph.labels.push(dataPoint.tradingDay);
      graph.closePrice.push(dataPoint.close);
    });

    Chart.scaleService.updateScaleDefaults('linear', {
      ticks: {
        min: 0
      }
    });
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: graph.labels,
        datasets: [{
          data: graph.closePrice,
        }],
      },
      options: {
        responsive: false,
        maintainAspectRatio: true,
      }
      // options:options,
    });
  };

  graph.changeStartDate = () => {
    $('#stock-graph').replaceWith('<canvas id="stock-graph"></canvas>');
    app.stock.getStockInfo(app.stock.ticker, $('#graph-start-date').val(), app.stockView.index);
  };

  module.graph = graph;

})(app);
