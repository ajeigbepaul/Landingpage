import React from "react";
import Button from "./components/Button";

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
      {/* Section1 */}
      <div className="px-24 flex items-center justify-center h-screen gap-8" >
        <div className="flex-col w-[80%] space-y-4">
          <h2 className="text-[#091133] text-3xl font-semibold">Light, Fast & Powerful</h2>
          <p className="text-[#6F7CB2] text-sm">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
          <p className="text-[#6F7CB2] text-sm">mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
          <div className=" flex space-x-6">

            <div className="space-y-2"><div><img src="./section1_Icon.svg" alt="" className="object-cover " /></div>
              <h3 className="text-[~091133] font-semibold">Title Goes Here</h3>
              <p className="text-sm text-[#5D6970]">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
            </div>
             
      
            <div className="space-y-2 "> <div><img src="./section1_Icon.svg" alt="" /></div> 
                <h3 className="text-[~091133] font-semibold">Title Goes Here</h3>
                <p className="text-sm text-[#5D6970]">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
            </div>
            
            
          </div>
         

        </div>
        <div className="w-[50%] relative justify-center items-center ">
          <img src="./section1_image.svg" alt=""  className="w-[80%] right-0 object-cover"/>
        </div>

      </div>
      {/* section2 */}
      <div className="flex gap-6 items-center h-80 px-24 justify-center">
         <div className="flex flex-col space-x-8 relative items-center justify-center">
          <img src="./section2_image.svg" alt="section2 image" className="w-[80%] object-center" />
        </div>
        <div className="items-center space-y-6">
          <h3 className="text-3xl text-[#091133] space-y-8 font-semibold">Light, Fast & Powerful</h3>
          <p className="text-sm text-[#6F7CB2]">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
          <p className="text-sm text-[#6F7CB2]">mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
          
        </div>
       
      </div>
       {/* section3 */}
       <div className="flex gap-6 items-center h-80 px-24 justify-center">
         <div className="flex flex-col space-x-8 relative items-center justify-center">
          <img src="./section3_image.svg" alt="section3 image" className="w-[70%] object-center" />
        </div>
        <div className="items-center space-y-6">
          <h3 className="text-3xl text-[#091133] space-y-8 font-semibold">Light, Fast & Powerful</h3>
          <p className="text-sm text-[#6F7CB2]">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
          <p className="text-sm text-[#6F7CB2]">mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
          
        </div>
       
      </div>
       {/* section4 */}
       <div className="flex gap-6 items-center h-80 px-24 justify-center">
         <div className="flex flex-col space-x-8 relative items-center justify-center">
          <img src="./section4_image.svg" alt="section4 image" className="w-[80%] object-center" />
        </div>
        <div className="items-center space-x-10 space-y-6">
          <h3 className="text-3xl text-[#091133] flex space-y-8  font-semibold">Light, Fast & Powerful</h3>
          <p className="text-sm text-[#6F7CB2]">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
          <p className="text-sm text-[#6F7CB2]">mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
          <div className="space-x-4 flex items-center">
           { <Button title="Purchase Now" />}
            
          </div>
        </div>
       
      </div>
      
        <div className="items-center px-24 text-center space-y-5 gap-6">
          <h3 className="text-3xl font-semibold items-center justify-center text-[#091133]">A Price To Suit Everyone</h3>
          <p className="text-sm text-[#6F7CB2]">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
          <p className="text-4xl center font-semibold text-[#222F65]">$40</p>
          <p className="text-[#37447E] text-sm">UI Design Kit</p>
          <p className="text-[#5D6970] text-sm">See, One price. Simple.</p>
          <div className="space-x-4 justify-center flex items-center">
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
