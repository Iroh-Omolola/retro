import React from "react";
import { Line,  } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
import { GraphData, options } from "./GraphConfig";

export const LineChart = () => {
  ChartJS.register(...registerables);

  return <Line data={GraphData} options={options}  />;
};
