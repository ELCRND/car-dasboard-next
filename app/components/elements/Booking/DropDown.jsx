"use client";

import { useState } from "react";

const DropDown = ({ defaultValue, options }) => {
  const [dropDownVisible, setDropDownVisible] = useState(false);
  const [dropDownValue, setDropDownValue] = useState(defaultValue);
  return (
    <div className="w-[122px] h-9 mr-4 flex justify-center items-center relative rounded-3xl bg-white">
      <button
        className="w-[100px] absolute"
        onClick={() => setDropDownVisible(!dropDownVisible)}
      >
        <span>{dropDownValue}</span>
        <span
          className={`${
            dropDownVisible
              ? "rotate-180 right-0 top-1/2 translate-y-1"
              : "rotate-0 right-4 top-1/2 -translate-y-1"
          } absolute bg-[#f5f5f5]  after:absolute after:border-[8px] after:border-transparent after:border-t-[8px] after:border-t-[#f5f5f5]`}
        ></span>
      </button>
      <ul
        className={`py-2 px-2 flex flex-col items-center gap-1 absolute top-10 bg-white rounded-lg overflow-hidden ${
          dropDownVisible ? "block" : "hidden"
        }`}
      >
        {options.map((option, idx) => (
          <li
            key={idx}
            onClick={() => {
              setDropDownValue(option);
              setDropDownVisible(false);
            }}
            className="px-5 py-1 rounded-md hover:bg-[#F5F5F5] cursor-pointer"
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropDown;
