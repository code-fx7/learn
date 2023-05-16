import Chart from 'chart.js/auto';

(async function() {

  new Chart(
    document.getElementById('acquisitions'),
    {
      type: 'bar',
      data: {
          datasets: [{
            label: 'Test label',
            data: [{x: '2016-15-25', y: 20}, {x: '2016-12-26', y: 10}],
          }],
      }
    }
  );
})();