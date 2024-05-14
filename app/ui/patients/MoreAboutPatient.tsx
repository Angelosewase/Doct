"use client";
import React from "react";
import {
  EllipsisVerticalIcon,
  EllipsisHorizontalIcon,
  FolderMinusIcon,
  ChatBubbleLeftIcon,
} from "@heroicons/react/24/outline";
import Stethoscope from "../svgs/Stethoscope";
import Link from "next/link";

const MoreAboutPatient = () => {
  const [showmore, setShowmore] = React.useState(false);
  return (
    <>
      <div className="relative">
        <EllipsisVerticalIcon
          height={20}
          className="text-black"
          onClick={() => {
            setShowmore((prev) => !prev);
          }}
        />
        {showmore ? (
          <div className="flex flex-col absolute bottom-0  right-5 gap-1 shadow   rounded-md bg-white">
            <button className="text-sm flex jsutify-center text-nowrap gap-1 px-2 py-1 hover:bg-gray-100">
              <FolderMinusIcon height={20} className="text-black " />
              view details
            </button>
            <button className="text-sm flex gap-1 px-2 py-1 hover:bg-gray-100">
              <ChatBubbleLeftIcon height={20} className="text-black " />
              Message
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default MoreAboutPatient;

export const Actions = (props: { id: string }) => {
  const [showmore, setShowmore] = React.useState(false);
  return (
    <>
      <div className="relative" onClick={() => {
            setShowmore((prev) => !prev);
          }}>
        <EllipsisHorizontalIcon
          width={20}
          className="text-black"
          
        />
        {showmore ? (
          <div className="flex flex-col absolute bottom-0  left-7 gap-1 shadow   rounded-md bg-white">
            <Link
              className="text-sm flex jsutify-center text-nowrap gap-1 px-2 py-1 hover:bg-gray-100"
              href={`/dashboard/patients/LogConsultation/${props.id}`}
            >
              <Stethoscope color="#000000" />
              log consulting
            </Link>
            <button className="text-sm flex gap-1 px-2 py-1 hover:bg-gray-100">
              <ChatBubbleLeftIcon height={20} className="text-black " />
              Message
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
