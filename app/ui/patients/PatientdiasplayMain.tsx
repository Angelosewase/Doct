import React from "react";
import Image from "next/image";
import { Actions } from "./MoreAboutPatient";
import { patient } from "@/app/lib/definitions";

const PatientdisplayMain = ({
  profileImg,
  names,
  patientId,
  date,
  gender,
  disease,
  status,
  payment,
}: patient) => {
  return (
    <>
      <div className=" w-[95%] grid grid-cols-8 bg-white shadow-sm rounded  py-1 mt-2 items-center justify-items-center">
        <div className=" flex items-center gap-2 text-sm justify-self-start ml-5">
          <Image
            src={profileImg}
            width={40}
            height={40}
            alt=""
            className="h-10  rounded-full"
          />
          {names}
        </div>
        <div>{patientId}</div>
        <div>{date}</div>
        <div>{gender}</div>
        <div>{disease}</div>
        <div>{status}</div>
        <div>{payment}</div>
        <div className="justify-self-center">
          <Actions />
        </div>
      </div>
    </>
  );
};

export default PatientdisplayMain;
