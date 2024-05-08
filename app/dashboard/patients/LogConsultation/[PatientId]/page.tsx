"use client"
import React from 'react'
import { ChevronDoubleRightIcon } from '@heroicons/react/24/outline'

const Page = () => {
  
  
return (
    <div className='ml-4'>
       <div className='text-xs text-gray-500 flex gap-1 mt-1'>
        <p>My Patient </p>
        <ChevronDoubleRightIcon  className='w-3'/> 
        <span className='font-semibold'>Consultation note </span>
        <ChevronDoubleRightIcon  className='w-3'/>
        <span>Monitoring plan</span>
       </div>
        <h1 className='mt-3 text-xl font-semibold'>Log new consultation</h1>
    </div>
  )
}

export default Page