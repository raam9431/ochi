import React from 'react'
import { IoArrowUpOutline } from "react-icons/io5";


function LandingPage() {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1'>
      <div className='textstructure mt-52 px-20'>
        {["We Create", "Eye Opening", "Presentation"].map((item, index) => {
          return (
            <div className="masker">
              <div className='w-fit flex items-end overflow-hidden'>
                {index === 1 && (
                  <div className='mr-5 w-[8vw] rounded-md h-[5.7vw] -top-[1.2vw] relative bg-red-500'></div>
                )}
                <h1 className="pt-[2vw] -mb-[1vw] uppercase text-[9vw] leading-[.75] font-['Founders_Grotesk_X-Condensed']" >
                  {item}
                </h1>
              </div>
            </div>
          );
        })}

      </div>
      <div className="border-t-[1px] border-zinc-800 flex mt-20 justify-between items-center py-5 px-20">
        {["For public and private companies", "From the first pitch to IPO"].map((item, index) => <p className='text-lg font-light tracking-tight leading-none'>{item}</p>)}
        <div className="start">
          <div className="px-5 py-2 border-[1px] rounded-full border-zinc-400 font-light text-md uppercase">start the project
          </div>
          <div className="w-10 h-10 flex items-center justify-center rounded-full border-[2px] border-zinc-400">
            <span className='rotate-[45deg]'>
              <IoArrowUpOutline />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage