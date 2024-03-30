
const Card = ({image, name, place , desc}) => {
  return (
    <div className=' my-24 '>
        <div className='w-[400px] rounded-xl overflow-hidden p-10 border shadow-2xl small-laptop:w-[200px] big-tablet:p-4 mobile:w-[160px]'>
        <div className='flex gap-5 items-center'>
            <div className='w-16 h-16 '>
                <img src={image} alt="" className='w-full rounded-full border-2 border-blue-800'/>
            </div>
            <div>
                <h3 className='text-lg font-semibold text-blue-600 mobile:text-base'>{name}</h3>
                <p className='text-md font-semibold text-gray-500 mobile:text-sm'>{place}</p>
            </div>
        </div>
        <div className="mt-4">
            <p className='text-md font-semibold text-gray-500 mobile:text-sm'>{desc}</p>
        </div>
        </div>
    </div>
  )
}

export default Card