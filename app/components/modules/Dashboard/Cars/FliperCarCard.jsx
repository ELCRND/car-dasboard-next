"use client";
import Front from "./Front";
import Back from "./Back";
import { useRef } from "react";

const FliperCarCard = ({ imgPath, imgDesc, title, reviews }) => {
  const ref = useRef();
  return (
    <div ref={ref} className="_flipper w-[320px] h-[225px] lg:mx-0 mx-auto">
      <Front
        imgPath={imgPath}
        imgDesc={imgDesc}
        title={title}
        reviews={reviews}
        ref={ref}
      />
      <Back
        imgPath={imgPath}
        imgDesc={imgDesc}
        title={title + "2"}
        reviews={"1" + reviews}
        ref={ref}
      />
    </div>
  );
};

export default FliperCarCard;
