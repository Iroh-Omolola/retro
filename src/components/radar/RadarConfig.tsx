let labels = ["Shoes", "Jeans", "Accessories", "T-Shirts", "Outwear"];
export const RadarData = {
  labels: labels,
  datasets: [
    {
      label: "March",
      borderColor: "#df7aad",
      backgroundColor: "rgba(227,169,213,.2)",
      pointBackgroundColor: "#e2e2f4",
      poingBorderColor: "#ee6a8e",
      borderWidth: 2,
      radius: 0,
      pointHoverBackgroundColor: "#ee6a8e",
      pointHoverBorderColor: "#e1b9db",
      data: [20, 30, 30, 36, 40],
    },
    {
      label: "March",
      borderColor: "#5e8be2",
      borderWidth: 2,
      backgroundColor: "rgba(92,136,226,.2)",
      pointBackgroundColor: "#dbe8fa",
      poingBorderColor: "#5da2ed",
      radius: 0,
      pointHoverBackgroundColor: "#dbe8fa",
      pointHoverBorderColor: "#dbe8fa",
      data: [40, 70, 50, 66, 50],
    },
  ],
};
export const RadarOptions = {
  responsive: true,
  tension: 0.1,
  plugins: {
    legend: {
      display: false,
    },
  },

  scales: {
    r: {
      ticks: {
        display: false,
      },

      angleLines: {
        borderDash: function (context: any) {
          return [3];
        },
      },
      pointLabels: {
        color: "#7e8b96",
      },
      elements: {
        line: {
          borderJoinStyle: "round",
        },
      },
      grid: {
        color: function (context: any) {
          if (context.index !== 9) {
            return "transparent";
          }
          return "#dbdfe2";
        },
      },
    },
  },
  tooltips: {
    enabled: false,
  },
};
