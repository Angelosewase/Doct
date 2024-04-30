import { Stringifier } from "postcss"
import { CategoryStats } from "./placeholderdata"


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

