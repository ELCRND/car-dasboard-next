"use client";
import { useState } from "react";
import MilesBar from "./chart/milesBar";

const milesStatisticsData = {
  dailyDataLabels: ["1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM", "7 PM"],
  weeklyDataLabels: ["MON", "TUE", "WED ", "THU ", "FRI ", "SAT", "SUN"],
  monthlyDataLabels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ],
  data: [140, 120, 157, 105, 135, 95, 145],
};

const MilesGraphic = () => {
  let [data, setData] = useState(milesStatisticsData.data);
  let [labels, setLabels] = useState(milesStatisticsData.dailyDataLabels);
  let [max, setMax] = useState(200);
  return (
    <div className="w-full py-4 px-6 rounded-2xl bg-white">
      <h3 className="text-xl font-bold">Miles Statistics</h3>
      <div className="mt-6 mb-3">
        <label className="ml-3 py-2 px-3 rounded-3xl text-xs font-bold transition-colors">
          <input
            className="hidden"
            type="radio"
            name="milesStatistics"
            id="milesStatistics__day"
            defaultChecked
            onChange={(e) => {
              if (e.target.checked) {
                setData(milesStatisticsData.data);
                setLabels(milesStatisticsData.dailyDataLabels);
                setMax(200);
              }
            }}
          />
          <span>Day</span>
        </label>
        <label className="ml-3 py-2 px-3 rounded-3xl text-xs font-bold transition-colors">
          <input
            className="hidden"
            type="radio"
            name="milesStatistics"
            id="milesStatistics__week"
            onChange={(e) => {
              if (e.target.checked) {
                setData(
                  milesStatisticsData.data.map(
                    (n) => n * 7 - Math.floor(Math.random() * 300)
                  )
                );

                setLabels(milesStatisticsData.weeklyDataLabels);
                setMax(1400);
              }
            }}
          />
          <span>Week</span>
        </label>
        <label className="ml-3 py-2 px-3 rounded-3xl text-xs font-bold transition-colors">
          <input
            className="hidden"
            type="radio"
            name="milesStatistics"
            id="milesStatistics__mounth"
            onChange={(e) => {
              if (e.target.checked) {
                setData(
                  milesStatisticsData.data.map(
                    (n) => n * 30 - Math.floor(Math.random() * 1500)
                  )
                );

                setLabels(milesStatisticsData.monthlyDataLabels);
                setMax(4800);
              }
            }}
          />
          <span>Mounth</span>
        </label>
      </div>
      <MilesBar data={data} labels={labels} max={max} />
    </div>
  );
};

export default MilesGraphic;
