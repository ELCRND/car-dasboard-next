"use client";
import {
  Chart,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

Chart.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
  Tooltip,
  Legend
);

const carLine = ({ data, labels, max }) => {
  return (
    <div className="w-[448px] h-[160px] mx-auto">
      <Line
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              callbacks: {
                label: function (context) {
                  return context.raw + "k";
                },
                labelColor: function () {
                  return {
                    backgroundColor: "#2884FF",
                    borderRadius: 5,
                  };
                },
              },
            },
          },
          scales: {
            y: {
              min: 50,
              max: max,
              display: false,
            },
            x: {
              grid: {
                tickLength: 0,
                color: "#F9F9F9",
              },
              ticks: {
                autoSkip: true,
                color: "#808191",
              },
            },
          },
        }}
        data={{
          labels: labels,
          datasets: [
            {
              label: "",
              data: data,
              categoryPercentage: 1,
              barPercentage: 1,
              barThickness: 28,
              pointStyle: false,
              fill: "start",
              borderWidth: 2,
              borderColor: "rgba(255, 118, 76,0.5)",
              backgroundColor: function (context) {
                const ctx = context.chart.ctx;
                const gradient = ctx.createLinearGradient(0, 0, 0, 182.6);
                gradient.addColorStop(0, "rgba(250, 174, 50, 0.22)");
                gradient.addColorStop(1, "rgba(250, 174, 50, 0.001)");
                return gradient;
              },
              tension: 0.2,
            },
          ],
        }}
      />
    </div>
  );
};
export default carLine;
