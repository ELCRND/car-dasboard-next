import Image from "next/image";
import Doughnut from "./chart/myDoughnut";

const Range = () => {
  return (
    <div className="w-[232px] py-4 px-5 flex flex-col items-center rounded-2xl bg-white">
      <Image
        className="w-10 h-10 py-2 px-3 rounded-full bg-[rgba(255_126_134)] bg-opacity-10"
        src="/img/dashboard/range-icon.svg"
        alt="range"
        width={40}
        height={40}
      />
      <h2 className="text-nowrap text-2xl font-bold text-[#242731]">Range</h2>
      <Doughnut
        data={[157, 143]}
        labels={["157k%   "]}
        scalesBg={["#FF7E86", "#F4F5F9"]}
        textColor={"#242731"}
      />
    </div>
  );
};

export default Range;
