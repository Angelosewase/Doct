import React from "react";
import { UserIcon, ArrowTrendingUpIcon } from "@heroicons/react/24/outline";
import { Chart } from "./charts";
import { CategoryStats } from "@/app/lib/placeholderdata";
import { categoryStats } from "@/app/lib/definitions";
import { getpercentage } from "@/app/lib/utils";

const colors = {
  newPatients: "bg-orange-100",
  oldPatients: "bg-indigo-100",
};

interface Props {
  color: keyof typeof colors;
  facts: number;
  description: "new patients" | "old patients";
}

const Stat: React.FC<Props> = ({ facts, description, color }) => {
  return (
    <div className={`flex gap-4 items-center bg-white w-[250px] py-6 px-6`}>
      <div
        className={`w-11 rounded-full ${colors[color]}  flex items-center justify-center p-2`}
      >
        <UserIcon
          className={`w-6 ${
            colors[color] === "bg-orange-100"
              ? "text-orange-600"
              : "text-indigo-500"
          }`}
        />
      </div>
      <div>
        <h1 className="text-gray-800 font-semibold -mb-1 text-xl">{facts}K</h1>
        <span className="text-gray-400 text-sm">{description}</span>
      </div>
      <div>
        <ArrowTrendingUpIcon className="w-4 text-blue-500 inline-block" />
        <span className="text-xs text-indigo-500">15%</span>
      </div>
    </div>
  );
};

const PatientsStats = () => {
  return (
    <div>
      <div className="ml-6 md:ml-0">
        <div className="flex ">
          <h1 className="text-md font-semibold mb-4 inline-block  mr-28">
            Patients
          </h1>
          <select
            name="year"
            id="patientsyearid"
            className="outline-none  rounded-md h-8 px-2"
          >
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
          </select>
        </div>
        <div className="p-1 bg-white rounded-lg">
          <Stat facts={24.4} description="new patients" color="newPatients" />
          <Stat facts={12.4} description="old patients" color="oldPatients" />
        </div>
      </div>
    </div>
  );
};

export default PatientsStats;

export const GenderDiv = () => {
  return (
    <div>
      <div className="flex ml-10 md:ml-0 ">
        <h1 className="text-md font-semibold mb-4 inline-block ml-1  mr-24">
          Patients
        </h1>
        <select
          name="year"
          id="patientsyearid"
          className="outline-none  rounded-md h-8 px-2"
        >
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
      <div className=" inline-block bg-white rounded-lg pb-2 ml-10 md:ml-0">
        <Chart />
        <div className="flex justify-evenly">
        {CategoryStats.map((stat,idx) => <Chartdesc {...stat} key={idx}/>)}
        </div>
      </div>
    </div>
  );
};

interface chartdescprops extends  categoryStats{}

const Chartdesc = ({category,number,color}:chartdescprops) => {

  const total = CategoryStats.reduce((acc,curr)=>acc+curr.number,0)
  const percentage = getpercentage(total,number)
  return (
    <>
      <div className="flex items-center flex-col">
        <div className="flex gap-1 items-center">
          <button className={`w-2 h-2 ${color}`}></button>
          <p className="text-xs font-semibold">{category}</p>
        </div>
        <span className="text-xs">{percentage}%</span>
      </div>
    </>
  );
};
