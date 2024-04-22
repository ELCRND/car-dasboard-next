"use client";
import React from "react";

import Image from "next/image";

const Flip = React.forwardRef((props, ref) => {
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
Flip.displayName = "Flip";
export default Flip;
