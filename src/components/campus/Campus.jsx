import React from 'react'
import Button from '../button/Button'
import g_1 from '../../assets/g_1.jpg'
import g_2 from '../../assets/g_2.jpg'
import g_3 from '../../assets/g_3.jpg'
import g_4 from '../../assets/g_4.jpg'
import white_arrow from '../../assets/white-arrow.png'
const Campus = () => {
  return (
    <div className='my-24 px-36 '>
        <div className='flex justify-between mb-10 items-center '>
            <img src={g_1} alt="" className='w-[23%] rounded-xl'/>
            <img src={g_2} alt="" className='w-[23%] rounded-xl'/>
            <img src={g_3} alt="" className='w-[23%] rounded-xl'/>
            <img src={g_4} alt="" className='w-[23%] rounded-xl'/>
        </div>
        <div className='flex justify-center items-center'>
            <Button text="See more here" icon={white_arrow} customCss="bg-blue-600 text-white hover:border hover:border-blue-600"/>
        </div>
    </div>
  )
}

export default Campus