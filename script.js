console.log("Loaded script.js");
let request = new XMLHttpRequest();
request.open("GET", "https://api.covid19api.com/dayone/country/india", false);
request.send();
let parsed = JSON.parse(request.responseText);
let len = parsed.length
var array1 = [];
var array2 = [];
for (i = len - 31; i < len-1; i++) {
    array1.push(parsed[i].Date.slice(0,10))
    array2.push(parseInt(parsed[i+1].Confirmed) - parseInt(parsed[i].Confirmed))
}

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: array1,
        datasets: [{
            label: '# of Cases',
            data: array2,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});