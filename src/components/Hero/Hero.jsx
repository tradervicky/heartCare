import React from 'react'
import './Hero.css'
import bg from '../../assets/bg_1.jpg'
import Button from '../button/Button'
import icon_arrow from '../../assets/dark-arrow.png'
import { scrollToSection } from '../utils/ScrollUtils'
const Hero = () => {
  const handleNavLinkClick = (sectionId) => {
    scrollToSection(sectionId);
  }

  return (
   <div className='hero  '>
    <div className="max-w-[800px] flex flex-col justify-center items-center mobile:mx-4">
    <h1 className='text-4xl font-bold text-center mobile:text-2xl mobile:font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, nisi?</h1>
    <p className='text-center text-md pt-4 font-semibold mobile:text-sm mobile:font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero blanditiis, velit dolorem sint, eligendi, tenetur beatae laudantium perferendis distinctio voluptas odio aliquid rem consectetur delectus.</p>
    <div className='py-4'>
    <Button text="Explore more" icon={icon_arrow} customCss="mobile:px-2 mobile:py-1 mobile:text-md" 
    onClick={()=>handleNavLinkClick('section6')}/>

    </div>
    </div>
   </div>
  )
}

export default Hero