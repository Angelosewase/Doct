"use client";

import React from "react";
import {
  MagnifyingGlassIcon,
  QuestionMarkCircleIcon,
  BellIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { usePathname } from "next/navigation";

const PagesTop = () => {
  const path = usePathname()!==("/dashboard/messages")
  return (
    path && (
      <div className="static top-0 right-0  pt-1 flex  justify-end md:justify-between  mx-5">
        <label className="md:flex hidden">
          <MagnifyingGlassIcon className="w-5 text-slate-500 " />
          <input
            type="text"
            name="searchField"
            id="searchField"
            className="bg-gray-50 text-slate-700 py-2 px-2 text-xs outline-none w-60"
            placeholder="Search Appointments,patients etc"
          />
        </label>
        <div className="flex gap-3 mr-2">
          <QuestionMarkCircleIcon className="w-5 text-slate-500 " />
          <BellIcon className="w-5 text-slate-500 " />
          <div className="flex gap-1">
            <Image
              src={"/doctor.jpeg"}
              alt="profile picture"
              className="rounded-full w-10 h-10"
              width={50}
              height={60}
            />
            <div className="fle flex-col ">
              <h4 className="text-sm font-bold  -mb-1.5">Stephen Conley</h4>
              <span className="text-xs text-gray-500">Cardiologist</span>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default PagesTop;
