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
import { useRef, useState } from "react";
import { Line } from "react-chartjs-2";
import CustomTooltip from "./CustomTooltip";

Chart.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
  Tooltip,
  Legend
);

const ActivityGraphic = ({ data, labels, max }) => {
  const ref = useRef();
  const getOrCreateTooltip = (chart) => {
    let tooltipEl = chart.canvas.parentNode.querySelector("div");
    // console.log(chart.chart.canvas.parentNode);
    // return;
    if (!tooltipEl) {
      tooltipEl = document.createElement("div");
      tooltipEl.style.background = "rgba(0, 0, 0, 0.7)";
      tooltipEl.style.borderRadius = "3px";
      tooltipEl.style.color = "white";
      tooltipEl.style.opacity = 1;
      tooltipEl.style.pointerEvents = "none";
      tooltipEl.style.position = "absolute";
      tooltipEl.style.transform = "translate(-50%, 0)";
      tooltipEl.style.transition = "all .1s ease";

      const table = document.createElement("table");
      table.style.margin = "0px";

      tooltipEl.appendChild(table);
      chart.canvas.parentNode.appendChild(tooltipEl);
    }

    return tooltipEl;
  };
  const externalTooltipHandler = (context) => {
    const { chart, tooltip } = context;
    const tooltipEl = getOrCreateTooltip(chart);

    if (tooltip.opacity === 0) {
      tooltipEl.style.opacity = 0;
      return;
    }

    // Set Text
    if (tooltip.body) {
      const bodyLines = tooltip.body.map((b) => b.lines);
      const div = document.createElement("div");
      div.style.position = "relative";
      //   div.style.overflow = "visible";
      //   tooltipEl.style.overflow = "visible";
      const h3 = document.createElement("h3");
      h3.style.position = "absolute";
      h3.style.top = "16px";
      h3.style.right = "-150px";
      h3.style.color = "#72767C";

      const b = document.createElement("b");
      b.style.color = "#242731";
      b.style.position = "absolute";
      b.style.top = "40px";
      b.style.right = "-70px";
      b.style.fontSize = "18px";

      bodyLines.forEach((body) => {
        h3.innerText = "Traveled last month";
        b.innerText = body[0];
        div.appendChild(h3);
        div.appendChild(b);
      });

      while (tooltipEl.firstChild) {
        tooltipEl.firstChild.remove();
      }

      tooltipEl.appendChild(div);
    }

    const { offsetLeft: positionX } = chart.canvas;
    tooltipEl.style.opacity = 0.8;
    tooltipEl.style.background =
      "linear-gradient(180.00deg, rgba(134, 104, 225,0.85), rgb(249, 247, 254))";
    tooltipEl.style.left = positionX + tooltip.caretX + "px";
    tooltipEl.style.top = context.chart.chartArea.height + 13 + "px";
    tooltipEl.style.font = tooltip.options.bodyFont.string;
    tooltipEl.style.width = "41px";
    tooltipEl.style.height = context.chart.height + "px";
  };
  return (
    <div className="h-[200px]" ref={ref}>
      <Line
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              enabled: false,
              position: "nearest",
              external: externalTooltipHandler,

              callbacks: {
                label: function (context) {
                  return context.raw + " Km";
                },

                labelColor: function () {
                  return {
                    backgroundColor: "red",
                    borderRadius: 5,
                  };
                },
              },
            },
          },
          scales: {
            y: {
              min: 0,
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
                color: "#AFABBA",
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
              fill: "start",
              borderWidth: 2,
              borderColor: "#A162F7",
              backgroundColor: function (context) {
                const ctx = context.chart.ctx;
                const gradient = ctx.createLinearGradient(0, 0, 0, 182.6);
                gradient.addColorStop(0, "rgba(161, 98, 247, 0.38)");
                gradient.addColorStop(1, "rgba(161, 98, 247, 0.001)");
                return gradient;
              },
              tension: 0.5,
            },
          ],
        }}
      />
    </div>
  );
};
export default ActivityGraphic;
