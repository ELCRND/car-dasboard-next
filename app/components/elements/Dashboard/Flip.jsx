"use client";

import Image from "next/image";
import { forwardRef } from "react";

const Flip = forwardRef((props, ref) => {
  return (
    <button onClick={() => ref.current.classList.toggle("_flip")}>
      <Image
        width={16}
        height={16}
        src="/img/dashboard/bottom-bar-icon-1.svg"
        alt=""
      />
    </button>
  );
});

export default Flip;
