import React from 'react'

const HeroBtn = ({ title }) => {
  return (
    <div className='relative group'>
      <div className='text-white font-semibold px-1.5'>
        {title}
      </div>
      <div className='absolute h-[3px]  group-hover:bg-[#e20112] w-full duration-200 ease-out cursor-pointer outline-0'>
      </div>
    </div>
  )
}

export default HeroBtn