import React from "react";
import Button from "./components/Button";
import IconInfo from "./components/IconInfo";
import Sections from "./components/Sections";


const App = () => {
  return (
    <div className="bg-slate-100 px-20">
      {/* <header className="flex justify-between items-center px-24 py-4">
        <div className="flex space-x-8">
          <h1 className="text-[#505F98] text-sm font-normal">Home</h1>
          <h1 className="text-[#505F98] text-sm font-normal">About</h1>
          <h1 className="text-[#505F98] text-sm font-normal">Contact</h1>
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
      {/* Section 2, 3 and 4 */}
      <div className="flex gap-8 h-screen items-center justify-center px-24 ">
      <div className="w-[50%] flex items-center justify-center relative bg-red-300">
          <img
            src="/section2_image.svg"
            className="w-[90%]   object-cover absolute right-0"
            alt="Section2_image"
          />
        </div>
        <div>
          <Sections/>
        </div>
        
      </div>
      <div className="flex gap-8 h-screen items-center justify-center px-24 ">
      <div className="w-[50%] flex items-center justify-center relative bg-red-300">
          <img
            src="/section3_image.svg"
            className="w-[90%]   object-cover absolute right-0"
            alt="Section3_image"
          />
        </div>
        <div>
          <Sections/>
        </div>
      </div>
      <div className="flex gap-8 h-screen items-center justify-center px-24 ">
      <div className="w-[50%] flex items-center justify-center relative bg-red-300">
          <img
            src="/section4_image.svg"
            className="w-[90%]   object-cover absolute right-0"
            alt="section4_image"
          />
        </div>
        <div>
          <Sections/>
        </div>
      </div>
      <div className="items-center px-24 text-center space-y-5 gap-6">
          <h3 className="text-3xl font-semibold items-center justify-center text-[#091133]">A Price To Suit Everyone</h3>
          <p className="text-sm text-[#6F7CB2]">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
          <p className="text-4xl center font-semibold text-[#222F65]">$40</p>
          <p className="text-[#37447E] text-sm">UI Design Kit</p>
          <p className="text-[#5D6970] text-sm">See, One price. Simple.</p>
          <div className="space-x-4 justify-center flex items-center pb-5">
           { <Button title="Purchase Now" />}
            
          </div>

        </div>
        <footer className="bg-[#E7ECFF] w-full" >
          <div className="flex justify-between px-24 space-y-4">
            <p className="items-center justify-center py-2">&copy;your company</p>
            <h3 className="text-black font-bold">Landing</h3>
            <div className="space-x-4 justify-center flex items-center">
           { <Button title="Purchase Now" />}
            
          </div>
         

          </div>
          <div></div>
        </footer>
      
    </div>
  );
};

export default App;
