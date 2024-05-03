"use client";

import React from "react";
import Image from "next/image";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import { chatMessage } from "@/app/lib/definitions";

const SentMessage = ({chatmessage,time}:chatMessage) => {
    const [more ,setMore ] = React.useState(false)
  return (
    <>
      <div className="self-end relative">
        {more && (
        <div className="absolute top-10 py-2 bg-white shadow-md mt-2 w-20 rounded-lg">
          <p className="hover:bg-gray-50 px-2">Reply</p>
          <p className="hover:bg-gray-50 px-2">forward</p>
          <p className="hover:bg-gray-50 px-2">delete</p>
        </div>
        )}
        <div className=" flex  items-end max-w-80 justify-end my-1 self-end ">
          <EllipsisHorizontalIcon className="w-6 my-auto text-gray-500 mr-1" onClick={()=>{
            setMore(!more)
          }}/>
          <div className="flex flex-col items-end ">
            <p className="bg-blue-400 w-full rounded-tl-lg rounded-bl-lg rounded-tr-lg px-3  py-1.5 text-white flex items-center justify-center max-w-60 text-wrap text-clip break-all">
              {chatmessage}
            </p>
            <span className="text-[9px] text-gray-400">{time}</span>
          </div>

          <Image
            src={"/doctor.jpeg"}
            alt=""
            width={40}
            height={50}
            className="rounded-full mx-2 h-9 mb-1"
          />
        </div>
      </div>
    </>
  );
};

export default SentMessage;
