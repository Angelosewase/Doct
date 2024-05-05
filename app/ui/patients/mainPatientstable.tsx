import React from "react";
import PatientdisplayMain from "./PatientdiasplayMain";
import { PatientsData } from "@/app/lib/placeholderdata";

const MainPatientsTable = () => {
  return (
    <>
      <div className="w-[95%] grid grid-cols-8 bg-gray-100  py-2 mt-6 justify-items-center">
        <div className=" justify-self-start ml-5">Patient name</div>
        <div>Patient Id</div>
        <div>Date</div>
        <div>Gender</div>
        <div>Disease</div>
        <div>Status</div>
        <div>Payment</div>
        <div className="justify-self-center">actions</div>
      </div>
   {
    PatientsData.map((data,idx) => <PatientdisplayMain {...data} key={idx}/>)
   }
    </>
  );
};

export default MainPatientsTable;
