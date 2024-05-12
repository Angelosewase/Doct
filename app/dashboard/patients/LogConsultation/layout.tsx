"use client";

import React from "react";
import PatientsDisplay from "@/app/ui/patients/Logconsultation/patientdisplay";
import { useParams } from "next/navigation";

const layout = ({children}:{children:React.ReactNode}) => {
const {PatientId} = useParams()

  return(
    <>
    <div>
        <PatientsDisplay id={ PatientId } />
    </div>
    <div>
    {children}
    </div>

  </>);
};

export default layout;
