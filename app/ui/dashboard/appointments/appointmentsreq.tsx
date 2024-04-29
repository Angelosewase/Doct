import React from "react";
import Image from "next/image";
import {ChevronRightIcon} from "@heroicons/react/24/outline";
import Link from "next/link";
import AppointementRequest from "./appointmentrequest";
import { appointmentrequest } from "@/app/lib/placeholderdata";

const Appointmentreqlist = () => {
  return (
    <div className=" md:ml-0">
      <div className="w-[370px] pl-4 md:pl-0">
        <h1 className="text-md font-semibold mb-4 inline-block md:mr-28 mr-20 ">
          Appointment requests
        </h1>
        <span className="mr-1">
          <Link
            href={"/appointements"}
            className="text-xs text-blue-400 hover:underline"
          >
            View all
          </Link>
        </span>
        <ChevronRightIcon className="w-4  text-blue-400 inline-block" />
      </div>

      <div className="bg-white rounded inline-block w-[370px] ">
       {appointmentrequest.map((req,idx)=><AppointementRequest {...req} key={idx}/>)}
      
      </div>
    </div>
  );
};

export default Appointmentreqlist;






