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
  let [labels, setLabels] = useState(carStatisticsData.dailyDataLabels);
  let [max, setMax] = useState(160);
  return (
    <div className="w-full p-6 rounded-2xl bg-white shadow-[0px_2px_4px_0px_rgba(147,144,144,0.2)]">
      <h3 className="text-xl font-bold">Car Statistics</h3>
      <div className="mt-4 mb-1">
        <label className="ml-3 py-2 rounded-3xl text-xs font-bold transition-colors cursor-pointer">
          <input
            className="hidden peer/day"
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
          <span className="p-2 rounded-3xl peer-checked/day:text-white peer-checked/day:bg-[#2884FF]">
            Day
          </span>
        </label>
        <label className="ml-3 py-2 rounded-3xl text-xs font-bold transition-colors cursor-pointer">
          <input
            className="hidden peer/week"
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
          <span className="p-2 rounded-3xl peer-checked/week:text-white peer-checked/week:bg-[#2884FF]">
            Week
          </span>
        </label>
        <label className="ml-3 py-2 rounded-3xl text-xs font-bold transition-colors cursor-pointer">
          <input
            className="hidden peer/month"
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
          <span className="p-2 rounded-3xl peer-checked/month:text-white peer-checked/month:bg-[#2884FF]">
            Mounth
          </span>
        </label>
      </div>
      <CarLine data={data} labels={labels} max={max} />
    </div>
  );
};

export default CarGraphic;
