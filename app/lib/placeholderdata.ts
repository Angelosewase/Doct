import {
  Statsprops1,
  appointmentrequestdata,
  categoryStats,
  appointments,
  Patientsdata,
  navlink,
  message,
  gender,
  chat,
  sentMessage,
  chatMessage,
  user,
  settingsLink,
  reviewsdatatype,
  patient,
  patientsfacts
} from "@/app/lib/definitions";
import { handleMessages } from "./utils";

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

export const appointmentsData: appointments[] = [
  {
    profileimg: "/profile.jpg",
    name: "Sewase Angel",
    consultingtype: "Clinic consulting",
    time: "10:30 am",
  },
];

export const patientsdata: Patientsdata[] = [
  {
    profileimg: "/profile.jpg",
    name: "John Smith",
    visitId: "ASDKJ 5879",
    gender: "Male",
    disease: "Diabetes",
    Date: "2023/12/05",
    status: "Out-Patient",
  },
  {
    profileimg: "/profile.jpg",
    name: "John Smith",
    visitId: "ASDKJ 5879",
    gender: "Male",
    disease: "Diabetes",
    Date: "24/5/2007",
    status: "Out-Patient",
  },
];

export const navigationData: navlink[] = [
  { icon: "overview", description: "Overview", path: "/overview" },
  { icon: "appointment", description: "Appointments", path: "/appointments" },
  { icon: "patients", description: "Patients", path: "/patients" },
  { icon: "schedule", description: "Schedule Timings", path: "/schedules" },
  { icon: "payment", description: "Payments", path: "/payments" },
  { icon: "message", description: "messages", path: "/messages" },
  { icon: "blog", description: "Blog", path: "/blog" },
  { icon: "settings", description: "Settings", path: "/settings" },
];

const male = gender.Male;

export const messages: Array<message> = [
  {
    author: {
      id: 1,
      names: "John  Smith",
      profileImg: "/profile.jpg",
      gender: "Male",
    },
    time: "2024/06/12",
    content: "hello",
  },
  {
    author: {
      id: 2,
      names: "Will smith",
      profileImg: "/profile1.jpg",
      gender: "Male",
    },
    time: "2024/06/14",
    content: "What can I do to improve my healthy",
  },
];

export const chats: Array<chat> = handleMessages(messages);

export const sentMesssages: Array<sentMessage> = [
  {
    receiverid: 1,
    time: "2024/06/15",
    contents: [
      {
        chatmessage: "Hello, how can we help You ?",
        time: "2024/06/12",
        type: "sent",
      },
    ],
  },
  {
    receiverid: 2,
    time: "2024/06/15",
    contents: [
      {
        chatmessage:
          "You sholud consider eating healthy and exercising regulary",
        time: "2024/06/17",
        type: "sent",
      },
    ],
  },
];

export const users: user[] = [
  {
    id: 1,
    names: "john smith",
    profileImg: "/profile.jpg",
    gender: "Male",
  },
  {
    id: 2,
    names: "Will smith",
    profileImg: "/profile1.jpg",
    gender: "Female",
  },
];

export const settingslinksdata: Array<settingsLink> = [
  {
    to: "/dashboard/settings/profile",
    text: "My profile",
  },
  {
    to: "/dashboard/settings/change password",
    text: "Change password",
  },
  {
    to: "/dashboard/settings/notifications",
    text: "Notifications",
  },
  {
    to: "/dashboard/settings",
    text: "Reviews",
  },
];

export const reviews: reviewsdatatype[] = [
  {
    profileImg: "/profile.jpg",
    names: "John Smith",
    occupation: "Engineer",
    date: "08 June 2024",
    stars: 5,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    profileImg: "/profile.jpg",
    names: "John Smilga",
    occupation: "Architect",
    date: "08 May 2024",
    stars: 5,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export const PatientsData:Array<patient>=[
  {
    profileImg:"/profile.jpg",
    names:"John Smith",
    patientId:"y478y470",
    date:"June 20/2024",
    dob:"June 20/2024",
    gender:"Male",
    age:24,
    disease:"Diabetes",
    status:"In-treatment",
    payment:"Paypal",
    email:"JohnSmith@gmail.com",
    phone:"+250 788762654",
    tests:[
      {
        max:100,
        value:70,
        record:"Blood pressure",
        measuredRecord:"141/90mhg",
        color:"bg-red-50",
        dataColor:"bg-red-500"
      },{
        max:100,
        value:10,
        record:"Body Temperature",
        measuredRecord:"29 K",
        color:"bg-indigo-50",
        dataColor:"bg-indigo-500"
      },{
        max:100,
        value:40,
        record:"Blood weight",
        measuredRecord:"78kg",
        color:"bg-blue-50",
        dataColor:"bg-blue-500"
      },{
        max:100,
        value:30,
        record:"Blood height",
        measuredRecord:"5.6 inch",
        color:"bg-yellow-50",
        dataColor:"bg-yellow-500"
      }
    ]
  },  {
    profileImg:"/profile1.jpg",
    names:"Annette Black",
    patientId:"quhgr85458",
    date:"May 20/2024",
    dob:"May 20/2024",
    gender:"Female",
    age:22,
    disease:"Cancer",
    status:"Out-patient",
    payment:"Private cash",
    email:"WillSmith@gmail.com",
    phone:"+250 788790265",
    tests:[
      {
        max:100,
        value:70,
        record:"Blood pressure",
        measuredRecord:"141/90mhg",
        color:"bg-red-50",
        dataColor:"bg-red-500"
      },{
        max:100,
        value:10,
        record:"Body Temperature",
        measuredRecord:"29 K",
        color:"bg-indigo-50",
        dataColor:"bg-indigo-500"
      },{
        max:100,
        value:40,
        record:"Blood weight",
        measuredRecord:"78kg",
        color:"bg-blue-50",
        dataColor:"bg-blue-500"
      },{
        max:100,
        value:30,
        record:"Blood height",
        measuredRecord:"5.6 inch",
        color:"bg-yellow-50",
        dataColor:"bg-yellow-500"
      }
    ]
  },
]

export const patientfactsdata:Array<patientsfacts>=[{
  max:100,
  value:70,
  record:"Blood pressure",
  measuredRecord:"141/90mhg",
  color:"bg-red-50",
  dataColor:"bg-red-500"
},{
  max:100,
  value:10,
  record:"Body Temperature",
  measuredRecord:"29 K",
  color:"bg-indigo-50",
  dataColor:"bg-indigo-500"
},{
  max:100,
  value:40,
  record:"Blood weight",
  measuredRecord:"78kg",
  color:"bg-blue-50",
  dataColor:"bg-blue-500"
},{
  max:100,
  value:30,
  record:"Blood height",
  measuredRecord:"5.6 inch",
  color:"bg-yellow-50",
  dataColor:"bg-yellow-500"
}]