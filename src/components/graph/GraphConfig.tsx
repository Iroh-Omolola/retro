import { ScriptableContext } from "chart.js";


export const GraphData = {
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
      label: "Income",
      events: ["click"],
      borderColor: "#5e8be2",
      backgroundColor: (context: ScriptableContext<"line">) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(50, 350, 50, 250);
        gradient.addColorStop(1, "rgba(92,136,226,.1)");
        gradient.addColorStop(0.4, "rgba(92,136,226, 0)");
        return gradient;
      },
      pointHoverBackgroundColor: "#5e8be2",
      responsive: true,
      scales: {
        xAxes: [
          {
            type: "time",
            distribution: "series",
          },
        ],
      },
      tooltips: {
        // mode: "index",
        // intersect: true,
      },
      data: [
        50000, 80000, 50000, 62000, 40000, 70000, 40000, 60000, 40000, 50000,
        60000, 50000,
      ],
    },
    {
      label: "Expenses",
      events: ["click"],
      borderColor: "#df7aad",
      backgroundColor: (context: ScriptableContext<"line">) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(50, 400, 50, 300);
        gradient.addColorStop(1, "rgba(227,169,213,.1)");
        gradient.addColorStop(0.4, "rgba(227,169,213, 0)");
        return gradient;
      },
      pointHoverBackgroundColor: "#df7aad",
      responsive: true,
      scales: {
        xAxes: [
          {
            type: "time",
            distribution: "series",
          },
        ],
      },
      tooltips: {
        mode: "",
        intersect: false,
      },
      data: [
        50000, 90000, 30000, 62000, 40000, 50000, 60000, 40000, 50000, 40000,
        60000, 50000,
      ],
    },
  ],
};
export const options: any = {
  maintainAspectRatio: false,
  responsive: true,
  tension: 0.5,
  fill: true,
  scaleShowLabels: true,
  pointBorderWidth: 0.1,
  borderWidth: 2,
  pointRadius: 2,
  pointHoverRadius: 3,
  plugins: {
    title: {
      display: false,
      text: "Chart",
      fontColor: "white",
    },
    legend: {
      display: false,
      labels: {
        fontColor: "#56616B",
        fontSize: "24px",
        boxWidth: 1,
        boxHeight: 2,
      },
    },
    tooltips: {
      mode: "index",
      intersect: true,
      callbacks: {
        title: function (t: any, d: any) {
          console.log(t, d);
        },
        label: function (t: any, d: any) {
          const label = d.datasets[t.datasetIndex].label;
          const value = d.datasets[t.datasetIndex].data[t.index];
          const sign = value >= 0 ? "+" : "";
          return `${label}: ${sign}${value.toFixed(2)}%`;
        },
        backgroundColor: "#FFF",
        titleFontSize: 16,
        titleFontColor: "#0066ff",
        bodyFontColor: "#000",
        bodyFontSize: 14,
        displayColors: false,
      },
    },
    hover: {
      mode: "nearest",
      intersect: true,
    },
  },
  layout: {
    padding: 1,
  },
  stepSize: 20,
  scales: {
    xAxis: {
      display: true,
      scaleLabel: {
        display: true,
        labelString: "Month",
        fontColor: "grey",
      },
      grid: {
        display: true,
        drawTicks: true,
        drawBorder: false,
        borderWidth: 6,
        color: function (context: any) {
          return "#f2f2f3";
        },

        zeroLineColor: "#f2f2f3",
      },
      markers: {
        size: 9,
      },
    },
    yAxis: {
      display: true,
      min: 0,
      max: 100000,
      ticks: {
        display: false,
        beginAtZero: false,
        stepSize: 20000,
      },
      grid: {
        borderDash: function (context: any) {
          console.log("pee", context);
          if (context.index === 0) {
            return 0;
          }
          return [3];
        },
        border: function (context: any) {
          if (context.index === 0) {
            return false;
          }
          return [3];
        },
        borderDashOffset: [0],
        drawBorder: false,
        drawTicks: false,
        tickMarkLength: 10,
        color: function (context: any) {
          if (context.index === 0 || context.index === 5) {
            return "transparent";
          }
          return "#f2f2f3";
        },

        zeroLineColor: "#f2f2f3",
      },
    },
  },
};
