import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai'
import { AiTwotoneHeart } from 'react-icons/ai'


const CardComponenet = ({ photo, price }) => {
  return (
    <div className="min-w-[20rem] shadow-md rounded-[0.3rem]">
      {/* images */}
      <div className='relative'>
        <img src={photo} classname="rounded-[0.3rem]" />
        <div className='absolute right-0 bottom-0 text-white text-[30px] group cursor-pointer '>
          <AiOutlineHeart />
          <AiTwotoneHeart className="text-red-500 absolute top-0 hidden group-hover:flex duration-500 ease-out" />

        </div>
        <div className='absolute bg-[#1a52b8] text-white px-3 py-[2px] rounded-[0.5rem] text-[12px] top-2 left-2 shadow-lg'><p>New</p></div>
      </div>
      {/* description */}
      <div className='mt-2 ml-4 text-[15px] pb-2'>
        <div className='flex items-center'>
          <div className='w-2 h-2 bg-green-600 rounded-full mr-2 '></div>
          <p>Tizi  Ouzou</p>
        </div>
        <p>{price}</p>
        <div><span>2</span>chambres
        </div>
      </div>

    </div>
  )
}

export default CardComponenet;