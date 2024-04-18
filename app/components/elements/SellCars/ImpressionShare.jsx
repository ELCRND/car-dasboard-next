"use client";
import { Chart, ArcElement, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

Chart.register(ArcElement, Legend);

const ImpressionShare = () => {
  return (
    <div className="max-w-[100px] max-h-[100px]">
      <Doughnut
        options={{
          plugins: {
            tooltip: {
              enabled: false,
            },
            legend: {
              position: "chartArea",
              labels: {
                textAlign: "center",
                boxWidth: 0,
                color: "#70CF97",
                font: {
                  size: 24,
                },
              },
            },
          },
          circumference: 280,
          rotation: -140,
          borderRadius: 0,
          cutout: 35,
        }}
        data={{
          labels: ["55%   "],
          datasets: [
            {
              data: [55, 45],
              borderWidth: 0,
              backgroundColor: ["#70CF97", "#F4F5F9"],
            },
          ],
        }}
      />
    </div>
  );
};
export default ImpressionShare;
