import Image from "next/image";
import React from "react";

const CarTopView = () => {
  return (
    <section className="h-[620px] relative p-6 bg-[#438FFE] rounded-2xl">
      <div className="grid grid-rows-2 grid-cols-2 gap-y-8">
        <div>
          <h3 className="text-base text-[#c6dcfc]">Fuel Usage</h3>
          <b className="text-xl font-bold text-white">2903.89 Ltr</b>
        </div>
        <div className="border-l-2 pl-8 border-[#579BFF]">
          <h3 className="text-base text-[#c6dcfc]">KM Driven</h3>
          <b className="text-xl font-bold text-white">2903.89 Ltr</b>
        </div>
        <div>
          <h3 className="text-base text-[#c6dcfc]">Total Cost</h3>
          <b className="text-xl font-bold text-white">$3,00,290.00</b>
        </div>
        <div className="border-l-2 pl-8 border-[#579BFF]">
          <h3 className="text-base text-[#c6dcfc]">Top Speed</h3>
          <b className="text-xl font-bold text-white">$5.2K</b>
        </div>
      </div>
      <Image
        className="absolute top-48 left-1/2 -translate-x-1/2"
        src={"/img/assets/car.png"}
        alt={"car top view"}
        width={280}
        height={550}
      />
    </section>
  );
};

export default CarTopView;
