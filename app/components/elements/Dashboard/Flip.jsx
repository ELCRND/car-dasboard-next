"use client";

import Image from "next/image";

const Flip = () => {
  return (
    <button
      onClick={(e) =>
        e.target.parentNode.parentNode.parentNode.parentNode.classList.toggle(
          "_flip"
        )
      }
    >
      <Image
        width={16}
        height={16}
        src="/img/dashboard/bottom-bar-icon-1.svg"
        alt=""
      />
    </button>
  );
};

export default Flip;
