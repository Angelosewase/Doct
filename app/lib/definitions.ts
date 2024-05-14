export type navlink ={
    icon:"overview" |"appointment"|"patients"|"schedule"|"blog"|"settings"|"payment"|"message",
    description:string,
    path:string
    
}

export type Statsprops1={
  icon :"clinicConsulting" |"appointment"|"patients"|"videoConsulting",
  color :"clinicConsulting" |"appointment"|"patients"|"videoConsulting",
  facts:number,
  description:string
}

export type appointmentrequestdata={
   profileimg:string,
   name:string,
   gender:"Male"|"Female"|"nonBinary"|"bisexual"
   date:Date
}

export type categoryStats ={
  category:"Male"|"Female"|"nonBinary"|"bisexual"|"Children",
  number:number,
  color:string
}

export type appointments={
  profileimg:string,
  name:string,
  consultingtype:"Clinic consulting"|"Video consulting"
  time:string
}

export type Patientsdata={
profileimg:string,
name:string,
visitId:string,
Date:string,
gender:"Male"|"Female"|"nonBinary"|"bisexual",
disease:string,
status:string

}

export enum gender {
  Male ="Male",
  Female ="Female",
  bisexual ="bisexual",
  nonBinary="nonBinary"
}
export type user={
  id:number
  names:string,
  profileImg:string,
  gender:"Male"|"Female"|"nonBinary"|"bisexual",
  age?:number,
  email?:string,
  phone?:string,
  address?:string,
}

export type message ={
  author:user,
  time:string,
  content:string
}
export type chatMessage={
chatmessage:string,
time:string,
type:"sent"|"received"
profileImage?:string
}

export type chat={
  Authorid:number,
  AuthorProfileImage:string,
  AuthorName:string,
  messages:chatMessage[],
  time:string
  
}

export type sentMessage={
  receiverid:number, 
  time:string,
  contents:chatMessage[]
}

export type settingsLink={
  to:string,
  text:string
}

export type reviewsdatatype= {
  profileImg:string,
  names:string,
  occupation:string,
  date:string,
  stars:number,
  content:string
}

export type patient={
  profileImg:string,
  names:string,
  patientId:string,
  date:string,
  dob?:string,
  gender:"Male"|"Female"|"nonBinary"|"bisexual",
  age?:number
  disease:string,
  status:"In-treatment"|"Out-patient",
  payment:"Private cash"|"Paypal"|"Payneer",
  email?:string,
  phone?:string,
  tests?:Array<patientsfacts>

}


export const bgcolors ={
    red:"bg-red-50",
    blue:"bg-blue-50",
    yellow:"bg-yellow-50",
    indigo:"bg-purple-50",
}

export type patientsfacts ={
  max:number, 
  value:number, 
  record:string,
  measuredRecord:string,
  color: "bg-red-50"|"bg-blue-50"|"bg-yellow-50"|"bg-indigo-50",
  dataColor:"bg-red-500"|"bg-blue-500"|"bg-yellow-500"|"bg-indigo-500"
}

export type healthtracker ={
  monitoredTracker:string,
  Additions:string |null,
  reportingTime:string,
  FrequencyReview:string,

}

export type patientConsultationPlanData={
  patientId:string,
  consultationMethod:string,
  location:string
  date:string,
  time:string,
  DoctorName:string,
  testsDescription:string,
  ConsulationSummary:string,
  Amount:number,
  healthTrackers:Array<healthtracker>
}
