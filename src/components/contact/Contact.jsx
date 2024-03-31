import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import whiteArrow from '../../assets/white-arrow.png'
import { useState } from 'react'
import Button from '../button/Button'

const Contact = () => {
    const [result, setResult] = useState("");


  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a19e508d-9c41-47b7-9426-d0bdbefeab85");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='flex mx-[150px] my-24 big-tablet:mx-10 mobile:flex-col'>
      
        <div className="contact-col basis-[48%] pr-2 text-gray-500">
            <h3 className='text-2xl font-semibold text-blue-800 flex items-centermb-5'>Send us a  <img src={msg_icon} alt="msg_icon"  className='w-9 ml-3'/> </h3>
            <p className='max-w-[450px] mt-4  ml-3'>Take charge of your health journey - message us now to discover how we can support you every step of the way!</p>
            <ul>
                <li className='flex items-center my-5'> <img className='w-6 mr-3' src={mail_icon} alt="" /> contact@heartcare.in</li>
                <li className='flex items-center my-5'><img className='w-6 mr-3' src={phone_icon} alt="" />+91- 75987852</li>
                <li className='flex items-center my-5'><img className='w-6 mr-3' src={location_icon} alt="" />69 Mathiya Gaon <br /> Nala Sopara Mumbai, India</li>
            </ul>
        </div>
        <div className="basis-[48%] mr-0">
            <form onSubmit={onSubmit} className="flex flex-col">
                <label htmlFor="" className='text-lg font-semibold text-blue-950'>
                    Your name
                </label>
                <input type="text" name='name' placeholder='Enter your name' required className='px-4 py-2 bg-slate-100 rounded-lg mb-4 mt-2' />
                <label htmlFor="" className='text-lg font-semibold text-blue-950'>
                    Phone Number
                </label>
                <input type="tel" name='phone' placeholder='Enter your mobile number' required className='px-4 py-2 bg-slate-100 rounded-lg mb-4 mt-2'/>
                <label htmlFor="" className='text-lg font-semibold text-blue-950'>Write your message here</label>
                <textarea name="message" rows="6" placeholder='Enter your message' required className='px-4 py-2 bg-slate-100 rounded-lg mb-4 mt-2'></textarea>
                <div>
                <button type='submit' className='bg-blue-950 text-white text-lg font-semibold px-4 py-2 rounded-3xl flex items-center justify-center hover:bg-blue-500 duration-300 ease-in-out big-tablet:py-1 big-tablet:px-2 big-tablet:text-lg big-tablet:font-normal'>Submit now <img src={whiteArrow} alt="" className='w-5 ml-4' /></button>
                </div>
            </form>
            <span>{result}</span>
        </div>
        
    </div>
  )
}

export default Contact