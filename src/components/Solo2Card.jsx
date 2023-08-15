import React from 'react'

const Solo2Card = ({img, country, place, date, description}) => {
  return (
    <div>
        <div className='flex flex-row px-4 gap-4 mb-4'>
            <div className='w-1/3 mt-2'>
                <img className='w-40 h-60' src={img} alt="" />
            </div>
            <div className='w-2/3 flex flex-col'>
                <div className='flex flex-row gap-10 mt-2'>
                    <h6 className='text-slate-900 text-sm'>{country}</h6>
                    <a className='underline text-xs text-slate-400' href='#'>View on google map</a>
                </div>

                <h6 className='text-xs text-slate-600 mt-1'>{date}</h6>

                <h1 className='text-slate-900 text-xl mt-1'>{place}</h1>

                <div>
                    <p className='text-slate-600'>{description}</p>
                </div>
            </div>
        </div>

        <hr />
    </div>
  )
}

export default Solo2Card