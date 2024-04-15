import React from "react";
import Energy from "./Energy";
import Range from "./Range";
import BreakFluid from "./BreakFluid";
import TireWear from "./TireWear";

const Indicators = () => {
  return (
    <section className="grid place-items-center  grid-cols-[repeat(auto-fit,minmax(232px,1fr))]">
      <Energy />
      <Range />
      <BreakFluid />
      <TireWear />
    </section>
  );
};

export default Indicators;
