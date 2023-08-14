import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

const Solo1Info = () => {
  return (
    <div className='bg-slate-600 flex flex-col'>
        <div className=' text-center'>
        <img className='h-62 w-full rounded-sm' src="https://www.rollingstone.com/wp-content/uploads/2023/03/230117_Black_Tee_0005-1.jpg?w=819" alt="" />
        <h1 className='text-slate-100 text-xl mt-4'>Ed Sheeran</h1>
        <h6 className='text-slate-300'>singer & Song Writer</h6>
        <p className='text-sm text-slate-100'>sheerios.com</p>
        </div>

        <div className='px-4 flex flex-row my-10 justify-around'>
            <button className='flex flex-row justify-center items-center gap-4 bg-slate-100 p-2 rounded-md'>
                <FontAwesomeIcon icon={faEnvelope
                } />

                <p className='text-slate-800'> Email</p>
            </button>

            <button className='flex flex-row justify-center items-center gap-4 bg-slate-100 p-2 rounded-md'>
                <FontAwesomeIcon icon={faPhone
                } />

                <p className='text-slate-800'> Call Me</p>
            </button>
        </div>
    </div>
  )
}

export default Solo1Info