import React from 'react'
import doctor_3 from '../../assets/doctor_3.jpg'
import play from '../../assets/play-icon.png'
const About = ({setPlayState}) => {
  return (
    <div className='my-24 px-36 flex justify-between items-center big-tablet:flex-col-reverse big-tablet:gap-6 big-tablet:px-6'>
        <div className="basis-[40%] relative big-tablet:basis-[100%]">
            <img src={doctor_3} alt="doctor"  className='w-full rounded-xl'/>
            <img src={play} alt="doctor" className='absolute top-[40%] left-[45%] w-16 cursor-pointer' onClick={()=>setPlayState(true)}/>
        </div>
        <div className="basis-[56%] big-tablet:basis-[100%]">
            <h3 className='text-xl font-bold text-blue-800 '>About Director</h3>
            <h2 className='text-3xl font-bold text-blue-950 '>Elevating Healthcare, Empowering Lives.</h2>
            <p className='text-md font-medium text-gray-500 big-tablet:pt-2'>Meet our esteemed Director, Niraj Kumar a visionary leader in healthcare. With 10 years of experience in the medical field. Niraj Kumar brings a wealth of expertise and a passion for excellence to HeartCare. </p>
            <p className='text-md font-medium text-gray-500 big-tablet:pt-2'>Under Niraj Kumar's guidance, our hospital is committed to innovation, patient-centric care, and the highest standards of medical excellence. With a focus on improving healthcare outcomes and enhancing patient experiences</p>
            <p className='text-md font-medium text-gray-500 big-tablet:pt-2'>Niraj Kumar ensures that HeartCare remains at the forefront of delivering exceptional healthcare services to our community.</p>

            <h2 className='text-2xl text-blue-950 font-bold mt-4 ml-4'>- Dr. Niraj Kumar</h2>
            <h3 className='text-xl text-blue-950 font-semibold mt-4 ml-4'>- Founder and Chairman</h3>
        </div>
    </div>
  )
}

export default About