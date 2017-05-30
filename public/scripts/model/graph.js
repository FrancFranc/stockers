'use strict';

var app = app || {};


(function (module){
  const graph = {};
  graph.closePrice =[];
  graph.labels = [];

  graph.createGraph = () => {
    let ctx = $('#stock-graph')[0].getContext('2d');
    app.stock.stockData.results.forEach((dataPoint) => {
      graph.labels.push(dataPoint.tradingDay);
      graph.closePrice.push(dataPoint.close);
    });
    console.log(graph.dataPoints);
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
          data:graph.closePrice,
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
      }
      // options:options,
    });

  };

  module.graph = graph;

})(app);
