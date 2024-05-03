import React from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/outline";
import { reviewsdatatype } from "@/app/lib/definitions";

const Review = (props: reviewsdatatype) => {
  return (
    <div className="max-w-[800px] my-2 bg-white px-5 rounded-lg shadow-sm py-3">
      <div className="flex justify-between mb-2 py-1">
        <div className="flex">
          <Image
            src={props.profileImg}
            width={40}
            height={40}
            alt=""
            className="rounded-full mr-3"
          />
          <div className="flex flex-col text-gray-500 justify-center ">
            <span className="font-semibold text-sm">{props.names}</span>
            <span className="text-xs ">{props.occupation}</span>
          </div>
        </div>
        <div className="flex flex-col items-end gap-1">
          <div className="flex gap-1">
            <Stars numberofstars={props.stars}/>
          </div>
          <span className="text-xs text-gray-500">{props.date}</span>
        </div>
      </div>
      <div className="text-sm text-gray-500">{props.content}.</div>
    </div>
  );
};

export default Review;

const Stars = (props:{numberofstars:number}) => {
  let stars: Array<React.ReactNode> = [];
  for (let index = 0; index < props.numberofstars; index++) {
    stars.push(
      <StarIcon className="border-none fill-orange-500 text-orange-600 w-3" />
    );
  }
return stars;
};
