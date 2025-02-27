import React from "react";
import Button from "./components/Button";

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
    </div>
  );
};

export default App;
