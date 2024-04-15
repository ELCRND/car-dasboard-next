import Header from "../modules/Header/Header";
import Aside from "../modules/Aside/Aside";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-[1340px] h-[95vh] grid grid-rows-[70px_auto] grid-cols-[248px_auto]">
      <Header />
      <Aside />
      {children}
    </div>
  );
};

export default Layout;
