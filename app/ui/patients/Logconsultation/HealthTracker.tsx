import React from "react";
import { PlusIcon, PencilIcon } from "@heroicons/react/24/outline";
import { healthtracker } from "@/app/lib/definitions";

const HealthTracker = (props: healthtracker) => {
  return (
    <div className=" text-xs lg:text-sm gap-1 text-gray-500 grid grid-cols-3 pl-2 w-[98%] rounded-md bg-white py-2.5 mx-auto my-3 hover:border border-blue-400 transition hover:cursor-pointer">
      <div className=" pl-1 text-xs lg:text-md flex gap-2  items-center flex-col md:flex-row">
        <input type="checkbox" className="w-3 h-3 " />
        <div className="flex flex-col text-sm">
          <span className="ml-1">{props.monitoredTracker}</span>
          {props.Additions && (
            <span className="text-xs text-gray-500 flex flex-col lg:flex-row mt-2 md:mt-0  ">
              <PlusIcon className="w-3 " /> {props.Additions}
            </span>
          )}
        </div>
      </div>

      <div className="flex items-center gap-1 t flex-col md:flex-row">
        <span>{props.reportingTime}</span>
        <PencilIcon className="w-3" />
      </div>

      <span>{props.FrequencyReview}</span>
    </div>
  );
};

export default HealthTracker;

export const HealthTrackerConsultationNoteDisplay = (props: healthtracker) => {
  return (
    <>
      <div className=" text-xs lg:text-sm gap-1 text-gray-500 grid grid-cols-3 pl-2 w-[100%] rounded-md bg-white py-2.5 mx-auto my-3 hover:border border-blue-400 transition hover:cursor-pointer">
        <div className=" pl-1 text-xs lg:text-md flex gap-2  items-center flex-col md:flex-row">
          <div className="flex flex-col text-sm">
            <span className="ml-1">{props.monitoredTracker}</span>
            {props.Additions && (
              <span className="text-xs text-gray-500 flex flex-col lg:flex-row mt-2 md:mt-0  ">
                <PlusIcon className="w-3 " /> {props.Additions}
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-1 t flex-col md:flex-row">
          <span>{props.reportingTime}</span>
          <PencilIcon className="w-3" />
        </div>

        <span>{props.FrequencyReview}</span>
      </div>
    </>
  );
};
