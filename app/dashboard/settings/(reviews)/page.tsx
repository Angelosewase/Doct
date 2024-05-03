import React from "react";
import Review from "@/app/ui/settings/review";
import { reviews } from "@/app/lib/placeholderdata";

const Page = () => {
  return (
    <div className="mt-4">
      <h1 className="ext-lg font-semibold text-gray-500">Reviews </h1>
      <div>
        {reviews.map((review, idx) => (
          <Review {...review} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Page;
