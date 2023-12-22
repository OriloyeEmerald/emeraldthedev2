import React, { useEffect } from 'react';
import bgImage from '../assets/images/bg-image.png'
import icon1 from '../assets/images/icon1.svg'
import { Link } from 'react-scroll';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Header = () => {

    useEffect(() => {
        Aos.init({duration: 2000});
     }, [])

  return (
    <>
     <div className='mt-[2rem] sm:relative p-[1.5rem]'>
        <img src={bgImage} alt="" className='w-full lg:h-[600px] object-center' />
      </div>

      <div className='bg-white py-[2rem] sm:w-[514px] sm:w-[278px] sm:absolute bottom-0 left-[1.5rem] md:left-[11.5rem] z-20 p-[1.5rem]'  data-aos = "fade-left">
        <h1 className='text-left'>Hey, I’m Emmanuel Balogun and I love building beautiful websites.</h1>
        <Link to='about' smooth={true} duration={800}>
        <div className='flex items-center gap-[1rem] bg-[#203a4c] w-[200px] text-white text-[.7rem] mt-[2rem] font-[200]'>
           <img src={icon1} alt="icon" />
           <p className='py-[.8rem]'>ABOUT ME</p>
        </div>
        </Link>
      </div>
    </>
  );
}

export default Header;
