"use client"

import React from "react";
import Image from "next/image";
import { PencilIcon, StarIcon } from "@heroicons/react/24/outline";
import { ProgressBar } from "@/app/ui/records_stats/charts";
import Link from "next/link";
import { settingsLink } from "@/app/lib/definitions";
import { settingslinksdata } from "@/app/lib/placeholderdata";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex gap-2 mx-5 md:ml-5 flex-wrap ">
        <div >
          <h1 className="text-lg font-bold">My profile </h1>
          <div className="flex flex-col w-[255px] py-8 items-center rounded-md bg-white shadow mt-8 md:mt-16">
            <Image
              src={"/doctor.jpeg"}
              width={96}
              height={96}
              alt=""
              className="rounded-full h-24 "
            />
            <h2 className="font-semibold text-gray-600 ">Dr. John Smith</h2>
            <span className="text-gray-500 mb-4">Cardiologist</span>
            <button className="bg-indigo-400 text-white flex gap-1 items-center py-2 px-3 rounded text-sm mb-4">
              <PencilIcon className="w-5 stroke-white" />
              Edit profile
            </button>
            <span className="text-gray-500 text-sm mb-2">146 stars</span>
            <div className="flex gap-1 mb-2">
              <StarIcon className="border-none fill-orange-500 text-orange-600 w-4" />
              <StarIcon className="border-none fill-orange-500 text-orange-600 w-4" />
              <StarIcon className="border-none fill-orange-500 text-orange-600 w-4" />
              <StarIcon className="border-none fill-orange-500 text-orange-600 w-4" />
              <StarIcon className="border-none fill-orange-500 text-orange-600 w-4" />
            </div>

            <div className="w-[150px]">
              <div className="flex justify-between mb-1">
                <span className="text-sm text-gray-400">Trust</span>
                <span className="text-sm text-gray-400">90%</span>
              </div>
              <ProgressBar value={70} max={80} color="bg-green-400"/>
            </div>
          </div>
        </div>

        <div className="mt-10 md:mt-[90px] lg:ml-10 ">
             <div className="flex text-xs md:text-base justify-evenly rounded items-center px-5 bg-white shadow  h-10 max-w-[600px]">
         {
          settingslinksdata.map(data =><SettingsElemet {...data} />)
         }
        </div>
        {children}
        </div>
      </div>
    </>
  );
}


const SettingsElemet =(props:settingsLink)=>{

  let active = usePathname().includes(props.to)
    return(
      <>
        <Link
            href={props.to}
            className={clsx(`hover:text-blue-400  transition  hover:border-blue-400 border-b-2 border-white`,{
              "text-blue-500 border-blue-400":active
            })}
          >
            {props.text}
          </Link>
      </>
    )
}
