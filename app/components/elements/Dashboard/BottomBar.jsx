import { forwardRef } from "react";
import Image from "next/image";
import Flip from "./Flip";

const BottomBar = forwardRef((props, ref) => {
  return (
    <div className="mt-4 flex gap-4 items-center">
      <Flip ref={ref} />
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
  );
});
export default BottomBar;
