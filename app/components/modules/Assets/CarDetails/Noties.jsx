import Image from "next/image";

const Noties = () => {
  return (
    <div className="py-2 px-4 rounded-2xl bg-white">
      <h3 className=" text-xl text-[#242731]">Noties</h3>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-4">
          <div className="bg-white w-9 h-9 flex place-content-center rounded-full shadow-[0px_2px_4px_0px_rgba(147,144,144,0.2)]">
            <Image
              src={"/img/assets/noties_icon_1.svg"}
              alt="message"
              width={16}
              height={16}
            />
          </div>
          <div>
            <h4 className="text-base font-medium">Monday, 6th Apirl 2020</h4>
            <span className="my-1 block text-xs text-[#72767c]">
              Book for General Service
            </span>
            <span className="py-1 px-2 text-xs text-white font-bold rounded-md bg-[#70CF97]">
              COMPLETED
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="bg-white w-9 h-9 flex place-content-center rounded-full shadow-[0px_2px_4px_0px_rgba(147,144,144,0.2)]">
            <Image
              src={"/img/assets/noties_icon_2.svg"}
              alt="warning"
              width={16}
              height={16}
            />
          </div>
          <div>
            <h4 className="text-base font-medium">
              Thursday, 24th October 2021
            </h4>
            <span className="my-1 block text-xs text-[#72767c]">
              Vehicle LV 001 has been marked for recall.
            </span>
            <span className="py-1 px-2 text-xs font-bold rounded-md bg-[#ECEEF0]">
              14:07-21/11/2021
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="bg-white w-9 h-9 flex place-content-center rounded-full shadow-[0px_2px_4px_0px_rgba(147,144,144,0.2)]">
            <Image
              src={"/img/assets/noties_icon_3.svg"}
              alt="notification"
              width={16}
              height={16}
            />
          </div>
          <div>
            <h4 className="text-base font-medium">Monday, 13th August 2018</h4>
            <span className="my-1 block text-xs text-[#72767c]">
              Maintenance Completed, Collect
            </span>
            <span className="py-1 px-2 text-xs font-bold rounded-md bg-[#ECEEF0]">
              14:07-21/11/2021
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Noties;
