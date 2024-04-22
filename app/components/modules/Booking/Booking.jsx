"use client";
import Image from "next/image";
import DropDown from "../../elements/Booking/DropDown";
import CarsList from "./CarsList";
import { useState } from "react";

const Booking = () => {
  const [view, setView] = useState(3);
  const toggleView = () => {
    if (view > 1) {
      setView((v) => v - 1);
      return;
    } else setView(3);
  };
  return (
    <div className="p-7 bg-[#F5F5F5] overflow-y-scroll">
      <h2 className="_h2 mb-5">Booking</h2>
      <div className="flex">
        <DropDown defaultValue={"New"} options={["New", "New2", "New3"]} />
        <DropDown
          defaultValue={"Toyota"}
          options={["Toyota", "Porshe", "Porshe"]}
        />
        <div className="ml-auto flex ">
          <button
            onClick={toggleView}
            className="w-11 h-11  mr-3 flex justify-center items-center bg-white rounded-full shadow-[0px_4px_8px_0px_rgba(53,53,53,0.1)]"
          >
            <Image
              src={"/img/booking/display_icons.svg"}
              alt=""
              width={24}
              height={24}
            />
          </button>
          <button className="w-11 h-11  flex justify-center items-center bg-[#A162F7] rounded-full">
            <Image
              src={"/img/booking/settings.svg"}
              alt=""
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>
      <CarsList view={view} />
    </div>
  );
};

export default Booking;
