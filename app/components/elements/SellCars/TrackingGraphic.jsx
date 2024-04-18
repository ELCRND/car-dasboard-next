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

const TrackingGraphic = ({ labels, data, max }) => {
  return (
    <div className="w-[297px] h-[286px] mx-auto">
      <Bar
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              displayColors: false,
              callbacks: {
                title: () => "",
                label: function (context) {
                  return context.raw + "km/h";
                },
              },
            },
          },
          scales: {
            y: {
              max: max,
              border: {
                dash: [6, 4],
              },
              grid: {
                color: "#F2F2F2",
              },
              ticks: {
                autoSkip: true,
                color: "#808191",
              },
            },
            x: {
              grid: {
                display: false,
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
              backgroundColor: "rgba(255, 126, 134, 0.1)",
              barThickness: 24,
              hoverBackgroundColor: "#FF6370",
              borderRadius: 20,
            },
          ],
        }}
      />
    </div>
  );
};
export default TrackingGraphic;
