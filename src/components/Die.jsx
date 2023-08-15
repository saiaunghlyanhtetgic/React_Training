import React from 'react'

const Die = ({value, isHeld, toggleHoldDie}) => {
    const holdColor = "bg-green-400 text-center p-2 rounded-md"
  return (
    <div className={isHeld ? holdColor : 'bg-white text-center p-2 rounded-md'} onClick={toggleHoldDie}>
        <h2>{value}</h2>
    </div>
  )
}

export default Die