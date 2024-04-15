"use client";
import {
  Chart,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const milesBar = ({ labels, data, max }) => {
  return (
    <div className="w-[418px]">
      <Bar
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
              max: max,
              display: false,
            },
            x: {
              grid: {
                tickLength: 0,
                color: "#F2F2F2",
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
            },
          ],
        }}
      />
    </div>
  );
};
export default milesBar;
