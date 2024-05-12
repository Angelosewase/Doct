"use client"

import React from "react";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";
import MonitoringPlanProgress from "@/app/ui/records_stats/MonitoringPlanProgress";
import HealthTracker from "@/app/ui/patients/Logconsultation/HealthTracker";
import { findPatientHealthTrackers } from "@/app/lib/utils";
import { useParams } from "next/navigation";



const Page = () => {

  const {PatientId}= useParams()
  let patientstrackersdata;
 if(!Array.isArray(PatientId)){
   patientstrackersdata = findPatientHealthTrackers(PatientId ||"")
 }
  return (
    <>
    <div className="ml-4 lg:mr-[370px] mr-2">

      <div className="text-xs text-gray-500 flex gap-1 mt-1">
        <p>My Patient </p>
        <ChevronDoubleRightIcon className="w-3" />
        <span className="font-semibold">Consultation note </span>
        <ChevronDoubleRightIcon className="w-3" />
        <span>Monitoring plan</span>
      </div>

      <h1 className="mt-3 text-xl font-semibold">Monitoring plan</h1>
       <MonitoringPlanProgress />
      <div className=" text-xs lg:text-sm text-gray-500 grid grid-cols-3 pl-2 w-[98%] rounded-md bg-blue-50 py-3.5 mx-auto mt-8">
         <span className="pl-4">Monitoring Plan</span>
         <span>Reporting Time & Reminder</span>
         <span>Frequency and Review</span>
      </div>
      { patientstrackersdata &&  patientstrackersdata.healthTrackers.map((data,idx) => <HealthTracker {...data} key={idx}/>)}
    </div>
    </>
  );
};

export default Page;
