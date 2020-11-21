var ctx = document.getElementById('graf').getContext('2d');
var graf = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Grain','DairyProducts', 'Drinks', 'Sausages'],
        label: '# Cntidad Productos por categoria',
        datasets: [{
            label: '# Cantidad de productos por categoria  ',
            data: [90, 67, 20, 20,],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
    ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var ctx = document.getElementById('graf1').getContext('2d');
var graf1 = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Minimercado','Lolita', 'Mercaexpress', 'Don Pancho'],
        datasets: [{
            label: '#Products sold by supermarket   ',
            data: [60, 67, 20, 15,],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
    ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    }


});

var ctx = document.getElementById('graf3').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Week 1','Week 2', 'Week 3', 'Week 4'],
        datasets: [{
            label: '# pedidos realizados durante el mes ',
            data: [60, 67, 20, 15,],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
    ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var ctx = document.getElementById('graf4').getContext('2d');
var graf4 = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['January','February', 'March'],
        datasets: [{
            label: '# Sales of the month',
            data: [70, 30, 55],
            backgroundColor: [ '#623B5A','#55D6BE', '#CBEF43']
        }]
    },
     options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});     
   
