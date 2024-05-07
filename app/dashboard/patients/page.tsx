"use client"
import React from "react";
import {
  PlusIcon,
  FunnelIcon,
  MagnifyingGlassIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/outline";
import MainPatientsTable from "@/app/ui/patients/mainPatientstable";
import clsx from "clsx";
import AddPatient from '@/app/ui/modals/AddPatient'

const Page = () => {

  const [addpatient,setAddpatient ]= React.useState(false)
  return (
    <>
      <div className={clsx("mr-8 mt-6 ml-2",{"opacity-10":addpatient})}>
        <div className="flex justify-between">
          <div>
            <span className="flex text-sm">
              My patients
              <ChevronDoubleRightIcon className="w-3 text-gray-500" />
            </span>
            <h1 className="font-semibold mt-2">Patient List</h1>
          </div>
          <button className="bg-indigo-400 text-white flex gap-1 items-center py-2 px-5 rounded text-sm mb-4"
          onClick={()=> setAddpatient(true)}>
            <PlusIcon className="w-5 text-white" />
            Add patient
          </button>
        </div>

        <div className="flex justify-between mt-2">
          <div className="flex gap-1 items-center text-sm ">
            show
            <span>
              <input
                type="number"
                defaultValue={10}
                min={0}
                max={10}
                className="outline-none w-10 py-1 pl-2"
              />
            </span>
            Entries
          </div>
          <button className="flex gap-1 items-center py-2 px-3 rounded text-sm mb-4  bg-gray-100">
            Filters
            <FunnelIcon className="w-5 " />
          </button>
        </div>

        <div className="flex justify-between mr-20 mt-1 flex-wrap">
          <div className="flex flex-col gap-1">
            <span className="">Patient</span>
            <label className="flex border-2 border-gray-100 rounded-md px-2  items-center justify-center">
              <input
                type="text"
                name="searchField"
                id="searchField"
                className="bg-gray-50 text-slate-700 py-2 px-2 text-xs outline-none w-80 "
                placeholder="Patient name ,Patient Id ,Phone etc"
              />
              <MagnifyingGlassIcon className="w-5 text-slate-500 " />
            </label>
          </div>
          <div className="flex flex-col">
            <span>Category</span>
            <select
              name=""
              id=""
              className="bg-gray-50 text-slate-700 py-2 px-2 text-sm border-gray-100 outline-none w-80 border-2 rounded-md "
            >
              <option value="all">All Categories</option>
              <option value="all">Another option</option>
            </select>
          </div>
          <div className="flex flex-col">
            <span>Date of joining </span>
            <input
              type="date"
              name=""
              id=""
              placeholder="03/24/2024"
              className="bg-gray-50 text-slate-700 py-2 px-2 text-xs outline-none w-80 border-2 border-gray-100 rounded-md"
            />
          </div>
        </div>
        <div>
          <MainPatientsTable />
        </div>
      </div>
      {addpatient && <AddPatient togglevisiblity={setAddpatient} />}
    </>
  );
};

export default Page;
