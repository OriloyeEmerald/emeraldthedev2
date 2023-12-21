import React from 'react';
import headerLogoWhite from '../assets/images/headerLogoWhite.svg'
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';


const Footer = () => {
  return (
    <div className='bg-[#33323d] text-white w-full mt-[2rem] sm:flex justify-between items-center sm:px-[1rem]'>
      <div className='sm:flex gap-[2rem]'>
      <img src={headerLogoWhite} alt=""  className='mx-auto pt-[2rem] sm:pt-0'/>
      <div className='sm:flex gap-[1rem] font-[100] pt-[1rem] sm:pt-0 uppercase text-[.8rem]'>
                <p className='py-[.5rem]'>Home</p>
                <p className='py-[.5rem]'>Portfolio</p>
                <p className='py-[.5rem]'>Contact Me</p>
      </div>
      </div>
      <div className='flex justify-center gap-[1rem] py-[2rem]'>
      <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
        <FaGithub size={30} />
      </a>
      <a href="https://twitter.com/your-username" target="_blank" rel="noopener noreferrer">
        <FaTwitter size={30} />
      </a>
      <a href="https://www.linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={30} />
      </a>
    </div>
    </div>
  );
}

export default Footer;
