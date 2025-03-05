import React from 'react'

const sections = ({sectionsimage, heading, text, smalltext, blue, lastbutton}) => {
  return (
    
    <div className="flex gap-8 h-screen items-center justify-center px-24">
    <div className="w-[60%] flex items-center justify-center relative">
      <img
       className="w-[80%] object-contian  h-[370px] right-0"
      src={sectionsimage}
      alt="section1image"
      />
      </div>
    <div className="w-[33%]  flex flex-col item-start justify-center space-y-3"> 
      <h2 className="text-[#091133] text-3xl font-semibold">{heading}</h2>
      <p className="text-[#6F7CB2] text-sm">{text}</p>
        <p className="text-[#6F7CB2] text-sm">{smalltext}</p>

        <div>
        <button className= {`${
        blue ? "border-2 border-white text-white" : "bg-[#111B47] text-white"
      } px-10 py-2 rounded-md font-medium text-xs`}>
      {lastbutton}
         </button>
    </div>
    </div>
    

  </div>

  )
}

export default sections