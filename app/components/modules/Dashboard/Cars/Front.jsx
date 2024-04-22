import Image from "next/image";
import BottomBar from "../../../elements/Dashboard/BottomBar";
import { forwardRef } from "react";

const Front = forwardRef((props, ref) => {
  const { imgPath, imgDesc, title, reviews } = props;
  return (
    <div
      className={`h-full py-4 px-7 rounded-2xl shadow-[0px_2px_6px_0px_rgba(147,144,144,0.4)] _front`}
    >
      <Image
        className="inline"
        width={16}
        height={16}
        src="/img/dashboard/recomended-icon.svg"
        alt=""
      />
      <span className="ml-3 text-base font-bold">{reviews}</span>
      <Image width={230} height={116} src={imgPath} alt={imgDesc} />
      <h3 className="text-xl font-bold text-[#162731]">{title}</h3>
      <BottomBar ref={ref} />
    </div>
  );
});

export default Front;
