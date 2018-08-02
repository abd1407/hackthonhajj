$(function () {

    var lineData = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [

            {
                label: "Data 1",
                backgroundColor: '#129ebf',
                borderColor: "#0073a6",
                pointBackgroundColor: "rgba(26,179,148,1)",
                pointBorderColor: "#fff",
                data: [28, 48, 40, 19, 86, 27, 90]
            },{
                label: "Data 2",
                backgroundColor: '#bc9b5b',
                pointBorderColor: "#fff",
                data: [65, 59, 80, 81, 56, 55, 40]
            }
        ]
    };

    var lineOptions = {
        responsive: true
    };


    var ctx = document.getElementById("lineChart").getContext("2d");
    new Chart(ctx, {type: 'line', data: lineData, options:lineOptions});

    var barData = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "Data 1",
                backgroundColor: '#129ebf',
                pointBorderColor: "#fff",
                data: [65, 59, 80, 81, 56, 55, 40]
            },
            {
                label: "Data 2",
                backgroundColor: '#bc9b5b',
                borderColor: "#a88143",
                pointBackgroundColor: "rgba(26,179,148,1)",
                pointBorderColor: "#fff",
                data: [28, 48, 40, 19, 86, 27, 90]
            }
        ]
    };

    var barOptions = {
        responsive: true
    };


    var ctx2 = document.getElementById("barChart").getContext("2d");
    new Chart(ctx2, {type: 'bar', data: barData, options:barOptions});

    var polarData = {
        datasets: [{
            data: [
                300,140,200
            ],
            backgroundColor: [
                "#129ebf", "#edcc87", "#bc9b5b"
            ],
            label: [
                "My Radar chart"
            ]
        }],
        labels: [
            "App","Software","Laptop"
        ]
    };

    var polarOptions = {
        segmentStrokeWidth: 2,
        responsive: true

    };

    var ctx3 = document.getElementById("polarChart").getContext("2d");
    new Chart(ctx3, {type: 'polarArea', data: polarData, options:polarOptions});

    var doughnutData = {
        labels: ["App","Software","Laptop" ],
        datasets: [{
            data: [300,50,100],
            backgroundColor: ["#129ebf","#edcc87","#bc9b5b"]
        }]
    } ;


    var doughnutOptions = {
        responsive: true
    };


    var ctx4 = document.getElementById("doughnutChart").getContext("2d");
    new Chart(ctx4, {type: 'doughnut', data: doughnutData, options:doughnutOptions});


    var radarData = {
        labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
        datasets: [
            {
                label: "My First dataset",
                backgroundColor: "rgba(220,220,220,0.2)",
                borderColor: "rgba(220,220,220,1)",
                data: [65, 59, 90, 81, 56, 55, 40]
            },
            {
                label: "My Second dataset",
                backgroundColor: "rgba(188, 155, 91, 0.50)",
                borderColor: "#129ebf",
                data: [28, 48, 40, 19, 96, 27, 100]
            }
        ]
    };

    var radarOptions = {
        responsive: true
    };

    var ctx5 = document.getElementById("radarChart").getContext("2d");
    new Chart(ctx5, {type: 'radar', data: radarData, options:radarOptions});

});