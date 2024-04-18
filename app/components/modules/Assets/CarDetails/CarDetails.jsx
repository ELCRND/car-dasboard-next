import React from "react";
import Activity from "./Activity";
import Noties from "./Noties";
import Reminder from "./Reminder";
import AvailableSensors from "./AvailableSensors";

const CarDetails = () => {
  return (
    <section className=" grid grid-rows-[240px_281px_150px] grid-cols-2 gap-4">
      <Activity />
      <Noties />
      <AvailableSensors />
      <Reminder />
    </section>
  );
};

export default CarDetails;
