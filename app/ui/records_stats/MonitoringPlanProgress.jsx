import React from 'react'

const MonitoringPlanProgress = () => {
  return (
    <div>
        <div className='flex items-center  justify-center my-3'>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-100">1</button>
            <div className='w-36 h-1.5 bg-gray-100'></div>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-100">2</button>
            <div className='w-36 h-1.5 bg-gray-100'></div>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-100">3</button>
            <div className='w-36 h-1.5 bg-gray-100'></div>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-100">4</button>
        </div>
        <div className='flex lg:justify-center justify-between lg:gap-20 text-sm text-gray-600'>
          <p>Plan overview</p>
          <p>Health trackers</p>
          <p>Messaging</p>
          <p>pricing</p>
        </div>
    </div>
  )
}

export default MonitoringPlanProgress