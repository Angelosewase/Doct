import {
  Statsprops1,
  appointmentrequestdata,
  categoryStats,
  appointments,
  Patientsdata
} from "@/app/lib/definitions";

export const statsdata: Statsprops1[] = [
  {
    icon: "appointment",
    color: "appointment",
    facts: 25.4,
    description: "Appointments",
  },
  {
    icon: "patients",
    color: "patients",
    facts: 166.3,
    description: "Total patients",
  },
  {
    icon: "clinicConsulting",
    color: "clinicConsulting",
    facts: 53.5,
    description: "Clinic consulting",
  },
  {
    icon: "videoConsulting",
    color: "videoConsulting",
    facts: 28.0,
    description: "Video consulting",
  },
];

const currenntDate = new Date();
export const appointmentrequest: appointmentrequestdata[] = [
  {
    profileimg: "/profile.jpg",
    name: "John Smith",
    gender: "Male",
    date: currenntDate,
  },
];

export const CategoryStats: categoryStats[] = [
  { category: "Male", number: 100, color: "bg-blue-500" },
  { category: "Female", number: 140, color: "bg-green-500" },
  { category: "Children", number: 200, color: "bg-orange-400" },
];

export const appointmentsData:appointments[]=[
  {profileimg:"/profile.jpg",name:"Sewase Angel",consultingtype:"Clinic consulting",time:"10:30 am"},
]

export const patientsdata:Patientsdata[]=[
{
profileimg:"/profile.jpg",
name:"John Smith",
visitId:"ASDKJ 5879",
gender:"Male",
disease:"Diabetes",
Date:'24/5/2007',
status:"Out-Patient"
},{
profileimg:"/profile.jpg",
name:"John Smith",
visitId:"ASDKJ 5879",
gender:"Male",
disease:"Diabetes",
Date:'24/5/2007',
status:"Out-Patient"
},
]


