let labels = ["Shoes", "Jeans", "Accessories", "T-Shirts", "Outwear"];
export const RadarData = {
  labels: labels,
  datasets: [
    {
      label: "March",
      backgroundColor: "#e1b9db",
      borderColor: "#ee6a8e",
      pointBackgroundColor: "#e2e2f4",
      poingBorderColor: "#ee6a8e",
      radius: 0,
      pointHoverBackgroundColor: "#ee6a8e",
      pointHoverBorderColor: "#e1b9db",
      data: [20, 30, 30, 36, 40],
    },
    {
      label: "March",
      backgroundColor: "#c7dcf8",
      borderColor: "#5da2ed",
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
        borderRadius: 7,
      },
    },
  },
  tooltips: {
    enabled: false,
  },
};
