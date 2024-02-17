import React from 'react'

function Cards() {
    return (
        <div className='w-full h-sceen bg-zinc-900 flex items-center px-32 gap-5 ' >
            <div className="cardcontainer h-[50vh] w-1/2 ">
                <div className="card w-full h-full bg-[#004D43] rounded-xl flex items-center justify-center relative">
                    <img className="justify-items-center" src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                    <button className='absolute left-10 bottom-10 px-5 py-1 rounded-full border-2 '>&copy;</button>
                </div>
            </div>
            <div className="cardcontainer flex gap-10 h-[50vh] w-1/2">
                <div className="card w-1/2 h-full bg-[#212121] rounded-tl-xl">
                    <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                </div>
                <div className="card w-1/2 h-full bg-[#212121] rounded-tr-xl">
                    <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Cards