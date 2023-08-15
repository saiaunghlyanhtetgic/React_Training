import React from 'react'

const MemeNav = () => {
  return (
    <nav className='bg-slate-600 px-4 py-2'>
        <div className='flex flex-row gap-2 justify-between items-center'>
            <div className='flex flex-row justify-center items-center gap-2'>
            <img src="https://freesvg.org/img/Trollface.png" alt="" className='w-8 fill-slate-50' />
            <h2 className='text-slate-100'>Meme Generator</h2>
            </div>

            <div>
                <h2 className='text-slate-100'>React Course - Project 3</h2>
            </div>
            </div>
    </nav>
  )
}

export default MemeNav