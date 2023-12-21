import React, { useEffect, useState } from 'react';
import headerLogo from '../assets/images/header-logo.svg'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    const [activeLink, setActiveLink] = useState('home');
    

    const handleShowMenu = () => {
        setShowMenu(true)
       
    }

    const handleCloseMenu = () => {
        setShowMenu(false)
    }

    // useEffect(() => {

    //     document.addEventListener('click', handleCloseMenu);

    //     return () => {
    //       document.removeEventListener('click', handleCloseMenu);
    //     };
    //   }, []);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <section className='p-[1.5rem]'>
        <div className='flex justify-between items-center text-[#33323d]'>
            <img src={headerLogo} alt="header-logo" className='' /> 
            
            <nav className={showMenu ?'flex-col absolute right-[1.5rem] top-[4.5rem] bg-[#33323d] text-white w-[255px] h-[200px] py-[2.2rem] gap-[1rem] uppercase text-[.9rem] font-[100]': 'sm:flex sm:items-center gap-[2rem] uppercase text-[.8rem] hidden'} style={{display: showMenu && 'flex'}}>
               <Link to="/" onClick={() => handleLinkClick('home')} className={activeLink === 'home' ? 'active' : ''}>Home</Link>
               <Link to="/portfolio" onClick={() => handleLinkClick('portfolio')} className={activeLink === 'portfolio' ? 'active' : ''}>Portfolio</Link>
               <Link to ="/contact-me" onClick={() => handleLinkClick('contact me')} className={activeLink === 'contact me' ? 'active' : ''}>Contact Me</Link>
            </nav>
            {!showMenu ? <AiOutlineMenu size={30} className='sm:hidden relative' onClick={handleShowMenu}/> :  <AiOutlineClose size={30} className='sm:hidden relative' onClick={handleCloseMenu}/>}
           
        </div>
    </section>
  );
}

export default Navbar;
