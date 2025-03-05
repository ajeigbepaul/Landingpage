import React from 'react'

const Sectionsimage = ({sectionsimage}) => {
  return (
    <div>
       
     <div className="w-[60%] relative flex pt-24 ">
      <img
      src={sectionsimage}
      className="w-[90%] object-contian   h-[370px] absolute"
      alt="section1image"
      />
      </div>
    </div>
  )
}

export default Sectionsimage