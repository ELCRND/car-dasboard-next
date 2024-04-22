import Indicators from "./Indicators/Indicators";
import Graphics from "./Graphics/Graphics";
import Cars from "./Cars/Cars";

const Dashboard = () => {
  return (
    <article className="p-7 bg-[#f5f5f5]">
      <Indicators />
      <Graphics />
      <Cars />
    </article>
  );
};

export default Dashboard;
