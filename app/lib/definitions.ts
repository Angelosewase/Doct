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
