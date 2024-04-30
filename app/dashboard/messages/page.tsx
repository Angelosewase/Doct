import React from "react";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";

const Page = () => {
  return (
    <div className="hidden md:block    md:ml-[250px] lg:ml-[300px]">
      <div className="flex  flex-col items-center mt-[35%] text-gray-600  font-sans italic">
        <ChatBubbleLeftRightIcon className="h-12 w-12 text-gray-400" />
        <p className="">Connect instantly with Doct!</p>
        <p>
          Chat, share, and stay close with your patients all in one place. Get
          started now!
        </p>
      </div>
    </div>
  );
};

export default Page;
