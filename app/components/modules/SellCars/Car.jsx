import Image from "next/image";

const Car = () => {
  return (
    <div className="py-6 px-10 relative bg-white rounded-2xl z-10">
      <h3 className="text-3xl text-[#242731] font-bold">2022 Mercedes Benz</h3>
      <Image
        className="mx-auto relative z-30"
        src={"/img/sellCars/car.png"}
        alt="audi s3"
        width={400}
        height={250}
      />
      <div className=" _platform-wrap absolute -top-[25%] left-1/2 -translate-x-1/2 z-20">
        <div className="w-[540px] h-[540px] rounded-full _platform "></div>
      </div>
      <div className=" _platform-wrap absolute -top-[15%] left-1/2 -translate-x-1/2 z-[19]">
        <div className="w-[540px] h-[540px] rounded-full _platform2 "></div>
      </div>
      <div className=" _platform-wrap absolute -top-[5%] left-1/2 -translate-x-1/2 z-[18]">
        <div className="w-[540px] h-[540px] rounded-full _platform3 "></div>
      </div>
    </div>
  );
};

export default Car;
