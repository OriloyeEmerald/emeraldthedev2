import React, { useState } from 'react';
import headerLogoWhite from '../assets/images/headerLogoWhite.svg'
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Footer = () => {
    const [activeLink, setActiveLink] = useState('home');

    const handleLinkClick = (link) => {
        setActiveLink(link);
      };
  return (
    <div className='bg-[#33323d] text-white w-full mt-[2rem] sm:flex justify-between items-center sm:px-[1rem]'>
      <div className='sm:flex gap-[2rem]'>
      <img src={headerLogoWhite} alt=""  className='mx-auto pt-[2rem] sm:pt-0'/>
      <div className='sm:flex gap-[1rem] font-[100] pt-[1rem] sm:pt-0 uppercase text-[.8rem]'>
                <Link to={'/'} onClick={() => handleLinkClick('home')} className={activeLink === 'home' ? 'active' : ''}>
                  <p className='py-[.5rem]'>Home</p>
                </Link>
                <Link to={'/portfolio'} onClick={() => handleLinkClick('portfolio')} className={activeLink === 'portfolio' ? 'active' : ''}>
                  <p className='py-[.5rem]'>Portfolio</p>
                </Link>
                <Link to={'/contact-me'} onClick={() => handleLinkClick('contact me')} className={activeLink === 'contact me' ? 'active' : ''}>
                  <p className='py-[.5rem]'>Contact Me</p>
                </Link>
                
      </div>
      </div>
      <div className='flex justify-center gap-[1rem] py-[2rem]'>
         <a href='https://github.com/OriloyeEmerald' target="_blank" rel="noopener noreferrer">
        <FaGithub size={30} />
        </a>
         <a href='https://x.com/EmeraldOriloye' target="_blank" rel="noopener noreferrer">
        <FaTwitter size={30} />
        </a>
        <a href='https://www.linkedin.com/in/emmanuel-balogun-the-dev' target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={30} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
