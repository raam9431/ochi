import React from 'react'

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
        <div className="px-5 py-2 border-[2px] rounded-full border-zinc-500 font-light text-sm capitalize"></div>
        <div className="w-3 h-3 rounded-full"></div>
      </div>
      </div>
    </div>
  )
}

export default LandingPage