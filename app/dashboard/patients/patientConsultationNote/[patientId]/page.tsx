"use client"
import { ChevronDoubleRightIcon } from '@heroicons/react/24/outline'
import { HealthTrackerConsultationNoteDisplay } from '@/app/ui/patients/Logconsultation/HealthTracker'
import { findPatientConsultationData } from '@/app/lib/utils'


import React from 'react'
import { useParams } from 'next/navigation'

const Page = () => {
    const {patientId} = useParams()
    let  foundConsultationData ;

    if(Array.isArray(patientId)){
      return (<>
           <p>internal error</p>
      </>)
    }

  foundConsultationData = findPatientConsultationData(patientId)
  return (
    <div className='ml-4 lg:mr-[370px] mr-2"'>
      <div className="text-xs text-gray-500 flex gap-1 mt-1">
        <p>My Patient </p>
        <ChevronDoubleRightIcon className="w-3" />
        <span className="font-semibold">Consultation note </span>
        <ChevronDoubleRightIcon className="w-3" />
        <span>Monitoring plan</span>
      </div>
      <h1 className="mt-3 text-xl font-semibold">Monitoring plan</h1>
      <div className='mt-2 text-gray-600'>
          <div className='mt-2 font-semibold'>
            <span >{foundConsultationData?.consultationMethod}</span>@ 
            <span> {foundConsultationData?.location}</span>
          </div>

          <div className='text-sm'> 
            <span>{foundConsultationData?.date}</span> @
            <span> {foundConsultationData?.time}</span>
          </div>
          <div className='mt-4'>
            <h1 className='font-semibold text-gray-500'>Dr.{foundConsultationData?.DoctorName}</h1>
            <p >{foundConsultationData?.testsDescription}</p>
          </div>

          <div className='mt-4'>
            <h1 className='font-semibold text-gray-500'>Clinical summary</h1>
            <p>{foundConsultationData?.ConsulationSummary}</p>
          </div>

          <div className='mt-4'>
            <h1 className='font-semibold '>Prescribed Monitoring Plan</h1>
            <p className='text-gray-800 font-medium text-sm mb-1'>Stephen Conley(1 month)</p>
            <p className='text-sm'>{foundConsultationData?.date}</p>
            <p className='text-blue-400'>Amount: <span>${foundConsultationData?.Amount}</span></p>
          </div>
  
      </div>
      <div className=" text-xs lg:text-sm text-gray-500 grid grid-cols-3 pl-2 w-[100%] rounded-md bg-gray-100 py-3.5 mx-auto mt-8">
         <span className="pl-4">Monitoring Plan</span>
         <span>Reporting Time & Reminder</span>
         <span>Frequency and Review</span>
   
      </div>

      {
        foundConsultationData?.healthTrackers.map((tracker,idx) => <HealthTrackerConsultationNoteDisplay {...tracker} key={idx}/>)
      }
    </div>
  )
}

export default Page