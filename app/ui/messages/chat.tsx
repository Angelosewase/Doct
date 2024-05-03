"use client";
import React from "react";
import { message } from "@/app/lib/definitions";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";


const Chat = ({ author, time, content }: message) => {
  return (
    <Link href={`/dashboard/messages/${author.id}`}>
    <div className="flex  -ml-1 hover:bg-blue-50  px-2 bg-white py-2  transition my-1">
      <Image
        src={author.profileImg}
        alt=""
        width={40}
        height={40}
        className='rounded-full mx-2 h-10 '
      />
      <div className=" text-gray-500 w-40">
        <p className=" text-sm font-thick text-gray-800">{author.names}</p>
        <p className="text-xs text-gray-400 truncate ">{content}</p>
      </div>
      <span className="text-sm text-gray-400">{time}</span>
    </div>
    </Link>
  );
};

export default Chat;
