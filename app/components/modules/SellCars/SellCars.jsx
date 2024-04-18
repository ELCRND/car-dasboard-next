import Car from "./Car";
import Tracking from "./Tracking";
import Offers from "./Offers";

const SellCars = () => {
  return (
    <div className="p-7 bg-[#F5F5F5]">
      <h2 className="mb-5 text-3xl font-bold text-[#242731]">SellCars</h2>
      <div className="grid grid-rows-[400px] grid-cols-[657px_345px] gap-7">
        <Car />
        <Tracking />
      </div>
      <Offers />
    </div>
  );
};

export default SellCars;
