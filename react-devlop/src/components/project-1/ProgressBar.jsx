import React from 'react'

const ProgressBar = ({step , totalStep}) => {
    const percentage = step/totalStep * 100;
  return (
    <div className='w-full h-6 border rounded-3xl overflow-hidden'>
        <div  style={{
            width: `${percentage}%`,
            height:"100%",
            background : "#f44336"
        }}/>
    </div>
  )
}

export default ProgressBar