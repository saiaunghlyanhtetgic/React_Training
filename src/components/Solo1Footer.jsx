import React from 'react'
import Facebook from '../images/facebook.png';
import Twitter from '../images/twitter.png';
import Ig from '../images/ig.png';
import GitHub from '../images/github.png';

const Solo1Footer = () => {
  return (
    <div className='bg-slate-900 mt-4'>
        <div className='flex flex-row gap-4 justify-center items-center px-4 py-2'>
        <img className='w-10 px-2' src={Facebook} alt="" />
        <img className='w-10 px-2' src={Twitter} alt="" />
        <img className='w-10 px-2' src={Ig} alt="" />
        <img className='w-10 px-2' src={GitHub} alt="" />
    </div>
    </div>
  )
}

export default Solo1Footer