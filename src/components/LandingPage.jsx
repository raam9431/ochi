import React from 'react'
import { IoArrowUpOutline } from "react-icons/io5";


function LandingPage() {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1'>
      <div className='textstructure mt-52 px-20'>
      {["We Create", "Eye Opening", "Presentation"].map((item, index)=>{
        return <div className='masker font-light'>
         <h1 className="uppercase text-[7.5vw] leading-[6vw] tracking-tighter font-['Founders_Grotesk'] font-medium" >{item}</h1>
        </div>
      })}
       
      </div>
      <div className="border-t-[1px] border-zinc-800 flex mt-32 justify-between items-center py-5 px-20">
      {["For public and private companies", "From the first pitch to IPO"].map((item, index)=><p className='text-lg font-light tracking-tight leading-none'>{item}</p>)}
      <div className="start">
        <div className="px-5 py-2 border-[1px] rounded-full border-zinc-400 font-light text-lg uppercase">start the project
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