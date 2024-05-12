"use client";
import clsx from "clsx";
import { navlink } from "@/app/lib/definitions";
import React from "react";
import {
  DocumentChartBarIcon,
  CalendarIcon,
  Cog6ToothIcon,
  CreditCardIcon,
  EnvelopeIcon,
  ClockIcon,
  UserCircleIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const icons = {
  overview: DocumentChartBarIcon,
  appointment: CalendarIcon,                                           
  patients: UserCircleIcon,
  schedule: ClockIcon,
  blog: DocumentTextIcon,
  settings: Cog6ToothIcon,
  payment: CreditCardIcon,
  message: EnvelopeIcon,
};
import { usePathname } from "next/navigation";

const NavLink = (props: navlink) => {
  const [hovered, setIsHovered] = React.useState(false);
  const Icon = icons[props.icon];
  const path = usePathname().includes(props.path)  
  
  return (
    <div
      className={clsx( ' hover:bg-blue-300 hover:text-white py-2 px-2 rounded  mx-2 mt-2 transition text-gray-700 ',
      {"bg-black":path,"text-white":path})}
      onMouseEnter={ ()=>{setIsHovered(true)}}
      onMouseLeave={()=>{setIsHovered(false)}}
    >
      <Link
        href={`/dashboard${props.path}`}
        className="flex gap-1  items-center"
      >
        <Icon
          className={clsx(`h-6 w-6  text-gray-700`,{ "text-white":hovered||path})}
        />
        <p>{props.description}</p>
      </Link>
    </div>
  );
};

export default NavLink;
