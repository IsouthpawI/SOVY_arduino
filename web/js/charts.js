(function ($) {
    "use strict";

    var xhttp = new XMLHttpRequest();


    let times = [];
    let cycling = [];
    let walking = [];
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // Action to be performed when the document is read;
            // console.log(xhttp.responseText);
            var json_data = JSON.parse(xhttp.responseText);
            times = json_data["times"];
            walking = json_data["day_walking"];
            cycling = json_data["day_cycling"];
            // Object.keys(json_data).forEach(function (key) {
            //     months.push(key.toString());
            //     stepsPerMonth.push(json_data[key]);
            //     console.log('Key : ' + key + ', Value : ' + json_data[key])
            // });
            var result = [];

            var ctx = document.getElementById("lineDaily"); // vlozenie grafu do id lineDaily
            ctx.height = 150;

            var myChart = new Chart(ctx, {
                type: 'line',
                //data pre graf
                data: {
                    // labels: ["00:00", "03:00", "06:00", "09:00", "12:00", "15:00", "18:00", "21:00", "24:00"],
                    labels: times,
                    datasets: [
                        {
                            label: "Cycling",
                            borderColor: "rgba(0, 194, 146, 0.9)",
                            borderWidth: "1",
                            backgroundColor: "rgba(0, 194, 146,0.1)",
                            // data: [70, 20, 47, 35, 43, 65, 45, 35, 50]
                            data: cycling
                        },
                        {
                            label: "Walking",
                            borderColor: "rgba(123,0,.09)",
                            borderWidth: "1",
                            backgroundColor: "rgba(193, 0, 0, 0.5)",
                            pointHighlightStroke: "rgba(26,179,148,1)",
                            // data: [16, 32, 18, 27, 42, 33, 44, 10, 5]
                            data: walking
                        }
                    ]
                },
                options: {
                    responsive: true,
                    tooltips: {
                        mode: 'index',
                        intersect: false
                    },
                    hover: {
                        mode: 'nearest',
                        intersect: true
                    }

                }
            });


        }
    };
    xhttp.open("GET", "https://my-json-server.typicode.com/oleksandra1musatkina/api/day", true);
    xhttp.send();

    //line chart


    let months = [];
    let stepsPerMonth = [];
    let xhttp2 = new XMLHttpRequest();

    xhttp2.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // Action to be performed when the document is read;
            console.log(xhttp.responseText);
            var json_data = JSON.parse(xhttp2.responseText);
            Object.keys(json_data).forEach(function (key) {
                months.push(key.toString());
                stepsPerMonth.push(json_data[key]);
                console.log('Key : ' + key + ', Value : ' + json_data[key])
            })
            var result = [];
            let arr = ["asd", "as"];
            arr.push("asd")
            console.log(months);
            console.log(stepsPerMonth);
            console.log(arr);
            var ctx = document.getElementById("lineYear");
            ctx.height = 150;
            var myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    // labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    // labels: arr,
                    labels: months,
                    datasets: [
                        {
                            label: "speps per month",
                            borderColor: "rgba(0, 194, 146, 0.9)",
                            borderWidth: "1",
                            backgroundColor: "rgba(0, 194, 146,0.1)",
                            // data: [20, 25, 15, 35, 43, 65, 45, 35, 50]
                            data: stepsPerMonth
                        },
                    ]
                },
                options: {
                    responsive: true,
                    tooltips: {
                        mode: 'index',
                        intersect: false
                    },
                    hover: {
                        mode: 'nearest',
                        intersect: true
                    }

                }
            });


        }
    };
    xhttp2.open("GET", "https://my-json-server.typicode.com/oleksandra1musatkina/api/graf", true);
    xhttp2.send();


    //doughut chart
    var ctx = document.getElementById("doughutSteps");
    ctx.height = 250;
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [850, 150],
                backgroundColor: [
                    "rgba(0, 194, 146,0.9)",
                    "rgba(194, 0, 0,0.7)",
                ],
                hoverBackgroundColor: [
                    "rgba(0, 194, 146,0.7)",
                    "rgba(194, 0, 0,0.7)",
                ]

            }],
            labels: [
                "Steps done",
                "Remaining steps"
            ]
        },
        options: {
            responsive: true
        }
    });


    //doughut chart
    var ctx = document.getElementById("doughutGoals");
    ctx.height = 250;
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [2, 4],
                backgroundColor: [
                    "rgba(0, 194, 146,0.9)",
                    "rgba(194, 0, 0,0.7)",
                ],
                hoverBackgroundColor: [
                    "rgba(0, 194, 146,0.7)",
                    "rgba(194, 0, 0,0.7)",
                ]

            }],
            labels: [
                "Completed goals",
                "Remaining goals"
            ]
        },
        options: {
            responsive: true
        }
    });

    //doughut chart
    var ctx = document.getElementById("doughutMinutes");
    ctx.height = 250;
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [16, 14],
                backgroundColor: [
                    "rgba(0, 194, 146,0.9)",
                    "rgba(194, 0, 0,0.7)",
                ],
                hoverBackgroundColor: [
                    "rgba(0, 194, 146,0.7)",
                    "rgba(194, 0, 0,0.7)",
                ]

            }],
            labels: [
                "Completed minutes",
                "Remaining minutes"
            ]
        },
        options: {
            responsive: true
        }
    });
    //doughut chart
    var ctx = document.getElementById("doughutChart1");
    ctx.height = 150;
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [35, 40, 20, 5],
                backgroundColor: [
                    "rgba(0, 194, 146,0.9)",
                    "rgba(0, 194, 146,0.7)",
                    "rgba(0, 194, 146,0.5)",
                    "rgba(0,0,0,0.07)"
                ],
                hoverBackgroundColor: [
                    "rgba(0, 194, 146,0.9)",
                    "rgba(0, 194, 146,0.7)",
                    "rgba(0, 194, 146,0.5)",
                    "rgba(0,0,0,0.07)"
                ]

            }],
            labels: [
                "green",
                "green",
                "green",
                "green"
            ]
        },
        options: {
            responsive: true
        }
    });
    //doughut chart
    var ctx = document.getElementById("doughutChart2");
    ctx.height = 150;
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [35, 40, 20, 5],
                backgroundColor: [
                    "rgba(0, 194, 146,0.9)",
                    "rgba(0, 194, 146,0.7)",
                    "rgba(0, 194, 146,0.5)",
                    "rgba(0,0,0,0.07)"
                ],
                hoverBackgroundColor: [
                    "rgba(0, 194, 146,0.9)",
                    "rgba(0, 194, 146,0.7)",
                    "rgba(0, 194, 146,0.5)",
                    "rgba(0,0,0,0.07)"
                ]

            }],
            labels: [
                "green",
                "green",
                "green",
                "green"
            ]
        },
        options: {
            responsive: true
        }
    });


})(jQuery);