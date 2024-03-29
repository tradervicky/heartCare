import React from 'react'

const Footer = () => {
    return (
      <div className='my-5 mx-20 flex items-center justify-between border-t-2 border-gray-500 py-4'>
          <p> &copy; 2024 Edusity. All rights reserved </p>
          <ul>
              <li className='ml-5 inline-block'>Terms of Services</li>
              <li className='ml-5 inline-block'>Privacy Policy</li>
          </ul>
      </div>
    )
  }
  
  export default Footer