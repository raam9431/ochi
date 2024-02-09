import React from 'react'

function Featured() {
    return (
        <div className='w-full py-20 '>
            <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20'>
                <h1 className='text-7xl font-["Neue_Montreal"] tracking-tighter'>Featured Projects</h1>
                <div className='px-20'>
                    <div className="cards w-full flex gap-10 mt-10">
                        <div className="cardcontainer w-1/2 h-[75vh] bg-red-500 overflow-hidden scale-50">
                            <div className="card rounded-xl w-full h-full bg-green-700">
                                <img className="w-full h-full bg-cover" src="" alt="" />
                            </div>
                        </div>
                        <div className="cardcontainer w-1/2 h-[75vh] bg-red-500 overflow-hidden scale-50">
                            <div className="card rounded-xl w-full h-full bg-green-700">
                                <img className="w-full h-full bg-cover" src="" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured 