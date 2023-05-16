import Chart from 'chart.js/auto';

(async function() {

  new Chart(
    document.getElementById('acquisitions'),
    {
      type: 'bar',
      data: {
          datasets: [{
            label: 'Test label',
            data: [{x: 10, y: 20}, {x: 15, y: null}, {x: 20, y: 10}],
          }],
      }
    }
  );
})();