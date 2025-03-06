import React from "react";
import Button from "./components/Button";
import IconInfo from "./components/IconInfo";
import Section from "./components/Section";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";


const App = () => {
  return (
    <div className="relative">
      <header className="flex justify-between items-center px-24 py-4">
        <div className="flex space-x-8">
          <h1 className='text-[#505F98] text-sm font-normal'>Home</h1>
          <h1 className='text-[#505F98] text-sm font-normal'>About</h1>
          <h1 className='text-[#505F98] text-sm font-normal'>Contact</h1>
        </div>
        <h1 className="text-[#37447E] text-2xl font-bold">Landing</h1>
        <button className='bg-[#111B47] text-white px-10 py-2 rounded-md font-medium'>Buy now</button>
      </header>
      
      {/* BACKGROUND IMAGE */}
      <img
        src="/herobackground.svg"
        className="w-[70%] object-cover absolute right-0 top-0"
        alt="backgroundimage"
      />
      {/* HERO */}
      <div className="flex gap-8 h-screen items-center justify-center px-24">
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
            className="w-[60%]   object-cover absolute -right-24"
            alt="heroimage"
          />
        </div>
      </div>
      {/* SECTION ONE */}
      <div className="flex gap-8 h-screen items-center justify-center px-24 ">
        {/* info */}
        <div className="w-[50%] flex flex-col items-start  space-y-4">
          <h2 className="text-[#091133] text-3xl font-medium">
            Light, Fast & Powerful
          </h2>
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
      {/* SECTION TWO */}
      <Section
        img={"/section2image.svg"}
        title={" Light, Fast & Powerful"}
        descr1={`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus`}
        descr2={` mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
            sem. Nulla consequat massa quis enim.`}
      />
      <Section
        img={"/section3image.svg"}
        title={" Light, Fast & Powerful"}
        descr1={`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus`}
        descr2={` mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
            sem. Nulla consequat massa quis enim.`}
      />
      <Section
        img={"/section4image.svg"}
        title={" Light, Fast & Powerful"}
        descr1={`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus`}
        descr2={` mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
            sem. Nulla consequat massa quis enim.`}
        havebutton={true}
      />

      <div className="relative w-full h-screen flex items-center justify-center">
      
      {/* Background Image */}
      <img
        src="/pricebackground.svg"
        className="w-[100%] object-cover absolute z-0 insert-0"
        alt="backgroundimage"
      />

      {/* Text Content */}
        <div className="z-10 text-center px-72">
        <h2 className="text-[#091133] text-4xl font-medium mb-5">
          A Price To Suit Everyone
          </h2>
          <p className="text-[#6F7CB2] text-[17px] font-normal z-50">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
          Aenean commodo ligula eget dolor. Aenean massa. 
          Cum sociis natoque penatibus et magnis dis parturient 
          montes, nascetur ridiculus  {" "}
          </p>
          
          <h2 className="text-[#222F65] text-5xl font-bold mt-8 mb-1">
          $40
          </h2>
          <p className="text-[#6F7CB2] text-[16px] font-normal z-50">
          UI Design Kit
          </p>
          <p className="text-[#5D6970] text-[12px] font-normal z-50 mt-14">
          See, One price. Simple.
          </p>
          <div className="mt-3">
            <Button title="Purchase Now" />
          </div>
          </div>
      </div>


      {/* Footer Section */}  
      <div className="relative">
      {/* Footerbackground */}
      <img
        src="/footerbackground.svg"
        className="w-[100%] absolute z-0 insert-0 -mt-6"
        alt="backgroundimage"
      />

      {/* Text Content 1 */}
        <div className="z-10">
        <div className="flex relative justify-between items-center px-24 py-4 ">
        <h1 className='text-[#939EA4] text-sm font-normal'>©2023 Yourcompany</h1>
        <h1 className="text-[#37447E] text-2xl font-bold">Landing</h1>
        <button className='bg-[#111B47] text-white px-4 py-1 rounded-sm font-normal'>Purchase Now</button>
      </div>
      </div>

        {/* Horizontal Line */}
        <hr className="border-t-2 border-[#CDD1D4] mx-24 relative mt-4" />

      {/* Text Content 2 */}
      <div className="flex relative justify-between items-center px-24 py-4 mt-4">
        <div className="flex space-x-8 text-[#929ECC] text-sm font-normal">
          <h1>Home</h1>
          <h1>About</h1>
          <h1>Contact</h1>
        </div>

         {/* Social Media Icons */}
         <div className="flex space-x-4 text-[#B0B8BC]">
          <a href="#" className=" hover:text-blue-400"><FaFacebookF size={18} /></a>
          <a href="#" className=" hover:text-blue-500"><FaLinkedinIn size={18} /></a>
          <a href="#" className=" hover:text-blue-300"><FaTwitter size={18} /></a>
          <a href="#" className=" hover:text-red-500"><FaYoutube size={18} /></a>
          <a href="#" className=" hover:text-pink-400"><FaInstagram size={18} /></a>
        </div>
      </div>


      </div>
        
      
    </div>
  )
}

export default App