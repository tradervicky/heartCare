import React from 'react'
import Button from '../button/Button'
import logo from '../../assets/logo.jpg'
const Navbar = () => {
  return (
    <div className='w-full bg-transparent text-white py-2 px-20 fixed top-0 left-0 flex items-center justify-between z-10  '>
        <div>
            <img src={logo} alt="logo png" className='w-20 h-20 rounded-full shadow-lg border-2 border-blue-500 cursor-pointer'/>
        </div>
        <div>
            <ul className='flex justify-between gap-16 items-center text-white'>
                <li className='cursor-pointer font-semibold text-lg hover:text-blue-500'>Home</li>
                <li className='cursor-pointer font-semibold text-lg hover:text-blue-500'>Program</li>
                <li className='cursor-pointer font-semibold text-lg hover:text-blue-500'>About us</li>
                <li className='cursor-pointer font-semibold text-lg hover:text-blue-500'>Campus</li>
                <li className='cursor-pointer font-semibold text-lg hover:text-blue-500'>Testimonials</li>
                <li className='cursor-pointer'><Button text="Contact us" /></li>

            </ul>
        </div>
    </div>
  )
}

export default Navbar