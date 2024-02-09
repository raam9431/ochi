import React from 'react'

function About() {
    return (
        <div className='w-full p-20 bg-[#CDEA68] rounded-tr-3xl rounded-tl-3xl text-black '>
            <h1 className='font-["Neue_Montreal"] text-[4vw] leading-[3.1vw] tracking-tighter'>
                Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.
            </h1>

            <div className='w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#364308]'>
                <div className='w-1/2'>
                    <h1 className='text-7xl'>Our Approach:</h1>
                    <button className='flex uppercase gap-10 items-center px-10 py-3 mt-10 bg-zinc-900 rounded-full text-white'>Read More
                        <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
                    </button>
                </div>
                <div className='w-1/2 h-[60vh] rounded-3xl bg-[#586b14]'></div>
            </div>
        </div>
    )
}

export default About