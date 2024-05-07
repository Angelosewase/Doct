import React from "react";
import PatientdisplayMain from "./PatientdiasplayMain";
import { PatientsData } from "@/app/lib/placeholderdata";

const MainPatientsTable = () => {
  return (
    <>
      <div className="w-[95%] grid grid-cols-3  md:grid-cols-8 bg-gray-100  py-2 mt-6 justify-items-center">
        <div className=" justify-self-start ml-5">Patient name</div>
        <div>Patient Id</div>
        <div className="hidden md:block">Date</div>
        <div className="hidden md:block">Gender</div>
        <div className="hidden md:block">Disease</div>
        <div className="hidden md:block">Status</div>
        <div className="hidden md:block">Payment</div>
        <div className="justify-self-center">actions</div>
      </div>
   {
    PatientsData.map((data,idx) => <PatientdisplayMain {...data} key={idx}/>)
   }
    </>
  );
};

export default MainPatientsTable;
