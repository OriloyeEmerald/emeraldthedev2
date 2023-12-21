import React from 'react';
import { Link } from 'react-router-dom';

const Project = ({ title, description, image, backg, id }) => {
  const isEvenId = id % 2 === 0;

  return (
    <div
      className={`text-left p-[1.5rem] sm:flex gap-[2rem] items-center project-div ${
        isEvenId ? 'sm:flex-row-reverse' : ''
      }`}
    >
      <div
        className={`w-[330px] h-[270px] mx-auto pt-[1.5rem] border-black overflow-hidden`}
        style={{ backgroundColor: `${backg}` }}
      >
        <img src={image} alt="" className='w-[250px] h-[250px] mx-auto' />
      </div>
      <div className='sm:w-[300px]'>
        <div className='border-[1px] border-t mt-[2rem]'></div>
        <h1 className='mt-[1rem] text-[2.1rem] sm:text-[1.6rem]'>{title}</h1>
        <p className='mt-[1rem] leading-[1.6rem] font-[300] sm:text-[.8rem]'>
          {description}
        </p>
        <Link to={`/portfolio/${id}`}>
           <button className='text-[.7rem] mt-[2rem] border-[1.4px] py-[.5rem] px-[1.2rem] border-black uppercase'>
          view project
           </button>
        </Link>
        <div className='border-[1px] border-b mt-[1.5rem]'></div>
      </div>
    </div>
  );
};

export default Project;
