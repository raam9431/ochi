import React from 'react'

function Eyes() {
  return (
    <div className='w-full h-screen overflow-hidden'>
    <div className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
        <div className='absolute flex gap-10 left-1/2 -translate-x-[50%] -translate-y-[50%] bg-green-500'>
        <div className="w-[15vw] h-[15vw] rounded-full bg-red-500"></div>
        <div className="w-[15vw] h-[15vw] rounded-full bg-red-500"></div>
        </div>
    </div>
    </div>
  )
}

export default Eyes