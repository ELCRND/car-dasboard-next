"use client";
import { Chart, ArcElement, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

Chart.register(ArcElement, Legend);

const myDoughnut = ({ labels, scalesBg, data, textColor }) => {
  return (
    <div className="max-w-[112px] max-h-[112px]">
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
                color: textColor,
                font: {
                  size: 24,
                },
              },
            },
          },
          circumference: 240,
          rotation: -120,
          borderRadius: 0,
          cutout: 44,
        }}
        data={{
          labels: labels,
          datasets: [
            {
              data: data,
              borderWidth: 0,
              backgroundColor: scalesBg,
            },
          ],
        }}
      />
    </div>
  );
};
export default myDoughnut;
