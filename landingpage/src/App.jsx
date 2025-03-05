import React from "react";
import Button from "./components/Button";
import IconInfo from "./components/IconInfo";
import Sections from "./components/sections";
import Sectionsimage from "./components/Sectionsimage";

const App = () => {
  return (
    <div>
      <header className="flex justify-between items-center px-24 py-4">
        <div className="flex space-x-8">
          <h1 className="text-[#505F98] text-sm font-normal">Home</h1>
          <h1 className="text-[#505F98] text-sm font-normal">About</h1>
          <h1 className="text-[#505F98] text-sm font-normal">Contact</h1>
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
      {/*SECTION TWO*/}
      <div >
      {/*info */}
      <Sections
          sectionsimage={"/section2image.svg"}
          heading="Light, Fast & Powerful"
          text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus."
          smalltext=" mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
            sem. Nulla consequat massa quis enim."
            lastbutton="Purchase Now"blue
            />
      </div>

       {/*SECTION THREE*/}
       <div >
      {/*info */}
      <Sections
          sectionsimage={"/section3image.svg"}
          heading="Light, Fast & Powerful"
          text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus."
          smalltext=" mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
            sem. Nulla consequat massa quis enim."
            lastbutton="Purchase Now"blue
            />
      </div>

       {/*SECTION FOUR*/}
       <div className=" flex flex-col items-start justify-center space-y-4">
        <div>
      <Sections
          sectionsimage={"/section4image.svg"}
          heading="Light, Fast & Powerful"
          text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus."
          smalltext=" mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
            sem. Nulla consequat massa quis enim." 
            lastbutton="Purchase Now"
            />
            
      </div>
</div>
    </div>
  );
};

export default App;
