import React from 'react'

const App = () => {
  return (
    <div className="bg-slate-400 px-20">
      {/* <header className="flex justify-between items-center px-24 py-4">
        <div className="flex space-x-8">
          <h1 className='text-[#505F98] text-sm font-normal'>Home</h1>
          <h1 className='text-[#505F98] text-sm font-normal'>About</h1>
          <h1 className='text-[#505F98] text-sm font-normal'>Contact</h1>
        </div>
        <h1 className="text-[#37447E] text-2xl font-bold">Landing</h1>
        <button className='bg-[#111B47] text-white px-10 py-2 rounded-md font-medium'>Buy now</button>
      </header> */}
      <header className="flex justify-between items-center bg-lime-400 px-2">
        <div className="flex space-x-6 text-slate-100">
          <h3>Home</h3>
          <h3>About</h3>
          <h3>Contact</h3>

        </div>
        <h3 className="text-black font-bold">Landing</h3>
        <button className="bg-green-200 px-5 py-1 rounded-md text-blue-600">Buy Now</button>
      </header>

    </div>
  )
}

export default App