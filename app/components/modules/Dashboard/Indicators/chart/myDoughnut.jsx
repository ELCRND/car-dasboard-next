"use client";
import { Chart, ArcElement, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

Chart.register(ArcElement, Legend);

const myDoughnut = ({ labels, scalesBg, data, textColor }) => {
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
                color: textColor,
                font: {
                  size: 24,
                },
              },
            },
          },
          circumference: 230,
          rotation: -115,
          borderRadius: 0,
          cutout: 41,
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
