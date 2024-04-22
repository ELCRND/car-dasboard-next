import FliperCarCard from "./FliperCarCard";

const Cars = () => {
  return (
    <section className="grid grid-rows-1 grid-cols-[repeat(auto-fit,minmax(318px,1fr))] gap-8 relative _car-flip-wrapper">
      <FliperCarCard
        imgPath={"/img/dashboard/mini-cooper.png"}
        imgDesc={"Mini Cooper"}
        title={"Mini Cooper"}
        reviews={"64% Recommend"}
      />
      <FliperCarCard
        imgPath={"/img/dashboard/maruti-suzuki.png"}
        imgDesc={"Maruti Suzuki"}
        title={"Maruti Suzuki"}
        reviews={"74% Recommend"}
      />
      <FliperCarCard
        imgPath={"/img/dashboard/suzuki-swift.png"}
        imgDesc={"Suzuki Swift"}
        title={"Suzuki Swift"}
        reviews={"74% Recommend"}
      />
    </section>
  );
};

export default Cars;
