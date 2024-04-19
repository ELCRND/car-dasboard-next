import Image from "next/image";

const Header = () => {
  return (
    <header className="md:col-start-2 md:col-end-3 bg-white flex items-center">
      <form className="md:w-[358px] ml-8 flex items-center gap-4 p-3 rounded-lg bg-[#f5f4f6]">
        <button className="header__submit">
          <Image src="/img/search_btn.svg" alt="" width={24} height={24} />
        </button>
        <input className="w-full px-2" type="search" />
      </form>
      <button className="md:ml-auto mx-1 md:mr-10">
        <Image src="/img/notification.svg" alt="" width={16} height={16} />
      </button>
      <Image
        className="mr-8"
        src="/img/avatar.png"
        alt="avatar"
        width={40}
        height={40}
      />
    </header>
  );
};

export default Header;
