import Image from "next/image";
import ImpressionShare from "../../elements/SellCars/ImpressionShare";
import MultipleDoughnut from "../../elements/SellCars/MultipleDoughnut";
const Offers = () => {
  return (
    <div className="">
      <h2 className=" my-5 text-3xl font-bold text-[#242731]">Offers</h2>
      <div className="p-7 bg-white rounded-2xl">
        <div className="flex items-center">
          <div>
            <h4 className="_h4">Killan James</h4>
            <span>
              <b className="text-lg font-medium text-[#FF6464]">$16,605 </b>
              <span className="text-xs font-medium text-[#A4A5A6]">
                avarage price
              </span>
              <span className="block text-xs font-medium text-[#72767C]">
                market avarage is $16,224
              </span>
              <button className="mt-2 py-2 px-4 flex flex-col rounded-xl bg-[#FF6370]">
                <svg
                  width="11.000000"
                  height="8.000000"
                  viewBox="0 0 11 8"
                  fill="none"
                >
                  <defs />
                  <path
                    id="vector (Stroke)"
                    d="M6.74 0.05C7.08 -0.26 7.6 -0.24 7.91 0.1L10.61 3.01C10.9 3.33 10.9 3.82 10.61 4.14L7.91 7.06C7.6 7.4 7.08 7.42 6.74 7.11C6.4 6.79 6.38 6.27 6.69 5.93L8.09 4.41L0 4.41C-0.46 4.41 -0.84 4.04 -0.84 3.58C-0.84 3.12 -0.46 2.75 0 2.75L8.09 2.75L6.69 1.23C6.38 0.89 6.4 0.36 6.74 0.05Z"
                    fill="#FFFFFF"
                    fill-opacity="1.000000"
                    fill-rule="evenodd"
                  />
                </svg>
              </button>
            </span>
          </div>

          <div className="mx-20 flex flex-col items-center relative">
            <ImpressionShare />
            <span className="absolute top-2/3 left-1/2 -translate-x-1/2 text-xs text-[#70CF97]">
              Excellent
            </span>
            <span className="text-sm font-bold text-[#72767c]">
              Impression Share
            </span>
          </div>

          <div>
            <MultipleDoughnut />
          </div>

          <div className="ml-20 flex gap-14  items-center">
            <div>
              <div className="w-9 h-9 flex justify-center items-center rounded-lg bg-[rgba(64,126,249,0.1)]">
                <Image
                  src={"/img/offers/car.png"}
                  alt=""
                  width={18}
                  height={14}
                />
              </div>
              <b className="block text-xl text-[#407EF9] font-bold">$1,174</b>
              <span className="text-xs text-[#808191] font-medium">
                Model Spend
              </span>
            </div>
            <div>
              <div className="w-9 h-9 flex justify-center items-center rounded-lg bg-[rgba(255,126,134,0.1)]">
                <Image
                  src={"/img/offers/arrow.png"}
                  alt=""
                  width={18}
                  height={14}
                />
              </div>
              <b className="block text-xl text-[#FF6370] font-bold">$1,174</b>
              <span className="text-xs text-[#808191] font-medium">
                Model Spend
              </span>
            </div>
            <div>
              <div className="w-9 h-9  px-[13px] flex justify-center items-center rounded-lg bg-[rgba(161,98,247,0.1)]">
                <Image
                  src={"/img/offers/$.png"}
                  alt=""
                  width={18}
                  height={14}
                />
              </div>
              <b className="block text-xl text-[#A162F7] font-bold">$811</b>
              <span className="text-xs text-[#808191] font-medium">
                Spend per Unit Turned
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
