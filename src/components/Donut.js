import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const centerText = {
  id: "centerText",
  afterDatasetDraw(chart) {
    const { ctx, data } = chart;
    const canvas = document.querySelector(".donut-parent > canvas");
    const heightWithPx = canvas.style.height;
    const height = heightWithPx.slice(0, -2);
    ctx.save();
    const x = chart.getDatasetMeta(0).data[0].x;
    const y = chart.getDatasetMeta(0).data[0].y;
    ctx.font = `bolder ${height / 5}px Bitter`;
    ctx.textAlign = "center";
    ctx.bextBaseline = "middle";
    ctx.fillText(data.datasets[0].data[0] + "%", x, y);
  },
};

const options = {
  cutout: "80%",
};

export default function Donut({name, percentage}) {
  const data = {
    labels: [],
    datasets: [
      {
        label: name,
        data: [percentage, 100 - percentage],
        backgroundColor: ["#22d6aa", "#d3f7ee"],
        borderWidth: 0,
      },
    ],
  };
  return (
    <div className="donut-parent">
      <Doughnut data={data} options={options} plugins={[centerText]} />
    </div>
  );
}
