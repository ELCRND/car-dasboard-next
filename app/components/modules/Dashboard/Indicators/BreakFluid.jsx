import Image from "next/image";
import Doughnut from "./chart/myDoughnut";
const BreakFluid = () => {
  return (
    <div className="w-full py-3 px-5 flex flex-col items-center rounded-2xl bg-white shadow-[0px_2px_4px_0px_rgba(147,144,144,0.2)]">
      <Image
        className="w-10 h-10 py-2 px-3 rounded-full bg-[rgba(161_98_247)] bg-opacity-10"
        src="/img/dashboard/break-fluid-icon.svg"
        alt="breakFluid"
        width={40}
        height={40}
      />
      <h2 className="text-nowrap text-2xl font-bold text-[#242731]">
        Break fluid
      </h2>
      <Doughnut
        data={[9, 91]}
        labels={["9%   "]}
        scalesBg={["#A162F7", "#F4F5F9"]}
        textColor={"#242731"}
      />
    </div>
  );
};

export default BreakFluid;
