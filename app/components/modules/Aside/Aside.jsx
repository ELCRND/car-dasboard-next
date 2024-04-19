"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Aside = () => {
  const pathname = usePathname();
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
          <li
            className={`_nav hover:bg-[#f5f4f6] ${
              pathname === "/" && "bg-[#f5f4f6]"
            }`}
          >
            <Image
              width={24}
              height={24}
              src="/img/aside/dashboard_icon.svg"
              alt=""
            />
            <Link className="ml-3 text-sm font-medium text-[#5f6165]" href="/">
              Dasboard
            </Link>
          </li>
          <li
            className={`_nav hover:bg-[#f5f4f6] ${
              pathname === "/assets" && "bg-[#f5f4f6]"
            }`}
          >
            <Image
              width={24}
              height={24}
              src="/img/aside/assets_icon.svg"
              alt=""
            />
            <Link
              className="ml-3 text-sm font-medium text-[#5f6165]"
              href="/assets"
            >
              Assets
            </Link>
          </li>
          <li
            className={`_nav hover:bg-[#f5f4f6] ${
              pathname === "/booking" && "bg-[#f5f4f6]"
            }`}
          >
            <Image
              width={24}
              height={24}
              src="/img/aside/booking_icon.svg"
              alt=""
            />
            <Link
              className="ml-3 text-sm font-medium text-[#5f6165]"
              href="/booking"
            >
              Booking
            </Link>
          </li>
          <li
            className={`_nav hover:bg-[#f5f4f6] ${
              pathname === "/sellCars" && "bg-[#f5f4f6]"
            }`}
          >
            <Image
              width={24}
              height={24}
              src="/img/aside/sell-cars_icon.svg"
              alt=""
            />
            <Link
              className="ml-3 text-sm font-medium text-[#5f6165]"
              href="/sellCars"
            >
              Sell Cars
            </Link>
          </li>
        </ul>
        <Link
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
        </Link>
        <Link
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
        </Link>
      </div>
    </aside>
  );
};

export default Aside;
