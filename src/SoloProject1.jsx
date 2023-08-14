import React from 'react'
import Solo1Info from './components/Solo1Info'
import Solo1About from './components/Solo1About'
import Solo1Interest from './components/Solo1Interest'
import Solo1Footer from './components/Solo1Footer'

const SoloProject1 = () => {
  return (
    <div className='bg-slate-600'>
        <Solo1Info/>
        <Solo1About/>
        <Solo1Interest/>
        <Solo1Footer/>
    </div>
  )
}

export default SoloProject1