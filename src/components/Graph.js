import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    title: {
      display: false,
    },
  },
  responsive: true,
  interaction: {
    intersect: false,
  },
  maintainAspectRatio: false,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      max: 300,
      min: 0,
      stacked: true,
      ticks: {
        autoSkip: true,
        maxTicksLimit: 4,
      },
    },
  },
};

const labels = [20, "", 25, "", 30, "", 35, "", 40, "", 60, "", 65];
const employerContribution = [
  20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80,
];
const employeeContribution = [
  20, 25, 30, 35, 45, 50, 55, 60, 65, 70, 75, 80, 85,
];
const totalInterest = [30, 40, 45, 50, 60, 70, 85, 95, 105, 110, 125, 130, 160];

export const data = {
  labels,
  datasets: [
    {
      label: "Employer",
      data: employerContribution,
      backgroundColor: "#0800a3",
      barThickness: 15,
    },
    {
      label: "Employee",
      data: employeeContribution,
      backgroundColor: "#4935ff",
      barThickness: 15,
    },
    {
      label: "Total Interest",
      data: totalInterest,
      backgroundColor: "#85afff",
      barThickness: 15,
    },
  ],
};

export default function Graph() {
  return (
    <div className="graph">
      <Bar options={options} data={data} />
    </div>
  );
}
