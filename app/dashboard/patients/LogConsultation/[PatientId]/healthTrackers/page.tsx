"use client"

import React from "react";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";
import MonitoringPlanProgress from "@/app/ui/records_stats/MonitoringPlanProgress";
import HealthTracker from "@/app/ui/patients/Logconsultation/HealthTracker";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { HealthTrackers } from "@/app/lib/placeholderdata";



const Page = () => {
  const route=useRouter()
  const {PatientId} = useParams()
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
     
     {
        HealthTrackers.map(healthTracker => <HealthTracker {...healthTracker} />)
     }
      <div className="flex gap-2 justify-end mt-10 mr-2">
          <button className="p-2 border border-blue-300 rounded hover:bg-blue-500 hover:text-white transition" onClick={
            ()=>{
              route.replace(`/dashboard/patients/LogConsultation/${PatientId}/monitoringPlan`)
            }
          }>
            back
          </button>        
          <button className="p-2 border border-blue-300 rounded hover:bg-blue-500 hover:text-white transition">
            save as draft
          </button>
          <button className="p-2 border border-blue-300 bg-blue-500 rounded text-white" onClick={()=>{
            route.replace(`/dashboard/patients/LogConsultation/${PatientId}/healthTrackers`)
          }}>
            Next
          </button>
        </div>
    </div>
    </>
  );
};

export default Page;
