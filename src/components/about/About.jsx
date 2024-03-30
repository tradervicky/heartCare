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
            <h3 className='text-xl font-bold text-blue-800 '>About University</h3>
            <h2 className='text-3xl font-bold text-blue-950 '>Nurturing toimmorrow's Leaders today</h2>
            <p className='text-lg font-medium text-gray-500 big-tablet:pt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A id reiciendis nam ducimus nisi dolor maxime pariatur ea in suscipit.</p>
            <p className='text-lg font-medium text-gray-500 big-tablet:pt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos totam numquam impedit sunt alias quasi!</p>
            <p className='text-lg font-medium text-gray-500 big-tablet:pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, mollitia?</p>
        </div>
    </div>
  )
}

export default About