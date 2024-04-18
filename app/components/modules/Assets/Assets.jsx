import CarTopView from "./CarTopView/CarTopView";
import CarDetails from "./CarDetails/CarDetails";

const Assets = () => {
  return (
    <article className="p-7 bg-[#F5F5F5]">
      <h2 className="_h2 mb-5">Assets</h2>
      <div className="grid grid-cols-[360px_640px] gap-6">
        <CarTopView />
        <CarDetails />
      </div>
    </article>
  );
};

export default Assets;
