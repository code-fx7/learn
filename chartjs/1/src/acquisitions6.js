import Chart from 'chart.js/auto';

(async function() {

  new Chart(
    document.getElementById('acquisitions'),
    {
      type: 'bar',
      data: {
          datasets: [{
            label: 'Test label',
            data: [{x: 'Sales', y: 20}, {x: 'Revenue', y: 10}],
          }],
      }
    }
  );
})();