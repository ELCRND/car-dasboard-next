"use client";
import { useState } from "react";
import CarLine from "./chart/carLine";

const carStatisticsData = {
  dailyDataLabels: ["7 AM", "9 AM", "11 AM", "4 PM", "3 PM", "7 PM", "9 PM"],
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
  data: [100, 130, 150, 120, 80, 90, 110],
};

const CarGraphic = () => {
  let [data, setData] = useState(carStatisticsData.data);
  let [labels, setLabels] = useState(carStatisticsData.data);
  let [max, setMax] = useState(160);
  return (
    <div className="w-[488px] py-4 px-6 rounded-2xl bg-white">
      <h3 className="text-xl font-bold">Car Statistics</h3>
      <div className="mt-6 mb-3">
        <label className="ml-3 py-2 px-3 rounded-3xl text-xs font-bold transition-colors">
          <input
            className="hidden"
            type="radio"
            name="carStatistics"
            id="carStatistics__day"
            defaultChecked
            onChange={(e) => {
              if (e.target.checked) {
                setData(carStatisticsData.data);
                setLabels(carStatisticsData.dailyDataLabels);
                setMax(160);
              }
            }}
          />
          <span>Day</span>
        </label>
        <label className="ml-3 py-2 px-3 rounded-3xl text-xs font-bold transition-colors">
          <input
            className="hidden"
            type="radio"
            name="carStatistics"
            id="carStatistics__week"
            onChange={(e) => {
              if (e.target.checked) {
                setData(
                  carStatisticsData.data.map(
                    (n) => n * 7 - Math.floor(Math.random() * 300)
                  )
                );

                setLabels(carStatisticsData.weeklyDataLabels);
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
            name="carStatistics"
            id="carStatistics__mounth"
            onChange={(e) => {
              if (e.target.checked) {
                setData(
                  carStatisticsData.data.map(
                    (n) => n * 30 - Math.floor(Math.random() * 1500)
                  )
                );

                setLabels(carStatisticsData.monthlyDataLabels);
                setMax(4800);
              }
            }}
          />
          <span>Mounth</span>
        </label>
      </div>
      <CarLine data={data} labels={labels} max={max} />
    </div>
  );
};

export default CarGraphic;
