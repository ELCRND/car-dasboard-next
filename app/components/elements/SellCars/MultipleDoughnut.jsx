"use client";
import { Chart, ArcElement, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

Chart.register(ArcElement, Legend);
let max;
const MultipleDoughnut = () => {
  return (
    <div className="max-w-[100px] max-h-[100px]">
      <Doughnut
        options={{
          datasetRadiusBuffer: 25,
          borderRadius: 3,

          plugins: {
            tooltip: {
              enabled: false,
            },
            legend: {
              position: "chartArea",
              labels: {
                textAlign: "center",
                boxWidth: 0,
                color: "#242731",
                font: {
                  size: 20,
                },
              },
            },
          },
        }}
        data={{
          labels: ["$811    "],

          datasets: [
            {
              label: "1",
              data: [8.5],
              borderWidth: 3,
              backgroundColor: ["#A162F7"],
              circumference: (ctx) => {
                const dataPoints = ctx.chart.data.datasets.map(
                  (dataset, idx) => {
                    return dataset.data[0];
                  }
                );
                max = Math.max(...dataPoints);
                return (ctx.dataset.data / max) * 300;
              },
            },
            {
              label: "2",
              data: [10],
              borderWidth: 3,
              backgroundColor: ["#FF6370"],
              circumference: (ctx) => {
                const dataPoints = ctx.chart.data.datasets.map(
                  (dataset, idx) => {
                    return dataset.data[0];
                  }
                );
                max = Math.max(...dataPoints);
                return (ctx.dataset.data / max) * 300;
              },
            },
            {
              label: "3",
              data: [7],
              borderWidth: 3,
              backgroundColor: ["#F6CC0D"],
              circumference: (ctx) => {
                const dataPoints = ctx.chart.data.datasets.map(
                  (dataset, idx) => {
                    return dataset.data[0];
                  }
                );
                max = Math.max(...dataPoints);
                return (ctx.dataset.data / max) * 300;
              },
            },
          ],
        }}
      />
    </div>
  );
};
export default MultipleDoughnut;
