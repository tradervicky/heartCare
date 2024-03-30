import React from 'react'
import Button from '../button/Button'
import logo from '../../assets/logo.jpg'
import { scrollToSection } from '../utils/ScrollUtils'
import { useEffect, useState } from "react";
import menu_icon from '../../assets/menu-icon.png'
const Navbar = () => {
  const handleNavLinkClick = (sectionId) => {
    scrollToSection(sectionId);
  }
  const [sticky, setSticky] = useState(false)
    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            window.scrollY > 100 ? setSticky(true) : setSticky(false);
        })
    },[])
    const [mobileMenu, setMobileMenu]=useState(false)
    const toggleMenu = ()=>{
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }
  return (
    <div className={`w-full bg-transparent text-white py-2 px-20 fixed top-0 left-0 flex items-center 
    justify-between z-10
    ${sticky ? " backdrop-blur-3xl  " : ""}
    mobile:px-4` }>
        <div>
            <img src={logo} alt="logo png" className='w-20 h-20 rounded-full shadow-lg border-2 border-blue-500 cursor-pointer laptop:w-14 laptop:h-14 tablet:w-10 tablet:h-10'/>
        </div>
        <div className={`mobile:absolute mobile:bg-blue-500 mobile:min-h-[100vh] mobile:right-0 mobile:top-0 ${mobileMenu ? "":"mobile:right-[-200px]"} duration-500`}>
            <ul className='flex justify-between gap-16 items-center text-white laptop:gap-5 tablet:gap-1 mobile:flex mobile:flex-col mobile:w-[200px] mobile:pt-[100px]'>
                <li onClick={() => handleNavLinkClick('section1')} className={`cursor-pointer font-semibold text-lg hover:text-blue-500   ${sticky ? " text-blue-950  " : ""} tablet:text-sm tablet:font-medium `}>Home</li>
                <li onClick={() => handleNavLinkClick('section2')} className={`cursor-pointer font-semibold text-lg hover:text-blue-500   ${sticky ? " text-blue-950  " : ""} tablet:text-sm tablet:font-medium`}>Program</li>
                <li onClick={() => handleNavLinkClick('section3')} className={`cursor-pointer font-semibold text-lg hover:text-blue-500   ${sticky ? " text-blue-950  " : ""} tablet:text-sm tablet:font-medium`}>About us</li>
                <li onClick={() => handleNavLinkClick('section4')} className={`cursor-pointer font-semibold text-lg hover:text-blue-500   ${sticky ? " text-blue-950  " : ""} tablet:text-sm tablet:font-medium`}>Campus</li>
                <li onClick={() => handleNavLinkClick('section5')} className={`cursor-pointer font-semibold text-lg hover:text-blue-500   ${sticky ? " text-blue-950  " : ""} tablet:text-sm tablet:font-medium`}>Testimonials</li>
                <li onClick={() => handleNavLinkClick('section6')} className='cursor-pointer tablet:text-sm tablet:font-medium'><Button text="Contact us" customCss="tablet:py-1 tablet:px-2" /></li>

            </ul>
        </div>
        <img src={menu_icon} alt="menu_icon" className='hidden mobile:block mobile:w-8 mobile:z-10 cursor-pointer'onClick={toggleMenu}/>
    </div>
  )
}

export default Navbar