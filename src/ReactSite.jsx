import React from 'react'
import logo from './logo.svg';

const Header = () => {
    return (
        <div className='bg-slate-800 flex justify-between items-center p-4'>
            <div className='flex flex-row gap-4 justify-center items-center'>
            <img src={logo} alt="" className='w-24' />
            <h2 className='text-slate-100'>ReactInfoSite</h2>
            </div>

            <div>
                <h2 className='text-slate-100'>React Course - Project 1</h2>
            </div>
        </div>
    )
}

const Body = () => {
    return (
        <div className='bg-slate-600 p-4'>
            <h1 className='text-slate-100 text-2xl mb-4'>Fun Facts About React</h1>
            <ul className='text-slate-100 list-disc px-8'>
                <li>Was created in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on Github</li>
                <li>Is maintained by Facebook</li>
                <li>Power thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    )
}

const ReactSite = () => {
  return (
    <div>
        <Header/>
        <Body/>
    </div>
  )
}

export default ReactSite