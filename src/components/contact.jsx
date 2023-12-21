import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className='sm:flex items-center  justify-between p-[1.5rem] mt-[2rem] text-center'>
      <h2 className='text-center sm:text-left'>Interested in doing a project together?</h2>
      <Link to={'/contact-me'}>
         <button className='text-[.6rem] border-[1.3px] border-black py-[.4rem] px-[1.2rem] mt-[1rem] sm:mt-0'>CONTACT ME</button>
      </Link>
   </div>
  );
}

export default Contact;
