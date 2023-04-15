import React from "react";
import { Radar } from "react-chartjs-2";
import {   Chart as ChartJS, registerables } from 'chart.js';
import { RadarData, RadarOptions } from "./RadarConfig";


export const RadarChart = () => {

    ChartJS.register(...registerables);

   

  return <Radar data={RadarData} options={RadarOptions} />;
};
