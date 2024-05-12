"use client"

import React from "react";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";
import MonitoringPlanProgress from "@/app/ui/records_stats/MonitoringPlanProgress";
import MonitoringPlan from "@/app/ui/forms/MonitoringPlan";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";


const page = () => {
  const route= useRouter()
  const {PatientId} = useParams()

  return (
    <div className="ml-4 lg:mr-[370px] mr-2">
      <div className="text-xs text-gray-500 flex gap-1 mt-1">
        <p>My Patient </p>
        <ChevronDoubleRightIcon className="w-3" />
        <span className="font-semibold">Consultation note </span>
        <ChevronDoubleRightIcon className="w-3" />
        <span>Monitoring plan</span>
      </div>

      <h1 className="mt-3 text-xl font-semibold">Monitoring plan</h1>

      <div>
        <MonitoringPlanProgress />
      </div>
      <div className="mx-8 mt-7">
        <MonitoringPlan />
        <div className="flex gap-2 justify-end">
          <button className="p-2 border border-blue-300 rounded ">
            cancel
          </button>
          <button className="p-2 border border-blue-300 bg-blue-500 rounded text-white" onClick={()=>{
            route.replace(`/dashboard/patients/LogConsultation/${PatientId}/healthTrackes`)
          }}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
