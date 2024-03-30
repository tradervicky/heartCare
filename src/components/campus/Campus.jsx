import React from 'react'
import Button from '../button/Button'
import g_1 from '../../assets/g_1.jpg'
import g_2 from '../../assets/g_2.jpg'
import g_3 from '../../assets/g_3.jpg'
import g_4 from '../../assets/g_4.jpg'
import white_arrow from '../../assets/white-arrow.png'
const Campus = () => {
  return (
    <div className='my-24 px-36 laptop:px-20 big-tablet:px-6 mobile:px-4'>
        <div className='flex justify-between mb-10 items-center mobile:flex-wrap mobile:gap-2'>
            <img src={g_1} alt="" className='w-[23%] rounded-xl mobile:w-[48%]'/>
            <img src={g_2} alt="" className='w-[23%] rounded-xl mobile:w-[48%]'/>
            <img src={g_3} alt="" className='w-[23%] rounded-xl mobile:w-[48%]'/>
            <img src={g_4} alt="" className='w-[23%] rounded-xl mobile:w-[48%]'/>
        </div>
        <div className='flex justify-center items-center'>
        <button type='submit' className='bg-blue-950 text-white text-lg font-semibold 
        px-4 py-2 rounded-3xl flex items-center 
        justify-center hover:bg-blue-500 duration-300 ease-in-out'>See more here <img src={white_arrow} alt="" className='w-5 ml-4' /></button>
        </div>
        
    </div>
  )
}

export default Campus