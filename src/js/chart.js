import helper from "./helper";
import { helpers } from "chart.js";
import {Chart} from 'chart.js'

const cash = (function (cash) {
    "use strict";

    // Chart
    if (cash("#report-line-Chart").length) {
        let ctx = cash("#report-line-Chart")[0].getContext("2d");
        let myChart = new Chart(ctx, {
            type: "line",
            data: {
                labels: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                ],
                datasets: [
                    {
                        label: "# of Votes",
                        data: [
                            0,
                            200,
                            250,
                            200,
                            500,
                            450,
                            850,
                            1050,
                            950,
                            1100,
                            900,
                            1200,
                        ],
                        borderWidth: 2,
                        borderColor: "#203f90",
                        backgroundColor: "transparent",
                        pointBorderColor: "transparent",
                    },
                    {
                        label: "# of Votes",
                        data: [
                            0,
                            300,
                            400,
                            560,
                            320,
                            600,
                            720,
                            850,
                            690,
                            805,
                            1200,
                            1010,
                        ],
                        borderWidth: 2,
                        borderDash: [2, 2],
                        borderColor: "#a0afbf",
                        backgroundColor: "transparent",
                        pointBorderColor: "transparent",
                    },
                ],
            },
            options: {
                legend: {
                    display: false,
                },
                scales: {
                    xAxes: [
                        {
                            ticks: {
                                fontSize: "12",
                                fontColor: cash("html").hasClass("dark")
                                    ? "#718096"
                                    : "#777777",
                            },
                            gridLines: {
                                display: false,
                            },
                        },
                    ],
                    yAxes: [
                        {
                            ticks: {
                                fontSize: "12",
                                fontColor: cash("html").hasClass("dark")
                                    ? "#718096"
                                    : "#777777",
                                callback: function (value, index, values) {
                                    return "$" + value;
                                },
                            },
                            gridLines: {
                                color: cash("html").hasClass("dark")
                                    ? "#718096"
                                    : "#D8D8D8",
                                zeroLineColor: cash("html").hasClass("dark")
                                    ? "#718096"
                                    : "#D8D8D8",
                                borderDash: [2, 2],
                                zeroLineBorderDash: [2, 2],
                                drawBorder: false,
                            },
                        },
                    ],
                },
            },
        });
    }

    if (cash("#report-pie-Chart").length) {
        let ctx = cash("#report-pie-Chart")[0].getContext("2d");
        let myPieChart = new Chart(ctx, {
            type: "pie",
            data: {
                labels: ["Yellow", "Dark"],
                datasets: [
                    {
                        data: [15, 10, 65],
                        backgroundColor: ["#2BB6D0", "#E63b1f", "#203f90"],
                        hoverBackgroundColor: ["#2BB6D0", "#E63b1f", "#203f90"],
                        borderWidth: 5,
                        borderColor: cash("html").hasClass("dark")
                            ? "#303953"
                            : "#fff",
                    },
                ],
            },
            options: {
                legend: {
                    display: false,
                },
            },
        });
    }

    if (cash("#report-donut-Chart").length) {
        let ctx = cash("#report-donut-Chart")[0].getContext("2d");
        let myDoughnutChart = new Chart(ctx, {
            type: "doughnut",
            data: {
                labels: ["Yellow", "Dark"],
                datasets: [
                    {
                        data: [15, 10, 65],
                        backgroundColor: ["#2BB6D0", "#E63b1f", "#203f90"],
                        hoverBackgroundColor: ["#2BB6D0", "#E63b1f", "#203f90"],
                        borderWidth: 5,
                        borderColor: cash("html").hasClass("dark")
                            ? "#303953"
                            : "#fff",
                    },
                ],
            },
            options: {
                legend: {
                    display: false,
                },
                cutoutPercentage: 80,
            },
        });
    }

    if (cash("#report-bar-Chart").length) {
        // Fake visitor data
        let reportBarChartData = new Array(40).fill(0).map((data, key) => {
            if (key % 3 == 0 || key % 5 == 0) {
                return Math.ceil(Math.random() * (0 - 20) + 20);
            } else {
                return Math.ceil(Math.random() * (0 - 7) + 7);
            }
        });

        // Fake visitor bar color
        let reportBarChartColor = reportBarChartData.map((data) => {
            if (data >= 8 && data <= 14) {
                return "#1c3faaa6";
            } else if (data >= 15) {
                return "#1C3FAA";
            }

            return "#1c3faa59";
        });

        let ctx = cash("#report-bar-Chart")[0].getContext("2d");
        let myBarChart = new Chart(ctx, {
            type: "bar",
            data: {
                labels: reportBarChartData,
                datasets: [
                    {
                        label: "Html Template",
                        barPercentage: 0.5,
                        barThickness: 6,
                        maxBarThickness: 8,
                        minBarLength: 2,
                        data: reportBarChartData,
                        backgroundColor: reportBarChartColor,
                    },
                ],
            },
            options: {
                legend: {
                    display: false,
                },
                scales: {
                    xAxes: [
                        {
                            ticks: {
                                display: false,
                            },
                            gridLines: {
                                display: false,
                            },
                        },
                    ],
                    yAxes: [
                        {
                            ticks: {
                                display: false,
                            },
                            gridLines: {
                                display: false,
                            },
                        },
                    ],
                },
            },
        });

        setInterval(() => {
            // Swap visitor data
            let newData = reportBarChartData[0];
            reportBarChartData.shift();
            reportBarChartData.push(newData);

            // Swap visitor bar color
            let newColor = reportBarChartColor[0];
            reportBarChartColor.shift();
            reportBarChartColor.push(newColor);

            myBarChart.update();
        }, 1000);
    }

    if (cash("#report-bar-Chart-1").length) {
        let ctx = cash("#report-bar-Chart-1")[0].getContext("2d");
        let myChart = new Chart(ctx, {
            type: "bar",
            data: {
                labels: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                ],
                datasets: [
                    {
                        label: "Html Template",
                        borderWidth: 2,
                        borderColor: "transparent",
                        barPercentage: 0.5,
                        barThickness: 8,
                        maxBarThickness: 6.5,
                        minBarLength: 2,
                        data: [
                            60,
                            150,
                            30,
                            200,
                            180,
                            50,
                            180,
                            120,
                            230,
                            180,
                            250,
                            270,
                        ],
                        backgroundColor: "#1c3faa",
                    },
                    {
                        label: "VueJs Template",
                        borderWidth: 2,
                        borderColor: "transparent",
                        barPercentage: 0.5,
                        barThickness: 8,
                        maxBarThickness: 6.5,
                        minBarLength: 2,
                        data: [
                            50,
                            135,
                            40,
                            180,
                            190,
                            60,
                            150,
                            90,
                            250,
                            170,
                            240,
                            250,
                        ],
                        backgroundColor: cash("html").hasClass("dark")
                            ? "#303a53"
                            : "#ccd7e2",
                    },
                ],
            },
            options: {
                legend: {
                    display: false,
                },
                scales: {
                    xAxes: [
                        {
                            ticks: {
                                fontSize: 11,
                                fontColor: "#718096",
                            },
                            gridLines: {
                                display: false,
                            },
                        },
                    ],
                    yAxes: [
                        {
                            ticks: {
                                display: false,
                            },
                            gridLines: {
                                color: "#D8D8D8",
                                zeroLineColor: "#D8D8D8",
                                borderDash: [2, 2],
                                zeroLineBorderDash: [2, 2],
                                drawBorder: false,
                            },
                        },
                    ],
                },
            },
        });
    }

    if (cash("#report-donut-Chart-1").length) {
        let ctx = cash("#report-donut-Chart-1")[0].getContext("2d");
        let myDoughnutChart = new Chart(ctx, {
            type: "doughnut",
            data: {
                labels: ["Yellow", "Dark"],
                datasets: [
                    {
                        data: [15, 10, 65],
                        backgroundColor: ["#2BB6D0", "#E63b1f", "#203f90"],
                        hoverBackgroundColor: ["#2BB6D0", "#E63b1f", "#203f90"],
                        borderWidth: 2,
                        borderColor: cash("html").hasClass("dark")
                            ? "#303953"
                            : "#fff",
                    },
                ],
            },
            options: {
                legend: {
                    display: false,
                },
                cutoutPercentage: 83,
            },
        });
    }

    if (cash("#report-donut-Chart-2").length) {
        let ctx = cash("#report-donut-Chart-2")[0].getContext("2d");
        let myDoughnutChart = new Chart(ctx, {
            type: "doughnut",
            data: {
                labels: ["Yellow", "Dark"],
                datasets: [
                    {
                        data: [15, 10, 65],
                        backgroundColor: ["#2BB6D0", "#E63b1f", "#203f90"],
                        hoverBackgroundColor: ["#2BB6D0", "#E63b1f", "#203f90"],
                        borderWidth: 2,
                        borderColor: cash("html").hasClass("dark")
                            ? "#303953"
                            : "#fff",
                    },
                ],
            },
            options: {
                legend: {
                    display: false,
                },
                cutoutPercentage: 83,
            },
        });
    }

    if (cash("#report-donut-Chart-3").length) {
        let ctx = cash("#report-donut-Chart-3")[0].getContext("2d");
        let myDoughnutChart = new Chart(ctx, {
            type: "doughnut",
            data: {
                labels: ["Yellow", "Dark"],
                datasets: [
                    {
                        data: [15, 10, 65],
                        backgroundColor: ["#2BB6D0", "#E63b1f", "#203f90"],
                        hoverBackgroundColor: ["#2BB6D0", "#E63b1f", "#203f90"],
                        borderWidth: 5,
                        borderColor: cash("html").hasClass("dark")
                            ? "#303953"
                            : "#e3eaf2",
                    },
                ],
            },
            options: {
                legend: {
                    display: false,
                },
                cutoutPercentage: 82,
            },
        });
    }

    if (cash(".simple-line-Chart-1").length) {
        cash(".simple-line-Chart-1").each(function () {
            let ctx = cash(this)[0].getContext("2d");
            let myChart = new Chart(ctx, {
                type: "line",
                data: {
                    labels: [
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                        "Oct",
                        "Nov",
                        "Dec",
                    ],
                    datasets: [
                        {
                            label: "# of Votes",
                            data:
                                cash(this).data("random") !== undefined
                                    ? helper.randomNumbers(0, 5, 12)
                                    : [
                                          0,
                                          200,
                                          250,
                                          200,
                                          500,
                                          450,
                                          850,
                                          1050,
                                          950,
                                          1100,
                                          900,
                                          1200,
                                      ],
                            borderWidth: 2,
                            borderColor:
                                cash(this).data("line-color") !== undefined
                                    ? cash(this).data("line-color")
                                    : "#203f90",
                            backgroundColor: "transparent",
                            pointBorderColor: "transparent",
                        },
                    ],
                },
                options: {
                    legend: {
                        display: false,
                    },
                    scales: {
                        xAxes: [
                            {
                                ticks: {
                                    display: false,
                                },
                                gridLines: {
                                    display: false,
                                },
                            },
                        ],
                        yAxes: [
                            {
                                ticks: {
                                    display: false,
                                },
                                gridLines: {
                                    display: false,
                                },
                            },
                        ],
                    },
                },
            });
        });
    }

    if (cash(".simple-line-Chart-2").length) {
        cash(".simple-line-Chart-2").each(function () {
            let ctx = cash(this)[0].getContext("2d");
            let myChart = new Chart(ctx, {
                type: "line",
                data: {
                    labels: [
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                        "Oct",
                        "Nov",
                        "Dec",
                    ],
                    datasets: [
                        {
                            label: "# of Votes",
                            data:
                                cash(this).data("random") !== undefined
                                    ? helper.randomNumbers(0, 5, 12)
                                    : [
                                          0,
                                          300,
                                          400,
                                          560,
                                          320,
                                          600,
                                          720,
                                          850,
                                          690,
                                          805,
                                          1200,
                                          1010,
                                      ],
                            borderWidth: 2,
                            borderDash: [2, 2],
                            borderColor:
                                cash(this).data("line-color") !== undefined
                                    ? cash(this).data("line-color")
                                    : "#cbd5e0",
                            backgroundColor: "transparent",
                            pointBorderColor: "transparent",
                        },
                    ],
                },
                options: {
                    maintainAspectRatio: false,
                    legend: {
                        display: false,
                    },
                    scales: {
                        xAxes: [
                            {
                                ticks: {
                                    display: false,
                                },
                                gridLines: {
                                    display: false,
                                },
                            },
                        ],
                        yAxes: [
                            {
                                ticks: {
                                    display: false,
                                },
                                gridLines: {
                                    display: false,
                                },
                            },
                        ],
                    },
                },
            });
        });
    }

    if (cash(".simple-line-Chart-3").length) {
        let ctx = cash(".simple-line-Chart-3")[0].getContext("2d");
        let myChart = new Chart(ctx, {
            type: "line",
            data: {
                labels: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                ],
                datasets: [
                    {
                        label: "# of Votes",
                        data: [
                            0,
                            200,
                            250,
                            200,
                            500,
                            450,
                            850,
                            1050,
                            950,
                            1100,
                            900,
                            1200,
                        ],
                        borderWidth: 2,
                        borderColor: "#1c3faa",
                        backgroundColor: "transparent",
                        pointBorderColor: "transparent",
                    },
                    {
                        label: "# of Votes",
                        data: [
                            0,
                            300,
                            400,
                            560,
                            320,
                            600,
                            720,
                            850,
                            690,
                            805,
                            1200,
                            1010,
                        ],
                        borderWidth: 2,
                        borderDash: [2, 2],
                        borderColor: "#98a8b9",
                        backgroundColor: "transparent",
                        pointBorderColor: "transparent",
                    },
                ],
            },
            options: {
                legend: {
                    display: false,
                },
                scales: {
                    xAxes: [
                        {
                            ticks: {
                                display: false,
                            },
                            gridLines: {
                                display: false,
                            },
                        },
                    ],
                    yAxes: [
                        {
                            ticks: {
                                display: false,
                            },
                            gridLines: {
                                display: false,
                            },
                        },
                    ],
                },
            },
        });
    }

    if (cash(".simple-line-Chart-4").length) {
        let ctx = cash(".simple-line-Chart-4")[0].getContext("2d");
        let myChart = new Chart(ctx, {
            type: "line",
            data: {
                labels: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                ],
                datasets: [
                    {
                        label: "# of Votes",
                        data: [
                            0,
                            200,
                            250,
                            200,
                            500,
                            450,
                            850,
                            1050,
                            950,
                            1100,
                            900,
                            1200,
                        ],
                        borderWidth: 2,
                        borderColor: "#1c3faa",
                        backgroundColor: "transparent",
                        pointBorderColor: "transparent",
                    },
                    {
                        label: "# of Votes",
                        data: [
                            0,
                            300,
                            400,
                            560,
                            320,
                            600,
                            720,
                            850,
                            690,
                            805,
                            1200,
                            1010,
                        ],
                        borderWidth: 2,
                        borderDash: [2, 2],
                        borderColor: "#98a8b9",
                        backgroundColor: "transparent",
                        pointBorderColor: "transparent",
                    },
                ],
            },
            options: {
                legend: {
                    display: false,
                },
                scales: {
                    xAxes: [
                        {
                            ticks: {
                                display: false,
                            },
                            gridLines: {
                                display: false,
                            },
                        },
                    ],
                    yAxes: [
                        {
                            ticks: {
                                display: false,
                            },
                            gridLines: {
                                display: false,
                            },
                        },
                    ],
                },
            },
        });
    }

    // Chart widget page
    if (cash("#vertical-bar-Chart-widget").length) {
        let ctx = cash("#vertical-bar-Chart-widget")[0].getContext("2d");
        let myChart = new Chart(ctx, {
            type: "bar",
            data: {
                labels: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                ],
                datasets: [
                    {
                        label: "Html Template",
                        barPercentage: 0.5,
                        barThickness: 6,
                        maxBarThickness: 8,
                        minBarLength: 2,
                        data: [0, 200, 250, 200, 500, 450, 850, 1050],
                        backgroundColor: "#203f90",
                    },
                    {
                        label: "VueJs Template",
                        barPercentage: 0.5,
                        barThickness: 6,
                        maxBarThickness: 8,
                        minBarLength: 2,
                        data: [0, 300, 400, 560, 320, 600, 720, 850],
                        backgroundColor: "#cbd5e0",
                    },
                ],
            },
            options: {
                scales: {
                    xAxes: [
                        {
                            ticks: {
                                fontSize: "12",
                                fontColor: "#777777",
                            },
                            gridLines: {
                                display: false,
                            },
                        },
                    ],
                    yAxes: [
                        {
                            ticks: {
                                fontSize: "12",
                                fontColor: "#777777",
                                callback: function (value, index, values) {
                                    return "$" + value;
                                },
                            },
                            gridLines: {
                                color: "#D8D8D8",
                                zeroLineColor: "#D8D8D8",
                                borderDash: [2, 2],
                                zeroLineBorderDash: [2, 2],
                                drawBorder: false,
                            },
                        },
                    ],
                },
            },
        });
    }

    if (cash("#horizontal-bar-Chart-widget").length) {
        let ctx = cash("#horizontal-bar-Chart-widget")[0].getContext("2d");
        let myChart = new Chart(ctx, {
            type: "horizontalBar",
            data: {
                labels: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                ],
                datasets: [
                    {
                        label: "Html Template",
                        barPercentage: 0.5,
                        barThickness: 6,
                        maxBarThickness: 8,
                        minBarLength: 2,
                        data: [0, 200, 250, 200, 500, 450, 850, 1050],
                        backgroundColor: "#203f90",
                    },
                    {
                        label: "VueJs Template",
                        barPercentage: 0.5,
                        barThickness: 6,
                        maxBarThickness: 8,
                        minBarLength: 2,
                        data: [0, 300, 400, 560, 320, 600, 720, 850],
                        backgroundColor: "#cbd5e0",
                    },
                ],
            },
            options: {
                scales: {
                    xAxes: [
                        {
                            ticks: {
                                fontSize: "12",
                                fontColor: "#777777",
                                callback: function (value, index, values) {
                                    return "$" + value;
                                },
                            },
                            gridLines: {
                                display: false,
                            },
                        },
                    ],
                    yAxes: [
                        {
                            ticks: {
                                fontSize: "12",
                                fontColor: "#777777",
                            },
                            gridLines: {
                                color: "#D8D8D8",
                                zeroLineColor: "#D8D8D8",
                                borderDash: [2, 2],
                                zeroLineBorderDash: [2, 2],
                                drawBorder: false,
                            },
                        },
                    ],
                },
            },
        });
    }

    if (cash("#stacked-bar-Chart-widget").length) {
        let ctx = cash("#stacked-bar-Chart-widget")[0].getContext("2d");
        let myChart = new Chart(ctx, {
            type: "bar",
            data: {
                labels: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                ],
                datasets: [
                    {
                        label: "Html Template",
                        barPercentage: 0.5,
                        barThickness: 6,
                        maxBarThickness: 8,
                        minBarLength: 2,
                        backgroundColor: "#203f90",
                        data: helper.randomNumbers(-100, 100, 12),
                    },
                    {
                        label: "VueJs Template",
                        barPercentage: 0.5,
                        barThickness: 6,
                        maxBarThickness: 8,
                        minBarLength: 2,
                        backgroundColor: "#cbd5e0",
                        data: helper.randomNumbers(-100, 100, 12),
                    },
                ],
            },
            options: {
                scales: {
                    xAxes: [
                        {
                            stacked: true,
                            ticks: {
                                fontSize: "12",
                                fontColor: "#777777",
                            },
                            gridLines: {
                                display: false,
                            },
                        },
                    ],
                    yAxes: [
                        {
                            stacked: true,
                            ticks: {
                                fontSize: "12",
                                fontColor: "#777777",
                                callback: function (value, index, values) {
                                    return "$" + value;
                                },
                            },
                            gridLines: {
                                color: "#D8D8D8",
                                zeroLineColor: "#D8D8D8",
                                borderDash: [2, 2],
                                zeroLineBorderDash: [2, 2],
                                drawBorder: false,
                            },
                        },
                    ],
                },
            },
        });
    }

    if (cash("#stacked-bar-Chart-1").length) {
        let ctx = cash("#stacked-bar-Chart-1")[0].getContext("2d");
        let myChart = new Chart(ctx, {
            type: "bar",
            data: {
                labels: [...Array(16).keys()],
                datasets: [
                    {
                        label: "Html Template",
                        barPercentage: 0.5,
                        barThickness: 6,
                        maxBarThickness: 8,
                        minBarLength: 2,
                        backgroundColor: "#203f90",
                        data: helper.randomNumbers(-100, 100, 16),
                    },
                    {
                        label: "VueJs Template",
                        barPercentage: 0.5,
                        barThickness: 6,
                        maxBarThickness: 8,
                        minBarLength: 2,
                        backgroundColor: "#cbd5e0",
                        data: helper.randomNumbers(-100, 100, 16),
                    },
                ],
            },
            options: {
                legend: {
                    display: false,
                },
                scales: {
                    xAxes: [
                        {
                            stacked: true,
                            ticks: {
                                fontSize: "12",
                                fontColor: "#777777",
                            },
                            gridLines: {
                                display: false,
                            },
                        },
                    ],
                    yAxes: [
                        {
                            stacked: true,
                            ticks: {
                                fontSize: "12",
                                fontColor: "#777777",
                                callback: function (value, index, values) {
                                    return "$" + value;
                                },
                            },
                            gridLines: {
                                color: "#D8D8D8",
                                zeroLineColor: "#D8D8D8",
                                borderDash: [2, 2],
                                zeroLineBorderDash: [2, 2],
                                drawBorder: false,
                            },
                        },
                    ],
                },
            },
        });
    }

    if (cash("#line-Chart-widget").length) {
        let ctx = cash("#line-Chart-widget")[0].getContext("2d");
        let myChart = new Chart(ctx, {
            type: "line",
            data: {
                labels: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                ],
                datasets: [
                    {
                        label: "Html Template",
                        data: [
                            0,
                            200,
                            250,
                            200,
                            500,
                            450,
                            850,
                            1050,
                            950,
                            1100,
                            900,
                            1200,
                        ],
                        borderWidth: 2,
                        borderColor: "#203f90",
                        backgroundColor: "transparent",
                        pointBorderColor: "transparent",
                    },
                    {
                        label: "VueJs Template",
                        data: [
                            0,
                            300,
                            400,
                            560,
                            320,
                            600,
                            720,
                            850,
                            690,
                            805,
                            1200,
                            1010,
                        ],
                        borderWidth: 2,
                        borderDash: [2, 2],
                        borderColor: "#cbd5e0",
                        backgroundColor: "transparent",
                        pointBorderColor: "transparent",
                    },
                ],
            },
            options: {
                scales: {
                    xAxes: [
                        {
                            ticks: {
                                fontSize: "12",
                                fontColor: "#777777",
                            },
                            gridLines: {
                                display: false,
                            },
                        },
                    ],
                    yAxes: [
                        {
                            ticks: {
                                fontSize: "12",
                                fontColor: "#777777",
                                callback: function (value, index, values) {
                                    return "$" + value;
                                },
                            },
                            gridLines: {
                                color: "#D8D8D8",
                                zeroLineColor: "#D8D8D8",
                                borderDash: [2, 2],
                                zeroLineBorderDash: [2, 2],
                                drawBorder: false,
                            },
                        },
                    ],
                },
            },
        });
    }

    if (cash("#donut-Chart-widget").length) {
        let ctx = cash("#donut-Chart-widget")[0].getContext("2d");
        let myDoughnutChart = new Chart(ctx, {
            type: "doughnut",
            data: {
                labels: ["Html", "Vuejs", "Laravel"],
                datasets: [
                    {
                        data: [15, 10, 65],
                        backgroundColor: ["#2BB6D0", "#E63b1f", "#203f90"],
                        hoverBackgroundColor: ["#2BB6D0", "#E63b1f", "#203f90"],
                        borderWidth: 5,
                        borderColor: cash("html").hasClass("dark")
                            ? "#303953"
                            : "#fff",
                    },
                ],
            },
            options: {
                cutoutPercentage: 80,
            },
        });
    }

    if (cash("#pie-Chart-widget").length) {
        let ctx = cash("#pie-Chart-widget")[0].getContext("2d");
        let myPieChart = new Chart(ctx, {
            type: "pie",
            data: {
                labels: ["Html", "Vuejs", "Laravel"],
                datasets: [
                    {
                        data: [15, 10, 65],
                        backgroundColor: ["#2BB6D0", "#E63b1f", "#203f90"],
                        hoverBackgroundColor: ["#2BB6D0", "#E63b1f", "#203f90"],
                        borderWidth: 5,
                        borderColor: cash("html").hasClass("dark")
                            ? "#303953"
                            : "#fff",
                    },
                ],
            },
        });
    }
})(cash);
