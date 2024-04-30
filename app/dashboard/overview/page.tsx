import React from "react";
import Stats from "../..//ui/records_stats/stats";
import Appointmentreqlist from "../../ui/dashboard/appointments/appointmentsreq";
import PatientsStats, { GenderDiv } from "../../ui/records_stats/patientsStats";
import Appointments from "../../ui/dashboard/appointments/appointments";
import RecentPatients from "../../ui/patients/recentPatients";

const Page = () => {
  return (
    <>
    <div className="flex flex-col items-start ml-7">
      <div className="mt-6 ml-2">
        <h1 className="text-xl font-semibold text-gray-600">
          Welcome, Dr.Angel
        </h1>
        <span className="text-xs text-gray-400">
          Have a nice day at great work
        </span>
      </div>
      <Stats />
      <div className="mt-8 flex gap-20 flex-wrap">
        <Appointmentreqlist />
        <div className="flex flex-col gap-3">
          <PatientsStats />
          <GenderDiv />
        </div>
        <Appointments />
      </div>
      <RecentPatients />
      </div>
    </>
  );
};

export default Page;
