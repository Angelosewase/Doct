import React from "react";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import MoreAboutPatient from "./MoreAboutPatient";
import { Patientsdata } from "@/app/lib/definitions";
import { patientsdata } from "@/app/lib/placeholderdata";

const RecentPatients = () => {
  return (
    <div className=" md:w-[90%] w-full pr-2 md:pr-10 mt-5">
      <div className="flex w-full justify-between">
        <h1 className="text-lg font-semibold mb-4 inline-block ">
          Recent patients
        </h1>
        <span>
          <Link
            href={"/appointements"}
            className="text-xs text-blue-400 hover:underline"
          >
            View all
          </Link>
          <ChevronRightIcon className="w-4  text-blue-400 inline-block" />
        </span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-6 bg-gray-100 rounded px-2 py-3  text-gray-600 text-sm font-semibold">
        <p>Patient name</p>
        <p>Visit Id</p>
        <div className="col-span-4 md:grid grid-cols-4 hidden justify-center">
          <p>Date</p>
          <p>Gender</p>
          <p>Diseases</p>
          <p>Status</p>
        </div>
      </div>
     {
        patientsdata.map(patient => <RecentPatient {...patient}/>)
     }
    </div>
  );
};

export default RecentPatients;

const RecentPatient = ({profileimg,name,visitId,Date,gender,disease,status}:Patientsdata) => {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-6  rounded-lg px-2 py-1  text-gray-600 text-sm my-1 shadow">
        <div className="flex items-center gap-2">
            <Image
            src={profileimg}
            width={40}
            height={40}
            alt=""
            className="rounded-full h-10"
            >
            </Image>
            <span >{name}</span>
        </div>
        <p className="flex items-center">{visitId}</p>
        <div className="col-span-4 md:grid grid-cols-4 hidden">
          <p className="flex items-center">{Date}</p>
          <p className="flex items-center">{gender}</p>
          <p className="flex items-center">{disease}</p>
          <div className="flex gap-4 items-center justify-between">
            <p>{status}</p>
           <MoreAboutPatient />
           </div>
        </div>
      </div>
    </>
  );
};
