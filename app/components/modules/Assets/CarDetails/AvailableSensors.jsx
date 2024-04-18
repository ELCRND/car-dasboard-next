import Image from "next/image";
import React from "react";

const AvailableSensors = () => {
  return (
    <div className="py-2 px-5 bg-white rounded-2xl">
      <h3 className="mb-3 text-xl text-[#242731]">AvailableSensors</h3>
      <div className="mb-4 pt-4 flex flex-col gap-3 border-t border-[#F3F3F3]">
        <label className="flex items-center relative cursor-pointer">
          <input
            className="peer/consumed mr-3 peer relative h-4 w-4 appearance-none rounded-[3px] border transition-all  checked:border-red-500 checked:bg-red-500"
            type="checkbox"
            id="consumed"
            defaultChecked
          />
          <Image
            className="absolute text-white transition-opacity -left-[2px] peer-checked/consumed:opacity-100"
            src={"/img/assets/check.svg"}
            alt=""
            width={20}
            height={20}
          />
          <span className="peer-checked/consumed:text-[#D43B3B] text-sm font-medium text-[#242731]">
            Asset - Fuel Consumed &#40;10&#41;
          </span>
          <Image
            className="ml-auto mr-2"
            src={"/img/assets/analyze.svg"}
            alt=""
            width={20}
            height={20}
          />
        </label>
        <label className="flex items-center relative cursor-pointer">
          <input
            className="peer/odometer mr-3 peer relative h-4 w-4 appearance-none rounded-[3px] border transition-all  checked:border-red-500 checked:bg-red-500"
            type="checkbox"
            id="odometer"
          />
          <Image
            className="absolute text-white transition-opacity -left-[2px] peer-checked/odometer:opacity-100"
            src={"/img/assets/check.svg"}
            alt=""
            width={20}
            height={20}
          />
          <span className="peer-checked/odometer:text-[#D43B3B] text-sm font-medium text-[#242731]">
            Asset - Odometer &#40;km&#41;
          </span>
          <Image
            className="ml-auto mr-2"
            src={"/img/assets/analyze.svg"}
            alt=""
            width={20}
            height={20}
          />
        </label>
        <label className="flex items-center relative cursor-pointer">
          <input
            className="peer/runtime mr-3 peer relative h-4 w-4 appearance-none rounded-[3px] border transition-all  checked:border-red-500 checked:bg-red-500"
            type="checkbox"
            id="runtime"
          />
          <Image
            className="absolute text-white transition-opacity -left-[2px] peer-checked/runtime:opacity-100"
            src={"/img/assets/check.svg"}
            alt=""
            width={20}
            height={20}
          />
          <span className="peer-checked/runtime:text-[#D43B3B] text-sm font-medium text-[#242731]">
            Asset - Runtime &#40;km&#41;
          </span>
          <Image
            className="ml-auto mr-2"
            src={"/img/assets/analyze.svg"}
            alt=""
            width={20}
            height={20}
          />
        </label>
        <label className="flex items-center relative cursor-pointer">
          <input
            className="peer/speed mr-3 peer relative h-4 w-4 appearance-none rounded-[3px] border transition-all  checked:border-red-500 checked:bg-red-500"
            type="checkbox"
            id="speed"
          />
          <Image
            className="absolute text-white transition-opacity -left-[2px] peer-checked/speed:opacity-100"
            src={"/img/assets/check.svg"}
            alt=""
            width={20}
            height={20}
          />
          <span className="peer-checked/speed:text-[#D43B3B] text-sm font-medium text-[#242731]">
            Asset - Fuel Speed &#40;km&#41;
          </span>
          <Image
            className="ml-auto mr-2"
            src={"/img/assets/analyze.svg"}
            alt=""
            width={20}
            height={20}
          />
        </label>
        <label className="flex items-center relative cursor-pointer">
          <input
            className="peer/temperature mr-3 peer relative h-4 w-4 appearance-none rounded-[3px] border transition-all  checked:border-red-500 checked:bg-red-500"
            type="checkbox"
            id="temperature"
          />
          <Image
            className="absolute text-white transition-opacity -left-[2px] peer-checked/temperature:opacity-100"
            src={"/img/assets/check.svg"}
            alt=""
            width={20}
            height={20}
          />
          <span className="peer-checked/temperature:text-[#D43B3B] text-sm font-medium text-[#242731]">
            Asset - Engine Temperature &#40;km&#41;
          </span>
          <Image
            className="ml-auto mr-2"
            src={"/img/assets/analyze.svg"}
            alt=""
            width={20}
            height={20}
          />
        </label>
      </div>
      <button
        className="py-2 px-3 rounded-md text-sm text-white font-medium bg-[#FF6370] hover:brightness-90 transition-all"
        type="button"
      >
        See All
      </button>
    </div>
  );
};

export default AvailableSensors;
