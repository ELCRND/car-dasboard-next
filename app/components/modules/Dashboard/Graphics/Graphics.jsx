import CarGraphic from "./CarGraphic";
import MilesGraphic from "./MilesGraphic";

const Graphics = () => {
  return (
    <section className="mt-6 mb-8 grid gap-7 grid-cols-[repeat(auto-fit,minmax(488px,1fr))] place-items-center">
      <MilesGraphic />
      <CarGraphic />
    </section>
  );
};

export default Graphics;
