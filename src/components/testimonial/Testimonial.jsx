import nextIcon from '../../assets/next-icon.png'
import backIcon from '../../assets/back-icon.png'
import { data } from '../data/data'
import Card from './card/Card'
const Testimonial = () => {
  const slideForward = ()=>{
    
  }
  const slideBackward = ()=>{

  }
  return (
    <div className='relative mx-[165px] my-24'>
        <img src={nextIcon} alt="" className='cursor-pointer bg-blue-800 
        absolute top-[44%] right-0 p-4 rounded-full w-[50px]' 
        onClick={slideForward}
        />
        <img src={backIcon} alt="" className='cursor-pointer bg-blue-800 
        absolute top-[44%] left-0 p-4 rounded-full w-[50px]' 
        onClick={slideBackward}
        />
      <div className='flex  overflow-hidden justify-center items-center'>
        {
          data.map((data, index)=>
         <Card image={data.image} name={data.name} place={data.Place} desc={data.desc} key={index}/> )
        }
      </div>
    </div>
  )
}

export default Testimonial