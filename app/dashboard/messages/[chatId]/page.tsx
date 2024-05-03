"use client";
import { useParams } from "next/navigation";
import React from "react";
import { chats, sentMesssages, users } from "@/app/lib/placeholderdata";
import Image from "next/image";
import {
  HeartIcon,
  InformationCircleIcon,
  FaceSmileIcon,
  MicrophoneIcon,
  PaperClipIcon,
  PaperAirplaneIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/outline";

import SentMessage from "@/app/ui/messages/SentMessage";
import ReceivedMessage from "@/app/ui/messages/ReceivedMessage";
import { groupChats, sortbytime } from "@/app/lib/utils";
import Link from "next/link";

const Page = () => {
  const { chatId } = useParams();
  const user = users.find((user) => Number(chatId) === user.id);
  return (
    <div className="bg-white ml-[250px] lg:ml-[300px] lg:mr-4  border-x-2 h-[97vh] border-b-2 relative ">
      <div className="flex justify-between border-b-2 py-4 px-2 ">
        <div className="flex gap-1">
          <Link href={"/dashboard/messages"}>
            <ArrowLeftIcon className="w-6 text-gray-500 md:hidden" />
          </Link>
          <Image
            src={user?.profileImg || ""}
            alt=""
            width={40}
            height={50}
            className="rounded-full mx-2 h-10 "
          />
          <div>
            <p className="-mb-1  text-gray-500">{user?.names}</p>
            <p className="text-sm text-blue-400">online</p>
          </div>
        </div>
        <div className="flex gap-1">
          <HeartIcon className="w-6 text-gray-500" />
          <InformationCircleIcon className="w-6 text-gray-500" />
        </div>
      </div>

      <div>
        <Messagedisplay profileImg={user?.profileImg || ""} />
      </div>

      <div className="absolute bottom-2 w-full flex items-center justify-center gap-3">
        <div className="flex border-2 rounded-md p-4 w-[80%] ">
          <FaceSmileIcon className="w-6 text-gray-500  " />
          <input
            type="text"
            placeholder="Type a message..."
            className="w-[90%] outline-none ml-1"
          />
          <PaperClipIcon className="w-6 text-gray-500 mr-1" />
          <MicrophoneIcon className="w-6 text-gray-500 " />
        </div>
        <button className="w-9 h-9 bg-indigo-600 rounded-full flex items-center justify-center">
          <PaperAirplaneIcon className="w-6 text-gray-100 -rotate-45" />
        </button>
      </div>
    </div>
  );
};

export default Page;

const Messagedisplay = ({ profileImg }: { profileImg: string }) => {
  const { chatId } = useParams();
  const chat = chats.find((chat) => chat.Authorid === Number(chatId));
  const SentMessages = sentMesssages.find(
    (message) => message.receiverid === Number(chatId)
  );

  let groupedchats;
  if (chat && SentMessages) {
    groupedchats = groupChats(chat, SentMessages);
  }
  if (groupedchats) {
    groupedchats = sortbytime(groupedchats);
  }

  return (
    <>
      <div className="flex flex-col ">
        {groupedchats?.map((chat) => {
          if (chat.type === "received") {
            return <ReceivedMessage {...chat} profileImage={profileImg} />;
          } else {
            return <SentMessage {...chat} />;
          }
        })}
      </div>
    </>
  );
};
