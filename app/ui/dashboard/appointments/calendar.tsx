import React from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";

const Calendar = () => {
  return (
    <>
      <div className="w-[350px] bg-white mt-4 py-2 ">
        <div className="flex items-center gap-5 justify-between mx-10">
          <div className="flex -ml-2 font-semibold">
            <span className="font-semibold">03-</span>
            <span className="font-semibold">09,</span>
            <span className="font-semibold">May 2020</span>
          </div>

          <div className="flex items-center gap-1">
            <button className="w-4 bg-blue-500 rounded flex items-center">
              <ChevronLeftIcon width={15} height={15} stroke="white" />
            </button>
            <button className="w-4 bg-blue-500 rounded flex items-center">
              <ChevronRightIcon width={15} height={15} stroke="white" />
            </button>
          </div>
        </div>
        <table className="w-full">
          <thead>
            <tr className="flex justify-evenly text-gray-400 text-sm">
              <td>S</td>
              <td>M</td>
              <td>T</td>
              <td>W</td>
              <td>T</td>
              <td>F</td>
              <td>S</td>
            </tr>
          </thead>
          <tbody>
            <tr className="flex justify-evenly text-sm `">
              <td className="hover:shadow p-2 rounded hover:cursor-default">3</td>
              <td className="hover:shadow p-2 rounded hover:cursor-default">4</td>
              <td className="hover:shadow p-2 rounded hover:cursor-default">5</td>
              <td className="hover:shadow p-2 rounded hover:cursor-default">6</td>
              <td className="hover:shadow p-2 rounded hover:cursor-default">7</td>
              <td className="hover:shadow p-2 rounded hover:cursor-default">8</td>
              <td className="hover:shadow p-2 rounded hover:cursor-default">9</td>
            </tr>
          </tbody>
        </table>
        <div className="flex rounded bg-slate-800 w-[300px] mx-auto text-gray-100 py-3 justify-evenly items-center mt-2">
          <div className="flex flex-col">
            <p className="text-base ">Next week</p>
            <span className="text-xs">Upcoming schedule-2</span>
          </div>
          <button className="bg-cyan-500 h-7 px-2 rounded text-sm ">
            Open
          </button>
        </div>
      </div>
    </>
  );
};

export default Calendar;
