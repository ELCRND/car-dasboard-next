import Image from "next/image";
import React from "react";

const Aside = () => {
  return (
    <aside className="row-start-1 row-end-3 col-start-1 col-end-2 py-7 px-6 flex flex-col relative bg-white">
      <div>
        <Image
          width={108}
          height={31}
          className="aside__logo"
          src="/img/logo.svg"
          alt="logo"
        />
      </div>
      <div className="mt-9">
        <ul className="flex flex-col gap-[10px]">
          <li className="_nav hover:bg-[#f5f4f6]">
            <Image
              width={24}
              height={24}
              src="/img/aside/dashboard_icon.svg"
              alt=""
            />
            <a className="ml-3 text-sm font-medium text-[#5f6165]" href="#">
              Dasboard
            </a>
          </li>
          <li className="_nav hover:bg-[#f5f4f6]">
            <Image
              width={24}
              height={24}
              src="/img/aside/assets_icon.svg"
              alt=""
            />
            <a className="ml-3 text-sm font-medium text-[#5f6165]" href="#">
              Assets
            </a>
          </li>
          <li className="_nav hover:bg-[#f5f4f6]">
            <Image
              width={24}
              height={24}
              src="/img/aside/booking_icon.svg"
              alt=""
            />
            <a className="ml-3 text-sm font-medium text-[#5f6165]" href="#">
              Booking
            </a>
          </li>
          <li className="_nav hover:bg-[#f5f4f6]">
            <Image
              width={24}
              height={24}
              src="/img/aside/sell-cars_icon.svg"
              alt=""
            />
            <a className="ml-3 text-sm font-medium text-[#5f6165]" href="#">
              Sell Cars
            </a>
          </li>
          <li className="_nav hover:bg-[#f5f4f6]">
            <Image
              width={24}
              height={24}
              src="/img/aside/buy-cars_icon.svg"
              alt=""
            />
            <a className="ml-3 text-sm font-medium text-[#5f6165]" href="#">
              Buy Cars
            </a>
          </li>
          <li className="_nav hover:bg-[#f5f4f6]">
            <Image
              width={24}
              height={24}
              src="/img/aside/services_icon.svg"
              alt=""
            />
            <a className="ml-3 text-sm font-medium text-[#5f6165]" href="#">
              Services
            </a>
          </li>
          <li className="_nav hover:bg-[#f5f4f6]">
            <Image
              width={24}
              height={24}
              src="/img/aside/calendar_icon.svg"
              alt=""
            />
            <a className="ml-3 text-sm font-medium text-[#5f6165]" href="#">
              Calendar
            </a>
          </li>
          <li className="_nav hover:bg-[#f5f4f6]">
            <Image
              width={24}
              height={24}
              src="/img/aside/messages_icon.svg"
              alt=""
            />
            <a className="ml-3 text-sm font-medium text-[#5f6165]" href="#">
              Messages
            </a>
          </li>
        </ul>
        <a
          className="flex items-center gap-2 absolute left-8 bottom-20 "
          href="#"
        >
          <Image
            width={24}
            height={24}
            src="/img/aside/settings_icon.svg"
            alt=""
          />
          <span className="text-sm font-medium text-[#5f6165]">Settings</span>
        </a>
        <a
          className="flex items-center gap-2 absolute left-8 bottom-7 "
          href="#"
        >
          <Image
            width={24}
            height={24}
            src="/img/aside/logOut_icon.svg"
            alt=""
          />
          <span className="text-sm font-medium text-[#5f6165]">Log out</span>
        </a>
      </div>
    </aside>
  );
};

export default Aside;
