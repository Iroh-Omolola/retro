import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const LineChart = () => {
  const data = {
    labels: ["2016", "2017", "2018", "2019", "2020"],
    datasets: [
      {
        label: "No. of downloads (K)",
        data: [2, 6, 9, 7, 11],
        borderColor: "#C8ECCC",
        backgroundColor: "#F0FAF1",
        pointBorderColor: "#AAA",
        pointBackgroundColor: "#FEF1F1",
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text: "Number of downloads of our app",
    },
    scales: {
      Yaxis: {
        ticks: {
          min: 0,
          max: 20,
          stepSize: 3,
        },
      },
    },
  };
  return <Line data={data} options={options} />;
};

export default LineChart;
