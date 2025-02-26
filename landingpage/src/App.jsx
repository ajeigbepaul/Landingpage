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
      <header className='flex items-center justify-between px-24 py-4'>
<div className='flex space-x-8'>
  <h1 className='text-blue-900 text-[16px] font-normal'>Home</h1>
  <h1 className='text-blue-900 text-[16px] font-normal'>About</h1>
  <h1 className='text-blue-900 text-[16px] font-normal'>Contact</h1>
</div>
<div className='text-blue-900 text-[22px] font-bold'>Landing</div>
<button className='bg-red-700 text-white px-10 py-2 rounded-md font-semibold'>Buy Now</button>
      </header>

        <div className='px-40 py-40' >
          <h1 className='text-[40px] font-semibold text-[#091133] para'>Introduce Your Product <br/> Quickly & Effectively</h1>
          <h6 className='pr-80'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean <br/>commodo ligula eget dolor. Aenean massa. Cum sociis natoque <br/>penatibus et magnis dis parturient montes, nascetur ridiculus <br/>
          mus. 
          <br/>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</h6>
        
        <div>
        <button>Purchase UI Kit</button>
        <button>Learn More</button>
        </div>
        

        </div>
    </div>
  )
}

export default App