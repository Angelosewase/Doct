

import React from "react";
import {
  CalendarIcon,
  UserIcon,
  BuildingOfficeIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";
import { statsdata } from "@/app/lib/placeholderdata";

const icons = {
  clinicConsulting: BuildingOfficeIcon,
  appointment: CalendarIcon,
  patients: UserIcon,
  videoConsulting: VideoCameraIcon,
};

const colors = {
  clinicConsulting: "bg-orange-500",
  appointment: "bg-indigo-500",
  patients: "bg-red-500",
  videoConsulting: "bg-blue-500",
};

interface Props {
    icon: keyof typeof icons
    color: keyof typeof colors
    facts: number
    description: string
}

const Stat: React.FC<Props> = ({ icon, facts, description , color}) => {
  const Icon = icons[icon];

  return (
    <div
      className={`flex gap-4 items-center rounded-lg ${colors[color]} w-[250px] py-8 px-6`}
    >
      <div
        className={`w-11 rounded-full ${colors[color]} border-2 flex items-center justify-center p-2`}
      >
        <Icon className="w-6  text-gray-100" />
      </div>
      <div className="">
        <h1 className="text-gray-100 font-semibold -mb-2 text-xl">${facts}K</h1>
        <span className="text-gray-200 text-xs">{description}</span>
      </div>
    </div>
  );
};

const Stats = () => {
  return (
    <div className="mt-5 flex md:gap-10  mx-5 gap-4 flex-wrap sm:items-center ">
      {statsdata.map((data,idx) => (
        <Stat {...data}  key={idx} color={data.color}/>
      ))}
    </div>
  );
};

export default Stats;

