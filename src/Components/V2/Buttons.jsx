import React from 'react'

const Buttons = () => {
  return (
    <div className='flex justify-center pt-10'>
      <div className='grid  grid-cols-2 lg:grid-cols-4 gap-4'>
      <div>
      <button className="px-4  lg:px-8 py-2 text-lg font-semibold text-black bg-white  hover:bg-cyan-300 rounded-3xl">Something</button>

      </div>
      <div>
      <button className="px-4 lg:px-8 py-2 text-lg font-semibold text-black bg-white  hover:bg-cyan-300 rounded-3xl">Something</button>

      </div>
      <div>
      <button className="px-4 lg:px-8 py-2 text-lg font-semibold text-black bg-white  hover:bg-cyan-300 rounded-3xl">Something</button>

      </div>
      <div>
      <button className="px-4 lg:px-8 py-2 text-lg font-semibold text-black bg-white  hover:bg-cyan-300 rounded-3xl">Something</button>

      </div>
      </div>
    </div>
  )
}

export default Buttons
