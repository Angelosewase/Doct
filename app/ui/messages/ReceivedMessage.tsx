import Image from "next/image";
import React from "react";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";
import { chatMessage } from "@/app/lib/definitions";

const ReceivedMessage = ({chatmessage,time,profileImage}:chatMessage) => {
  return (
    <>
      <div className=" flex  items-end max-w-80 my-1">
        <Image
          src={profileImage ||""}
          alt=""
          width={40}
          height={50}
          className="rounded-full mx-2 h-9 mb-1"
        />
        <div className="flex flex-col items-start">
          <p className="border-2 w-full rounded-tl-lg rounded-br-lg rounded-tr-lg px-2 py-1 text-gray-600  flex items-center justify-center">
          {chatmessage}
          </p>
          <span className="text-[9px] text-gray-400">20/{time}</span>
        </div>
        <ChevronDoubleRightIcon className="w-5 my-auto text-gray-500 ml-1"/>
      </div>
    </>
  );
};

export default ReceivedMessage;
