"use client";
import {
  EllipsisVerticalIcon,
  EllipsisHorizontalIcon,
  FolderMinusIcon,
  ChatBubbleLeftIcon,
} from "@heroicons/react/24/outline";

import React from "react";

const MoreAboutPatient = () => {
 const [showmore , setShowmore] = React.useState(false)
  return (
    <>
    <div className="relative">
      <EllipsisVerticalIcon height={20} className="text-black" onClick={()=>{
        setShowmore(prev => !prev)
      }}/>
     {showmore ? ( <div className="flex flex-col absolute bottom-0  right-5 gap-1 shadow   rounded-md bg-white">
        <button className="text-sm flex jsutify-center text-nowrap gap-1 px-2 py-1 hover:bg-gray-100">
          <FolderMinusIcon height={20} className="text-black " />view details
        </button>
        <button className="text-sm flex gap-1 px-2 py-1 hover:bg-gray-100">
          <ChatBubbleLeftIcon height={20} className="text-black " />Message
        </button>
      </div>):""}
      </div> 
    </>
  );
};

export default MoreAboutPatient;

export const Actions =()=>{

  const [showmore , setShowmore] = React.useState(false)
  return (
    <>
    <div className="relative">
      <EllipsisHorizontalIcon width={20} className="text-black" onClick={()=>{
        setShowmore(prev => !prev)
      }}/>
     {showmore ? ( <div className="flex flex-col absolute bottom-0  left-7 gap-1 shadow   rounded-md bg-white">
        <button className="text-sm flex jsutify-center text-nowrap gap-1 px-2 py-1 hover:bg-gray-100">
          <FolderMinusIcon height={20} className="text-black " />log consulting
        </button>
        <button className="text-sm flex gap-1 px-2 py-1 hover:bg-gray-100">
          <ChatBubbleLeftIcon height={20} className="text-black " />Message
        </button>
      </div>):""}
      </div> 
</>)}
