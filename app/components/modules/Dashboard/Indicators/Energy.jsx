import Image from "next/image";
import Doughnut from "./chart/myDoughnut";

const Energy = () => {
  return (
    <div className="w-full py-3 px-5 flex flex-col items-center rounded-2xl bg-[#a162f7]">
      <Image
        className="w-10 h-10 py-2 px-3 rounded-full bg-[rgb(166_111_240)] "
        src="/img/dashboard/enegry-icon.svg"
        alt="energy"
        width={40}
        height={40}
      />
      <h2 className="text-nowrap text-2xl font-bold text-[#fff]">Enegry</h2>
      <Doughnut
        data={[45, 55]}
        labels={["45%   "]}
        scalesBg={["#FFFFFF", "#B37EFC"]}
        textColor={"#ffffff"}
      />
    </div>
  );
};

export default Energy;
