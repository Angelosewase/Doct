import React from "react";

const AddPatient = ({ togglevisiblity }: { togglevisiblity: Function }) => {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center">
      <div className="bg-white opacity-100 h-[80%] shadow-sm rounded-xl p-5 x-20">
        <div className="flex justify-between  pb-3 border-b-2 border-gray-100 ">
          <h1 className=" text-xl font-semibold ">Add new patient</h1>
          <button className="text-lg" onClick={() => togglevisiblity(false)}>
            {" "}
            X{" "}
          </button>
        </div>

        <div className="flex flex-wrap gap-2 mt-5">
          <label className="flex flex-col text-gray-700 text-sm gap-1">
            First Name
            <input
              type="text"
              className="outline-none px-2  py-2 border-[1px] border-slate-100 rounded-md placeholder:text-gray-500 w-56"
              placeholder="Angel"
            />
          </label>
          <label className="flex flex-col text-gray-700 text-sm gap-1">
            Last name
            <input
              type="text"
              placeholder="Sewase"
              className="px-2  py-2 border-[1px] border-slate-100 rounded-md placeholder:text-gray-500 w-56 outline-none"
            />
          </label>
        </div>

        <div className="mt-5 w-full ">
          <label className="flex flex-col w-full text-gray-700 text-sm gap-1">
            Location
            <input type="text" className="bg-white outline-none  px-2 py-3 border-gray-100 rounded-md border" placeholder="2972 Westheimer RD .santa Illinios 85489" />
          </label>
        </div>

        <div className="flex gap-2 mt-4 flex-wrap">
          <label className="flex flex-col text-gray-700 text-sm gap-1">
            Patient email
            <input
              type="email"
              className="px-2  py-2 border-[1px] border-slate-100 rounded-md placeholder:text-gray-500 w-56 outline-none"
              placeholder="exampl@email.com"
            />
          </label>
          <label className="flex flex-col text-gray-700 text-sm gap-1">
            patient number
            <div>
              <select className="w-16 inline-block mr-1 h-8">
                <option>+250</option>
                <option>+88</option>
              </select>
              <input
                type="tel"
                className="px-2  py-2 border-[1px] border-slate-100 rounded-md placeholder:text-gray-500  w-40 outline-none"
                placeholder="788568965"
              />
            </div>
          </label>
        </div>

        <label className="flex flex-col mt-5 text-gray-500 text-sm gap-2  rounded-lg">
          Reason
          <textarea className="bg-white h-28 outline-none p-2 border "></textarea>
        </label>

        <div className="mt-5 flex gap-4 p-2 flex-wrap">
          <button disabled className="bg-indigo-500 text-white py-2 px-20 rounded-lg">Save</button>
          <button onClick={() => togglevisiblity(false)} className="border border-indigo-300 py-2 px-20 rounded-lg">cancel</button>
        </div>
      </div>
    </div>
  );
};

export default AddPatient;
