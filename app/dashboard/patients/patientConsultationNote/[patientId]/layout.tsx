"use client";

import React from "react";
import PatientsDisplay from "@/app/ui/patients/Logconsultation/patientdisplay";
import { useParams } from "next/navigation";

const layout = ({children}:{children:React.ReactNode}) => {
 const {patientId} = useParams()
console.log(patientId)
  return(
    <>
    <div>
        <PatientsDisplay id={ patientId } />
    </div>
    <div>
    {children}
    </div>

  </>);
};

export default layout;
