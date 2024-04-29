"use client"

import React from "react";
import NavLink from "./Nav-links";
import { navlink } from "@/app/lib/definitions";
import Image from "next/image";
import { Bars3Icon } from "@heroicons/react/24/outline";

const navigationData: navlink[] = [
  { icon: "overview", description: "Overview" },
  { icon: "appointment", description: "Appointments" },
  { icon: "patients", description: "Patients" },
  { icon: "schedule", description: "Schedule Timings" },
  { icon: "payment", description: "Payments" },
  { icon: "message", description: "Messages" },
  { icon: "blog", description: "Blog" },
  { icon: "settings", description: "Settings" },
];
const Sidenav = () => {
    const [click,setClick] = React.useState(false)
  return (
    <>
    <button className="fixed top-1 left-1 md:hidden bg-gray-100 rounded-full p-1" onClick={()=>{
      setClick(prev => !prev)
    }}>
      <Bars3Icon  className="text-gray-500  h-6 w-6 mt-1"/>
    </button>

    <div className={`fixed md:top-0 bg-white top-10 bottom-0 w-[215px] ${click? "":"hidden"} md:block z-10`} >
        <Image
          src={"/logo.png"}
          alt="logo icon"
          width={80}
          height={80}
          className="ml-4 mb-16 mt-6 hidden md:inline-block w-auto h-auto"
        />
        {navigationData.map((navitem, idx) => (
          <NavLink {...navitem} key={idx} />
        ))}
      </div>
      </>
  );
};

export default Sidenav;
