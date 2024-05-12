import React from "react";
import { PaperClipIcon } from "@heroicons/react/24/outline";

const MonitoringPlan = () => {
  return (
    <form>
      <label className="flex flex-col width-full gap-1">
        <span className="text-sm text-gray-600">Name of monitoring Plan</span>
        <input type="text" placeholder="Name of monitoring plan" className="border rounded-md h-14 shadow mb-4 pb-5  pl-2 placeholder:text-sm flex outline-none bg-gray-50"/>
      </label>

      <div className="border-2 rounded-md h-24 px-2 outline-none border-dashed flex flex-col  items-center justify-center">
        <div className="flex gap-1 justify-center text-xs items-center cursor-pointer">
          <PaperClipIcon className="w-6" /> Drop your file here or{" "}
          <span className="text-sm text-blue-600">Browse</span>
        </div>
        <span className="text-sm text-gray-400">Max size 10 MB</span>
      </div>

      <label className="flex flex-col width-full gap-1 mt-5">
        <span className="text-sm text-gray-600"> Aim of monitoring plan</span>
        <input type="text" placeholder="Enter the monitoring plan" className="border  h-28 s mb-4 pb-16  pl-2 placeholder:text-sm flex outline-none bg-gray-50"/>
      </label>
    </form>
  );
};

export default MonitoringPlan;
