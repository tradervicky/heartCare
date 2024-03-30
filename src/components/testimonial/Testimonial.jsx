import nextIcon from '../../assets/next-icon.png'
import backIcon from '../../assets/back-icon.png'
import { useState } from 'react'
import Card from './card/Card'
import { data } from '../data/data'

const Testimonial = () => {
  const [startIndex, setStartIndex] = useState(0);
  // const [direction, setDirection] = useState(null);
  const itemsPerPage = 2;

  const slideForward = () => {
    if (startIndex + itemsPerPage < data.length) {
      setStartIndex(prevIndex => prevIndex + 1);
      // setDirection('forward');
    }
  }

  const slideBackward = () => {
    if (startIndex - 1 >= 0) {
      setStartIndex(prevIndex => prevIndex - 1);
      // setDirection('backward');
    }
  }

  const visibleItems = data.slice(startIndex, startIndex + itemsPerPage);
console.log(visibleItems)
  return (
    <div className='relative mx-[165px] my-24 big-tablet:mx-10 laptop:mx-5 desktop:mx-10 small-laptop:mx-2 mobile:mx-0'>
      <img
        src={nextIcon}
        alt=""
        className='cursor-pointer bg-blue-800 absolute top-[44%] right-0 p-4 rounded-full w-[50px]  small-laptop:w-[25px] small-laptop:p-2'
        onClick={slideForward}
      />
      <img
        src={backIcon}
        alt=""
        className='cursor-pointer bg-blue-800 absolute top-[44%] left-0 p-4 rounded-full w-[50px] small-laptop:w-[25px] small-laptop:p-2'
        onClick={slideBackward}
      />
      <div className='flex justify-center gap-8 items-center big-tablet:gap-2'>
        {visibleItems.map((item, index) => (
          <Card
            key={index}
            image={item.image}
            name={item.name}
            place={item.Place}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  )
}

export default Testimonial
