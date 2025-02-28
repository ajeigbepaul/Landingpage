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
        <button className='bg-[#111B47] text-white px-10 py-2 rounded-md font-medium'>Buy now</button>
      </header> */}
    <header className="flex flex-col md:flex-row bg-green-400 flex-wrap justify-between items-center max-w-screen-xl mx-auto px-6 md:px-24 py-4 space-y-4 md:space-y-0">
  
    <div className="flex space-x-4 md:space-x-8">
      <h1 className="text-[#000000] text-sm font-normal">Home</h1>
      <h1 className="text-[#000000] text-sm font-normal">About</h1>
      <h1 className="text-[#000000] text-sm font-normal">Contact</h1>
    </div>
    

    <h1 className="text-[#37447E] text-3xl md:text-2xl font-extrabold tracking-wide uppercase drop-shadow-lg hover:bg-grey-500 hover:text-white transition">
  Landing
</h1>
    <button className="bg-[#111B47] text-white px-10 py-2 rounded-md font-medium hover:bg-opacity-80 transition duration-200 hover:bg-purple-500 hover:text-blue transition">
      Buy now
    </button>
  </header>

    </div>



  )
}

export default App