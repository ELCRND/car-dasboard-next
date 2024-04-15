import Image from "next/image";

const Cars = () => {
  return (
    <section className="grid grid-cols-[repeat(auto-fit,minmax(318px,1fr))] place-items-center gap-8">
      <div className="w-full py-4 px-7 rounded-2xl bg-[#E1DFA4]">
        <Image
          className="inline"
          width={16}
          height={16}
          src="/img/dashboard/recomended-icon.svg"
          alt=""
        />
        <span className="ml-3 text-base font-bold">64% Recommend</span>
        <Image
          width={257}
          height={106}
          src="/img/dashboard/mini-cooper.png"
          alt="Mini Cooper"
        />
        <h3 className="text-xl font-bold text-[#162731]">Mini Cooper</h3>
        <div className="mt-2 flex gap-4 items-center">
          <Image
            width={16}
            height={16}
            src="/img/dashboard/bottom-bar-icon-1.svg"
            alt=""
          />
          <Image
            width={26}
            height={26}
            src="/img/dashboard/bottom-bar-icon-2.svg"
            alt=""
          />
          <Image
            width={20}
            height={20}
            src="/img/dashboard/bottom-bar-icon-3.svg"
            alt=""
          />
          <Image
            width={14}
            height={14}
            src="/img/dashboard/bottom-bar-icon-4.svg"
            alt=""
          />
          <span className="ml-auto">
            $<b>32</b>/h
          </span>
        </div>
      </div>
      <div className="w-full py-4 px-7 rounded-2xl bg-[#E3ECF1]">
        <Image
          className="inline"
          width={16}
          height={16}
          src="/img/dashboard/recomended-icon.svg"
          alt=""
        />
        <span className="ml-3 text-base font-bold">74% Recommend</span>
        <Image
          width={246}
          height={106}
          src="/img/dashboard/maruti-suzuki.png"
          alt="Maruti Suzuki"
        />
        <h3 className="text-xl font-bold text-[#162731]">Maruti Suzuki</h3>
        <div className="mt-2 flex items-center gap-4">
          <Image
            width={16}
            height={16}
            src="/img/dashboard/bottom-bar-icon-1.svg"
            alt=""
          />
          <Image
            width={26}
            height={26}
            src="/img/dashboard/bottom-bar-icon-2.svg"
            alt=""
          />
          <Image
            width={20}
            height={20}
            src="/img/dashboard/bottom-bar-icon-3.svg"
            alt=""
          />
          <Image
            width={14}
            height={14}
            src="/img/dashboard/bottom-bar-icon-4.svg"
            alt=""
          />
          <span className="ml-auto">
            $<b>28</b>/h
          </span>
        </div>
      </div>
      <div className="w-full py-4 px-7 rounded-2xl bg-[#F4E3E5]">
        <Image
          className="inline"
          width={16}
          height={16}
          src="/img/dashboard/recomended-icon.svg"
          alt=""
        />
        <span className="ml-3 text-base font-bold">74% Recommend</span>
        <Image
          width={216}
          height={106}
          src="/img/dashboard/suzuki-swift.png"
          alt="suzukiSwift"
        />
        <h3 className="text-xl font-bold text-[#162731]">Suzuki Swift</h3>
        <div className="mt-2 flex items-center gap-4">
          <Image
            width={16}
            height={16}
            src="/img/dashboard/bottom-bar-icon-1.svg"
            alt=""
          />
          <Image
            width={26}
            height={26}
            src="/img/dashboard/bottom-bar-icon-2.svg"
            alt=""
          />
          <Image
            width={20}
            height={20}
            src="/img/dashboard/bottom-bar-icon-3.svg"
            alt=""
          />
          <Image
            width={14}
            height={14}
            src="/img/dashboard/bottom-bar-icon-4.svg"
            alt=""
          />
          <span className="ml-auto">
            $<b>28</b>/h
          </span>
        </div>
      </div>
    </section>
  );
};

export default Cars;
