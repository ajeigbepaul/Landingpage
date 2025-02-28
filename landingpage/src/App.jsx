import React from 'react'
import Button from "./components/Button";
import IconInfo from "./components/IconInfo";

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
    

    <h1 className="text-[#37447E] text-2xl font-bold">Landing</h1>
        <Button title="Buy more" />
      </header>

      {/* HERO */}
      <div className="flex gap-8 h-screen items-center justify-center px-24 ">
        {/* INFO */}
        <div className="w-[40%] flex flex-col items-start justify-center space-y-4">
          <h2 className="text-3xl text-[#091133] font-semibold">
            Introduce Your Product Quickly & Effectively
          </h2>
          <p className="text-sm text-[#091133]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>
          <p className="text-sm text-[#091133]">
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
          </p>
          <div className="space-x-4 flex items-center">
            <Button title="Purchase Ui Kit" />
            <Button title="Learn more" white />
          </div>
        </div>
        <div className="w-[60%] flex items-center justify-center relative bg-red-300">
          <img
            src="/heroimage.svg"
            className="w-[60%]   object-cover absolute right-0"
            alt="heroimage"
          />
        </div>
      </div>
      {/* SECTION 1 */}
      <div className='flex gap-8 h-screen items-center justify-center px-24'>
{/* INFO */}
        <div className='w-[40%] flex flex-col items-start justify-center space-y-4'>
       <h2 className='text-3xl text-[#091133] font-semibold'>Light, Fast & Powerful</h2>
       <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
       mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
       <div className='flex items-center justify-between gap-8'>
        <div className='flex flex-col '>
        <img src="/section1leftimage.svg" alt="section1leftimage" />
          <h3>Title Goes Here</h3>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
        </div>
         <div className='md:text-left md:text-start max-w-sm'>
         <img src="/section1leftimage.svg" alt="section1leftimage" />
          <h3>Title Goes Here</h3>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
         </div>
         
        </div>
        </div>
           <div className='w-60% flex items-center justify-center relative'>
          <img src="section1image.svg" alt="section1image" />
        </div>
      </div>
      {/* SECTION 2 */}
      
     <div className='w-1/2'>
     <img src="section2image.svg" alt=""/>
     </div>
     <div>
      <h2 className='text-3xl font-bold mb-4'>Light, Fast & Powerful</h2>
      <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
      mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
      </p>
     </div>
      </div>
      {/* SECTION 3 */}
      <div className='flex px-24 space-x-20 space-y-20 items-center'>
     <div className='w-1/2'>
     <img src="section3image.svg" alt="" />
     </div>
     <div>
      <h2 className='text-3xl font-bold mb-4'>Light, Fast & Powerful</h2>
      <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
      mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
      </p>
     </div>
      </div>
      {/* SECTION 4 */}
      <div className='flex px-24 space-x-20 space-y-20 items-center'>
     <div className='w-1/2'>
     <img src="section4image.svg" alt=""/>
     </div>
     <div>
      <h2 className='text-3xl font-bold mb-4'>Light, Fast & Powerful</h2>
      <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
      mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
      </p>
     </div>
      </div>
      {/* SECTION ONE */}
      <div className="flex gap-8 h-screen items-center justify-center px-24 ">
        {/* info */}
        <div className="w-[50%] flex flex-col items-start  space-y-4">
          <h2 className="text-[#091133] text-3xl font-medium">Light, Fast & Powerful</h2>
          <p className="text-[#6F7CB2] text-[16px] font-normal">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus{" "}
          </p>
          <p className="text-[#6F7CB2] text-[16px] font-normal pb-20">
            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
            sem. Nulla consequat massa quis enim.
          </p>
          <div className="flex space-x-4 mt-10">
            <IconInfo />
            <IconInfo />
          </div>
        </div>
        {/* IMAGE */}
        <div className="w-[50%] flex items-center justify-center relative bg-red-300">
          <img
            src="/section1image.svg"
            className="w-[90%]   object-cover absolute right-0"
            alt="heroimage"
          />
        </div>
      </div>
    </div>
  );
};

export default App;