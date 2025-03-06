import React from 'react'
import Button from "./components/Button";
import IconInfo from "./components/IconInfo";
import Section from "./components/Section";

const App = () => {
  return (
    <div className="relative">
      <header className="flex flex-col md:flex-row bg-blue-400 flex-wrap justify-between items-center max-w-screen-xl mx-auto px-6 md:px-24 py-4 space-y-4 md:space-y-0">
  
    <div className="flex space-x-4 md:space-x-8">
      <h1 className="text-[#000000] text-sm font-normal">Home</h1>
      <h1 className="text-[#000000] text-sm font-normal">About</h1>
      <h1 className="text-[#000000] text-sm font-normal">Contact</h1>
    </div>
    

    <h1 className="text-[#37447E] text-2xl font-bold">Landing</h1>
        <Button title="Buy more" />
      </header>
      {/* BACKGROUND IMAGE */}
      <img
        src="/herobackground.svg"
        className="w-[50%] object-cover absolute right-0 top-0"
        alt="backgroundimage"
      />
      {/* HERO */}
      <div className="flex gap-8 h-screen items-center justify-center px-24  ">
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
       {/* SECTION FIVE */}
       <img src="pricebackground.svg" alt="background image" className='absolute'/>
          <div className='flex flex-col items-center text-center'>
            
          <h2 className='text-3xl font-medium leading-[48px] text-black tracking-[0px] mt-60'>A Price To Suit Everyone</h2>
          <p className='text-base font-normal leading-[26px] text-[#6F7CB2] max-w-lg mt-4'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
          <h1 className='text-4xl font-medium text-[#6F7CB2] tracking-[1px] mt-6'>$40</h1>
          <p className='text-[16px] font-normal leading-[26px] text-[#37447E] tracking-[0px] font-roboto'>UI Design Kit</p>
          <p className='mt-10 text-lg font-normal text-[#5D6970] font-roboto trcking-[0px]'>See, One price. Simple.</p>
          <div> <Button title="Purchase Now" /></div>
          {/* FOOTER */}
          <footer className='w-full mt-40 py-6 border-t flex justify-between items-start text-sm px-8'>
            <div className='flex flex-col space-y-2'>
              <p className='px-24'>&copy; 2023 Your Company</p>
              <nav className='flex flex-row space-x-8 text-[#6F7CB2] px-24'>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
              </nav>
              </div>
              <p className='text-lg font-medium text-[#37447E]'>Landing</p>
              <div className='flex flex-col space-y-2'>
             <div> <Button title="Purchase Now" /></div>
            <div className='flex flex-row space-x-8 px-24'>
           <img src="facebook.svg" alt="facebook image" />
           <img src="Linkln.svg" alt="Linkln image" />
           <img src="X.svg" alt="X image" />
           <img src="Youtube.svg" alt="Youtube image" />
           <img src="instagram.svg" alt="instagram image" />
            </div>
            </div>
          </footer>
        </div>
        </div>
  );
};

export default App;