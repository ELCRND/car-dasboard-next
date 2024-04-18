import React from "react";

const Reminder = () => {
  return (
    <div className="py-2 px-4 rounded-2xl bg-white  col-start-1 col-end-3">
      <div className="mb-2 flex justify-between">
        <h3 className="inline-block text-xl text-[#242731]">Reminder</h3>
        <button className=" py-[6px] px-3 text-white rounded-md bg-[#A162F7]">
          + Add New
        </button>
      </div>
      <table className="w-full">
        <thead className="border-b border-[#F3F3F3]">
          <tr className="text-sm font-medium text-[#72767C]">
            <td>Description</td>
            <td>Due</td>
            <td>Overdue</td>
            <td>Notify</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>
          <tr className="text-sm font-medium text-[#242731]">
            <td className="p-2">#Urgent Safety Recall</td>
            <td>06/04/2022</td>
            <td>08/04/2022</td>
            <td>David Demo</td>
            <td>Completed</td>
          </tr>
          <tr className="text-sm font-medium text-[#242731]">
            <td className="p-2">#Urgent Safety Recall</td>
            <td>06/04/2022</td>
            <td>08/04/2022</td>
            <td>David Demo</td>
            <td>Completed</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Reminder;
