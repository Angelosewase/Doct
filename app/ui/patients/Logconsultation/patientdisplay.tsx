import React from "react";
import Image from "next/image";
import { ProgressBar } from "../../records_stats/charts";
import { patientsfacts } from "@/app/lib/definitions";
import { PatientsData } from "@/app/lib/placeholderdata";

const PatientsDisplay = (props: { id?:string | string[]})=> 
  {
    const patient = PatientsData.find(patient => patient.patientId === props.id)
  return (
    <div className="fixed top-[70px]  right-5 shadow-sm bg-white px-3 rounded-lg hidden lg:block">
      <div className="flex flex-col items-center mt-3 mb-5  border-b border-gray-100 pb-3">
        <Image
          src={patient?.profileImg ||""}
          height={65}
          width={65}
          className="rounded-full h-16 w-16 mb-2"
          alt=""
        />

        <h2 className="text-sm font-semibold">Mr {patient?.names}</h2>
        <p className="text-xs text-gray-500 ">{patient?.age} years,{patient?.gender}</p>
      </div>

      <div className="mb-4 border-b border-gray-100 pb-4">
        <div className="mb-4">
          <h4 className="text-sm text-gray-500 ">Email</h4>
          <p className="text-sm">{patient?.email}</p>
        </div>
        <div className="mb-4">
          <h4 className="text-sm text-gray-500 ">Phone</h4>
          <p className="text-sm">{patient?.phone}</p>
        </div>
        <div className="mb-4">
          <h4 className="text-sm text-gray-500 ">Date of birth</h4>
          <p className="text-sm">{patient?.dob}</p>
        </div>
        <div>
          <h4 className="text-sm text-gray-500 ">Disease</h4>
          <p className="text-sm">{patient?.disease}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {patient?.tests?.map((fact, idx) => (
          <PatientsFacts {...fact}key={idx} />
        ))}
      </div>
    </div>
  );
};

export default PatientsDisplay;

const PatientsFacts = (props: patientsfacts) => {
  const percentage = ((props.value / props.max) * 100).toFixed(0);
  return (
    <>
      <div className={`shadow-sm rounded-md w-36 p-2 ${props.color} mb-2`}>
        <h2 className="antialiased my-1 text-gray-600 text-sm">
          {props.record}
        </h2>
        <p className="text-xs mb-2 text-gray-500">{percentage}%</p>
        <ProgressBar max={props.max} value={props.value} color={props.dataColor} />
        <p className={`text-xs mt-2 ${props.color}`}>{props.measuredRecord}</p>
      </div>
    </>
  );
};
