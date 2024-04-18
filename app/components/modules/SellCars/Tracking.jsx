import TrackingGraphic from "../../elements/SellCars/TrackingGraphic";

const Tracking = () => {
  return (
    <div className="p-5 bg-white rounded-2xl">
      <h3 className="mb-6 text-2xl font-bold">Tracking History</h3>
      <TrackingGraphic
        data={[10, 7, 17, 22, 18, 14, 19]}
        labels={["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]}
        max={30}
      />
    </div>
  );
};

export default Tracking;
