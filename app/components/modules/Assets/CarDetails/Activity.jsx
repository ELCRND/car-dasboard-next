import ActivityGraphic from "../../../elements/Assets/ActivityGraphic";

const Activity = () => {
  const data = [30, 40, 50, 55, 53, 50, 49, 60, 70, 75, 80, 90];
  const labels = Array.from({ length: 12 }, () => "12/9");

  return (
    <div className="col-start-1 col-end-3 py-2 px-7 rounded-2xl bg-white">
      <div className="flex justify-between">
        <h3 className=" text-xl text-[#242731]">Activity</h3>
        <button className="ml-auto  text-sm text-[#A4A5A6]" type="button">
          View All
        </button>
      </div>
      <ActivityGraphic data={data} labels={labels} max={120} />
    </div>
  );
};

export default Activity;
