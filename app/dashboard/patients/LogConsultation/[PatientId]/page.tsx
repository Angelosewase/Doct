"use client"
import React from 'react'
import { ChevronDoubleRightIcon,PlusIcon,CalendarDaysIcon } from '@heroicons/react/24/outline'
import LogConsultation from '@/app/ui/forms/LogConsultation'
import Stethoscope from '@/app/ui/svgs/Stethoscope'
import { useRouter } from 'next/navigation'
import { useParams } from 'next/navigation'




const Page = () => {
  const [Stethoscopecolor ,setStethoscopeColor ] = React.useState("black")
   const {PatientId} = useParams()

    const route= useRouter()
return (
    <div className='ml-4 lg:mr-[370px] mr-2'>
       <div className='text-xs text-gray-500 flex gap-1 mt-1'>
        <p>My Patient </p>
        <ChevronDoubleRightIcon  className='w-3'/> 
        <span className='font-semibold'>Consultation note </span>
        <ChevronDoubleRightIcon  className='w-3'/>
        <span>Monitoring plan</span>
       </div>
        <h1 className='mt-3 text-xl font-semibold'>Log new consultation</h1>

        <div>
          <LogConsultation />
        </div>
        <div className='flex flex-col gap-4 my-6'>
          <button className='p-2 rounded-sm bg-amber-400 text-white w-40 flex items-center justify-center'> <PlusIcon className='w-5 text-white '/> Add medecine</button>
          <button className='p-1 rounded-sm  w-40 flex items-center border border-purple-300 justify-center'> <PlusIcon className='w-5 '/> Add test</button>
        </div>

        <div className='flex gap-5 mt-10 flex-wrap'>

          <button className='py-1 px-2 border border-blue-300 hover:bg-blue-400 rounded flex items-center justify-center translation hover:text-white text-sm'
          onMouseEnter={()=>{
            setStethoscopeColor("white")
          }}
          onMouseLeave={()=>{
            setStethoscopeColor("black")
          }}
          
          onClick={()=>{
            route.replace(`/dashboard/patients/LogConsultation/${PatientId}/monitoringPlan`)
          }}>
            <Stethoscope color={Stethoscopecolor}/>set Monitoring plan</button>

          <button className='p-2 border border-blue-300 hover:bg-blue-400 rounded flex items-center justify-center translation gap-1 hover:text-white text-sm'>
            <CalendarDaysIcon  className='w-5 h-5 text-gray-800 hover:bg-blue-400  '/>
            Set next appointment
          </button>

          <div className='py-1 px-2  border border-blue-300 hover:bg-blue-400 rounded flex items-center justify-center gap-1 hover:text-white text-sm'>
            <input type="checkbox" className='text-blue-500 w-4 h-4 transition' checked />
            set goals
          </div>
        </div>

        <div className='flex justify-between my-8 flex-wrap gap-2'>
          <div className='flex gap-2 items-center'>
            <input type="checkbox" checked   />
            <p className='text-xs text-gray-500 max-w-60 m-0'>Notify Patient about the availabilty ofconsultation note</p>
          </div>
          <div className='flex gap-2'>
            <button className='p-2 border border-blue-300 rounded ' onClick={()=>{
              route.replace(`/dashboard/patients`)
            }}>cancel</button>
            <button className='p-2 border border-blue-300 bg-blue-300 rounded text-white'>save</button>
          </div>
        </div>
    </div>
  )
}

export default Page