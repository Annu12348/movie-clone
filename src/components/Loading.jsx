import React from 'react'
import loader from '/loader.gif'


const Loading = () => {
  return (
    <div className='flex items-center justify-center bg-black w-full h-screen'>
      <img className='object-cover h-[50%] ' src={loader} />
    </div>
  )
}

export default Loading
