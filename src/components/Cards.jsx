import React from 'react'

function Cards() {
    return (
        <div className='w-full h-sceen bg-zinc-900 flex items-center px-32 py-10 gap-5' >
            <div className="cardcontainer h-[60vh] w-1/2 ">
                <div className="card w-full h-full bg-[#004D43] rounded-xl flex items-center justify-center relative">
                    <img className="justify-items-center" src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                    <button className='absolute left-10 bottom-10 px-5 py-1 rounded-full border-2 border-[#CDEA68] text-[#CDEA68] '>&copy;2019-2025</button>
                </div>
            </div>
            <div className=" cardcontainer flex gap-5 h-[60vh] w-1/2">
                <div className="card relative w-1/2 h-full bg-[#212121] rounded-xl flex items-center justify-center">
                    <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                    <button className='absolute left-10 bottom-10 px-5 py-1 rounded-full border-2 border-[#F1F1F1] text-[#F1F1F1] hover:bg-[#F1F1F1] hover:text-[#212121] hover:font-semibold '>
                        Rating 5.0 on Clutch
                    </button>
                </div>
                <div className="card relative w-1/2 h-full bg-[#212121] rounded-xl flex items-center justify-center">
                    <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt=" " />
                    <button className='absolute left-10 bottom-10 px-5 py-1 rounded-full border-2 border-[#F1F1F1] text-[#F1F1F1] hover:bg-[#F1F1F1] hover:text-[#212121] hover:font-semibold'>
                        Business Bootcamp Alumni
                    </button>


                </div>
            </div>
        </div>
    )
}

export default Cards