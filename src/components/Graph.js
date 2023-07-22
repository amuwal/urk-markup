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
const labelsMobile =[20, 25, 30, 35, 40, 60, 65]
const employerContribution = [
  20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80,
];
const employerContributionMobile = [
    20, 30, 40, 50, 60, 70, 80
]
const employeeContribution = [
  20, 25, 30, 35, 45, 50, 55, 60, 65, 70, 75, 80, 85,
];
const employeeContributionMobile = [
    20, 30, 45, 55, 65, 75, 85
]
const totalInterest = [20, 30, 35, 40, 45, 50, 60, 80, 90, 105, 110, 120, 160];
const totalInterestMobile = [
    20, 35, 45, 60, 90, 110, 160
]

const w = window.innerWidth;;

export const data = {
  labels: w > 800 ? labels : labelsMobile,
  datasets: [
    {
      label: "Employer",
      data: w > 800 ? employerContribution : employerContributionMobile,
      backgroundColor: "#0800a3",
      barThickness: 13,
    },
    {
      label: "Employee",
      data: w > 800 ? employeeContribution : employeeContributionMobile,
      backgroundColor: "#4935ff",
      barThickness: 13,
    },
    {
      label: "Total Interest",
      data: w >  800 ? totalInterest : totalInterestMobile,
      backgroundColor: "#85afff",
      barThickness: 13,
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
