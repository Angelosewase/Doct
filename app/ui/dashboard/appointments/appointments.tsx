import React from "react";
import Image from "next/image";
import { appointments } from "@/app/lib/definitions";
import {appointmentsData } from "@/app/lib/placeholderdata";
import Calendar from "./calendar";

const Appointments = () => {
  return (
    <div className="w-[350px] pl-4 md:pl-2">
      <h1 className="text-md font-semibold mb-4 inline-block">
      Today's appointments
      </h1>
      <div className="bg-white rounded inline-block w-[350px]">
       {
        appointmentsData.map((appointment,index)=>{
          return <Appointment key={index} {...appointment} />
        })
       }
      </div>
      <Calendar />
    </div>
  );
};

export default Appointments;

const Appointment = ({profileimg,name,consultingtype,time}:appointments):React.ReactNode => {
  return (
    <div className="flex items-center  justify-between  w-[300px] md:w-[330px] px-5 py-3">
      <div className="flex gap-3">
        <Image
          src={`${profileimg}`}
          width={40}
          height={40}
          alt=""
          className="rounded-full h-10 mr-3"
        />
        <div className="-ml-4">
          <h3 className="text-gray-600 text-sm font-semibold -mb-1 ">
           {name}
          </h3>
          <span className="text-[12px] text-gray-500 ">{consultingtype} </span>
        </div>
      </div>
      <p className="text-xs">{time}</p>
    </div>
  );
};

