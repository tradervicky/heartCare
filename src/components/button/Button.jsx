import React from 'react'

const Button = ({text, customCss, onClick, icon}) => {
    
  return (
    <>
    <button className={`bg-white px-4 py-2 font-semibold rounded-3xl text-blue-950 border-2 flex items-center hover:bg-blue-200  duration-300 ${customCss}`}>{text}{icon ? <img className='w-8 pl-2' src={icon} alt="" />: ""}</button>
    </>
  )
}

export default Button