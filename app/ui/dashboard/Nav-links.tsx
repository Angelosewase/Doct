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

const NavLink = (props: navlink) => {
  const [active, setIsactive] = React.useState(false);
  const Icon = icons[props.icon];
  return (
    <div
      className=" hover:bg-black hover:text-white py-2 px-2 rounded  mx-2 mt-2 transition text-gray-700"
      onMouseEnter={() => {
        setIsactive(true);
      }}
      onMouseLeave={() => {
        setIsactive(false);
      }}
    >
      <Link href={`/dashboard/${props.icon}`} className="flex gap-1  items-center">
        <Icon
          className={clsx(`h-6 w-6  text-gray-700 ${active && "text-white"}`)}
        />
        <p>{props.description}</p>
      </Link>
    </div>
  );
};

export default NavLink;


