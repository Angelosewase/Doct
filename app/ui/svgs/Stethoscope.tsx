import React from "react";

const Stethoscope = ({color}:{color:string}):React.ReactNode => {
  return (
    <>
      <svg
        id="Layer_1"
        height="20"
        viewBox="0 0 24 24"
        width="30"
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        stroke="#fff"
      >
        <path fill={color} d="m24 9a3 3 0 1 0 -4 2.816v4.184a6 6 0 0 1 -12 0v-.08a7.006 7.006 0 0 0 6-6.92v-4a5.006 5.006 0 0 0 -5-5 1 1 0 0 0 0 2 3 3 0 0 1 3 3v4a5 5 0 0 1 -10 0v-4a3 3 0 0 1 3-3 1 1 0 0 0 0-2 5.006 5.006 0 0 0 -5 5v4a7.006 7.006 0 0 0 6 6.92v.08a8 8 0 0 0 16 0v-4.184a3 3 0 0 0 2-2.816zm-3 1a1 1 0 1 1 1-1 1 1 0 0 1 -1 1z" />
      </svg>
    </>
  );
};

export default Stethoscope;
