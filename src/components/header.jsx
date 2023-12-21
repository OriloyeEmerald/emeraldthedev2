import React from 'react';
import bgImage from '../assets/images/bg-image.png'
import icon1 from '../assets/images/icon1.svg'

const Header = () => {
  return (
    <>
     <div className='mt-[2rem] sm:relative p-[1.5rem]'>
        <img src={bgImage} alt="" className='w-full lg:h-[600px] object-center'/>
      </div>

      <div className='bg-white py-[2rem] sm:w-[514px] sm:w-[278px] sm:absolute bottom-0 left-[1.5rem] md:left-[11.5rem] z-20 p-[1.5rem]'>
        <h1 className='text-left'>Hey, I’m Emmanuel Balogun and I love building beautiful websites.</h1>
        <div className='flex items-center gap-[1rem] bg-[#203a4c] w-[200px] text-white text-[.7rem] mt-[2rem] font-[200]'>
           <img src={icon1} alt="icon" />
           <p className='py-[.8rem]'>ABOUT ME</p>
        </div>
      </div>
    </>
  );
}

export default Header;
