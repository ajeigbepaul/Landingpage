import React from 'react'

const App = () => {
  return (
    <div>
      {/* <header className="flex justify-between items-center px-24 py-4">
        <div className="flex space-x-8">
          <h1 className='text-[#505F98] text-sm font-normal'>Home</h1>
          <h1 className='text-[#505F98] text-sm font-normal'>About</h1>
          <h1 className='text-[#505F98] text-sm font-normal'>Contact</h1>
        </div>
        <h1 className="text-[#37447E] text-2xl font-bold">Landing</h1>
        <button className='bg-[#111B47] text-white px-10 py-2 rounded-md 
        font-medium'>Buy now</button>
      </header> */}
      <header className='flex justify-between items-center px-24 py-4'>
        <div className='flex space-x-8'>
          <h1 className='text-purple-900 text-xl
                        font-normal hover:text-white
                         hover:bg-purple-900 '>Home</h1>
          <h1 className='text-purple-900 text-xl
                        font-normal hover:text-white
                         hover:bg-purple-900 '>About</h1>
          <h1 className='text-purple-900 text-xl
                        font-normal hover:text-white
                         hover:bg-purple-900 '>Contact</h1>
        </div>
        <h1 className='text-orange-900 text-2xl font-bold'>Landing</h1>
        <button className='bg-[#CC5500] text-white px-12 py-2 rounded-md 
        font-medium'>Buy now</button>
      </header>

    </div>
  )
}

export default App