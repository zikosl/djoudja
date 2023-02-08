import React from 'react'
import home from '../assests/home.png'
import HeroBtn from './HeroBtn'
import { RiSearchLine } from 'react-icons/ri'
import SearchBar from './search'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
  const navigate = useNavigate();

  const buttons = ["acceuil", "acceuil", "acceuil", "acceuil", "contacter"];
  return (
    <div className='sm:h-[28rem] h-[25rem] flex bg-red-400 overflow-hidden'>
      <div className="absolute w-full z-20 ">
        <div className='bg-gray-900/10 absolute z-10 w-full h-[25rem]'></div>
        <img src={home} className="object-cover w-full  h-[27rem]  sm:h-[30rem]" />
      </div>
      <div className=" relative z-30 flex flex-col items-center  w-full pt-12 ">
        <p className='text-white text-[32px]  sm:text-[57px] font-bold '>A chacun leur maison.</p>
        <p className='text-white sm:pt-0 sm:text-[19px]  pt-2 '>Trouver un immobilier qui vous convient parfaitement !</p>
        <ul className>
          <div className='flex space-x-8 mt-9 mb-9'>
            {buttons.map((button) => (<HeroBtn title={button} />))}
          </div>
        </ul>
        {/* input   */}
        <SearchBar callback={() => { navigate("/search") }} />
      </div>

    </div>
  )
}

export default Hero