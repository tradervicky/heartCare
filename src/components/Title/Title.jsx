import React from 'react'

const Title = ({title, subtitle}) => {
  return (
    <div className='flex flex-col justify-center items-center mt-20 mb-2'>
        <p className='text-xl text-blue-950 uppercase font-semibold'>{title}</p>
        <h1 className='text-2xl text-blue-950 font-bold uppercase'>{subtitle}</h1> 
    </div>
  )
}

export default Title