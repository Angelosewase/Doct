import React from "react";
import { MagnifyingGlassIcon, ClockIcon ,PaperClipIcon ,DocumentIcon,CheckCircleIcon} from "@heroicons/react/24/outline";

const LogConsultation = () => {
  return (
    <form className="w-full">
      <div className=" w-full">

        <div className="flex gap-6 w-full flex-wrap ">
          <div className="flex flex-col text-sm text-gray-600 gap-1">
            Healthcare provider
            <label className="flex border rounded-md  bg-white px-2 w-[350px] md:w-[440px] justify-between font-semibold ">
              <input
                type="text"
                placeholder="Dr Angel"
                className="py-3 pr-4 pl-2 placeholder:text-gray-700 outline-none w-full"
              />
              <MagnifyingGlassIcon className="w-6" />
            </label>
          </div>

          <div className="flex flex-col text-sm text-gray-600 gap-1">
            Consulting Type
            <label className="flex  border rounded-md bg-white px-2 w-[350px] md:w-[440px] justify-between ">
              <select className="py-3 pr-8 pl-2 text- w-full outline-none font-semibold text-base">
                <option value="">Clinic consulting</option>
                <option value="">Video consulting</option>
                <option value="">Home consulting</option>
              </select>
            </label>
          </div>
        </div>

        <div className="flex gap-6 w-full flex-wrap">


          <div className="flex flex-col text-sm text-gray-600 gap-1 ">
            Patient name
            <label className="flex border rounded-md  bg-white px-2 w-[350px] md:w-[440px] justify-between font-semibold">
              <input
                type="text"
                placeholder="Dr Angel"
                className="py-3 pr-4 pl-2 placeholder:text-gray-700 outline-none w-full"
              />
              <MagnifyingGlassIcon className="w-6" />
            </label>
          </div>

          <div className="flex flex-col">
            Location
            <label className="flex  border rounded-md bg-white px-2 w-[350px] md:w-[440px] justify-between ">
              <select className="py-3 pr-8 pl-2 text- w-full outline-none font-semibold text-base">
                <option value="">Medysly</option>
                <option value="">Another location</option>
                <option value="">Another location</option>
              </select>
            </label>
          </div>
        </div>

        <div className="flex gap-6 w-full flex-wrap">
          <div className="flex flex-col text-sm text-gray-600 gap-1">
            Starting time
            <label className="flex border rounded-md  bg-white px-2 w-[350px] md:w-[440px] justify-between font-semibold">
              <input
                type="text"
                placeholder="Dr Angel"
                className="py-3 pr-4 pl-2 placeholder:text-gray-700 outline-none w-full"
              />
              <ClockIcon className="w-6" />
            </label>
          </div>


          <div className="flex flex-col text-sm text-gray-600 gap-1 ">
            Date of consultation
            <label className="flex border rounded-md  bg-white px-2 w-[350px] md:w-[440px] justify-between font-semibold">
              <input
                type="date"
                placeholder="12/12/2024"
                className="py-3 pr-4 pl-2  text-gray-700 outline-none w-full "
              />
            </label>
          </div>
        </div>
    
        <div className="mt-2">
             <label className="flex flex-col width-full gap-1"> 
              <span  className="text-sm text-gray-500" >Reason for consultation</span>
              <textarea className="border rounded-md h-24 px-2 outline-none"></textarea>
             </label>
        </div>      
          <div className="mt-2">
             <label className="flex flex-col width-full gap-1"> 
              <span  className="text-sm text-gray-500" >Review Notes</span>
              <textarea className="border rounded-md h-24 px-2 outline-none"/>
             </label>
        </div>

        <div className="flex flex-col mt-5">
          <span className="text-sm text-gray-500">Add attachment(optional)</span>
          <div className="border-2 rounded-md h-24 px-2 outline-none border-dashed flex flex-col  items-center justify-center">
            <div className="flex gap-1 justify-center text-xs items-center cursor-pointer">
            <PaperClipIcon  className="w-6"/> Drop your file here or <span className="text-sm text-blue-600" >Browse</span>
            </div>
            <span className="text-sm text-gray-400">Max size 10 MB</span>
        </div>

        <div className="flex justify-between px-2 mx-2 bg-blue-50 rounded py-2 my-6 ">
           <div className="flex text-sm items-center">
            <DocumentIcon className="w-6 text-blue-400"/>
            <span>Check up results .pdf </span>
           </div>

           <CheckCircleIcon className="w-6 text-blue-400"/>
        </div>
        </div>
      </div>
    </form>
  );
};

export default LogConsultation;
