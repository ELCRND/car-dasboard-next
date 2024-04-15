"use client";
import {
  Chart,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

Chart.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const carLine = ({ data, labels, max }) => {
  return (
    <div className="w-[418px]">
      <Line
        options={{
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
              backgroundColor: "#F4F5F9",
              barThickness: 28,
              hoverBackgroundColor: "#2884FF",
              pointStyle: false,
              fill: true,
              borderWidth: 2,
              borderColor: "rgb(255, 118, 76)",

              tension: 0.2,
            },
          ],
        }}
      />
    </div>
  );
};
export default carLine;
