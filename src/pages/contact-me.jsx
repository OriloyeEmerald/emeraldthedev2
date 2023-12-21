import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import Form from '../components/form';

const ContactMe = () => {
  return (
    <section className='text-left p-[1.5rem]'>
        <div className='border-[1px] border-t '></div>
        <h1 className='mt-[1rem] text-[2.2rem]'>Get in Touch</h1>
        <p className='mt-[1rem]'>I’d love to hear about what you’re working on and how I could help. I’m currently looking for a new role and am open to a wide range of opportunities. I’m a hard-working and positive person who will always approach each task with a sense of purpose and attention to detail. Please do feel free to check out my online profiles below and get in touch using the form.</p>
        
        <div className='flex gap-[1rem] py-[2rem]'>
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
        <div className='border-[1px] border-b mt-[.5rem] '></div>

        <Form />
    </section>
  );
}

export default ContactMe;
