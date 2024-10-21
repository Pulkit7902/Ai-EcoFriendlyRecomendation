import React from 'react'

const IndividualCategory = () => {
  return (
    <div className='w-full md:w-3/4 lg:w-4/5 p-4 h-2'>
    <div className="grid grid-cols-2 gap-4 p-8 h-[600px]">
      <div className="bg-blue-500 text-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold">Number of Users Login</h2>
        <p className='text-center relative top-5 text-9xl '>{0}</p>
      </div>
    </div>
    </div>
  )
}

export default IndividualCategory
