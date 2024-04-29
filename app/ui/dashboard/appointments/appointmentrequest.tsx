"use client";

import React from "react";
import Image from "next/image";
import { XMarkIcon, CheckIcon } from "@heroicons/react/24/outline";
import { appointmentrequestdata } from "@/app/lib/definitions";
import { formatDateTime } from "@/app/lib/utils";

const reducer = (
  state: { isreplied: boolean; isAccepted: boolean },
  action: { type: string }
) => {
  switch (action.type) {
    case "accepted":
      return {
        isreplied: true,
        isAccepted: true,
      };
      break;
    case "denied":
      return {
        isreplied: true,
        isAccepted: false,
      };
      break;

    default:
      return { ...state };
      break;
  }
};

const AppointementRequest = ({
  profileimg,
  name,
  gender,
  date,
}: appointmentrequestdata) => {
  const [state, dispatch] = React.useReducer(reducer, {
    isreplied: false,
    isAccepted: false,
  });

 const formatedDate = formatDateTime(date)
  return (
    <>
      <div className="flex justify-between items-center my-4  w-[300px] md:w-[330px] mx-auto ">
        <div className="flex gap-3">
          <Image
            src={`${profileimg}`}
            width={40}
            height={40}
            alt=""
            className="rounded-full h-10"
          />
          <div>
            <h3 className="text-gray-600 text-sm font-semibold -mb-1 ">
              {name}
            </h3>
            <span className="text-[12px] text-gray-500 ">{gender}, </span>
            <span className="text-[12px] text-gray-500">{formatedDate}</span>
          </div>
        </div>
        {!state.isreplied ? (
          <div className="flex gap-1 ">
            <button
              className=" border-2 h-5 border-indigo-400 rounded"
              onClick={() => {
                dispatch({ type: "accepted" });
              }}
            >
              <CheckIcon className="w-4 text-indigo-400" />
            </button>
            <button
              className="border-2 h-5 border-red-400 rounded"
              onClick={() => {
                dispatch({ type: "denied" });
              }}
            >
              <XMarkIcon className="w-4  text-red-400" />
            </button>
          </div>
        ) : (
          <div>
            {state.isAccepted ? (
              <button className="bg-blue-200 text-blue-500 text-xs rounded p-1">
                confirmed
              </button>
            ) : (
              <button className="bg-red-200 text-red-500 text-xs rounded p-1">
                Declined
              </button>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default AppointementRequest;
