import React from 'react';
import profileImg from '../assets/images/Profile-pic.jpg'
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className='mt-[2rem] sm:flex gap-[3rem] items-center p-[1.5rem]'>
      <img src={profileImg} alt="" className='h-[400px] w-full object-cover sm:h-[500px] sm:w-[500px]'/>

      <div className='text-left'>
      <div className='border-[1px] border-t mt-[2rem] opacity-[.3]'></div>
         <h2 className='mt-[2rem] text-[2.2rem] sm:text-[1.6rem]'>About Me</h2>
         <p className='mt-[1.5rem]'>I’m a junior front-end developer looking for a new role in an exciting company. I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to whatever tools are required. I’m based in Nigeria, Africa, but I’m happy working remotely and have experience in remote teams. When I’m not coding, you’ll find me outdoors. I love being out in nature whether that’s going for a walk, run or cycling. I’d love you to check out my work.</p>

       <Link to={'/portfolio'}>
         <button className='text-[.7rem] mt-[2rem] border-[1.4px] py-[.7rem] px-[1rem] border-black'>GO TO PORTFOLIO</button>
       </Link>

       <div className='border-[1px] border-b mt-[2rem] opacity-[.3]'></div>
      </div>
    </div>

    
  );
}

export default About;
