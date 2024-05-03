"use client";
import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Chat from "./chat";
import { messages } from "@/app/lib/placeholderdata";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const MessagesSideNav = () => {

  return (
    <div className={"w-full md:w-[250px] lg:w-[300px]   absolute top-0 bottom-0 flex flex-col  pt-9  border-gray-100"}>
      <h1 className="font-semibold text-lg mb-5 ml-3">Messages</h1>
      <label className="flex border-2  rounded  mr-2 bg-white mb-4 ml-3">
        <MagnifyingGlassIcon className="w-6 text-slate-500 mx-2" />
        <input
          type="text"
          className=" text-slate-700 py-2  text-sm outline-none w-full rounded "
          placeholder="Search for messages"
        />
      </label>
      <select className="w-28 md:w-32 text-sm outline-none border-none py-1 rounded bg-gray-50 text-gray-500 font-semibold ml-3">
        <option value="" className="hover:bg-gray-300">Recent chats</option>
        <option value="">name </option>
      </select>
      <div className="w-full mt-3">
         {
          messages.map(message => <Chat {...message}/>)
         }
      </div>
    </div>
  );
};

export default MessagesSideNav;
