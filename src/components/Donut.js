import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Chart } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);
const data = {
  labels: [],
  datasets: [
    {
      label: "# of Votes",
      data: [90, 10],
      backgroundColor: ["#22d6aa", "#d3f7ee"],
      borderWidth: 0,
    },
  ],
};

const options = {
  cutout: "80%",
};

export default function Donut() {
  return (
    <div className="donut-parent">
      <Doughnut data={data} options={options} />
    </div>
  );
}
