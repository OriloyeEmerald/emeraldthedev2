import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Projects from '../projects';
import { Link } from 'react-router-dom';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Contact from '../components/contact';
import Aos from 'aos';
import 'aos/dist/aos.css';



const ProjectDetail = () => {

    useEffect(() => {
        Aos.init({duration: 2000});
     }, [])

    const {id} = useParams();
    


    const project = Projects.find((project) => project.id === parseInt(id));

    const findProjectById = (projectId) => Projects.find((p) => p.id === parseInt(projectId));

    const getNextProject = () => findProjectById((project.id % Projects.length) + 1);

    const getPreviousProject = () => findProjectById(((project.id - 2 + Projects.length) % Projects.length) + 1);


    const handleNavigation = (direction, id) => {
        const currentId = parseInt(id);
        const totalProjects = Projects.length;
    
        let newIndex;
        if (direction === 'next') {
            newIndex = currentId === totalProjects ? 1 : currentId + 1;
        } else if (direction === 'prev') {
            newIndex = currentId === 1 ? totalProjects : currentId - 1;
        }
    
        window.location.href = `/portfolio/${newIndex}`;
    };
    

    const nextProject = getNextProject();
    const previousProject = getPreviousProject();

    if(!project) {
        return (
            <div>PROJECT NOT FOUND</div>
        )
    }

  return (
    <section className='text-left px-[1.5rem] mt-[2rem]'>
       <div
        className={`w-[320px] h-[200px] mx-auto pt-[1.5rem] border-black overflow-hidden sm:w-[650px] sm:h-[330px]`}
        style={{ backgroundColor: `${project.backg}` }}
      >
        <img src={project.image} alt="" className='w-[240px] h-[250px] mx-auto sm:w-[540px] sm:h-[380px]' />
      </div>

      <div className='' data-aos = "fade-left">
        <div className='border-[1px] border-t mt-[2rem] sm:w-full'></div>
    <div className='sm:flex gap-[3rem]
     '>
        <div className='w-[400px]'>
          <h1 className='mt-[1rem] text-[2rem] sm:text-[1.6rem]'>{project.title}</h1>
           <p className='mt-[1rem] leading-[1.6rem] font-[300] text-[.9rem] sm:text-[.8rem]'>
           {project.description}
           </p>
        </div>
        <div className='w-400px'>
          <p className='mt-[1.5rem] text-[#5fb4a2] sm:text-[.8rem]'>{project.points}</p>
          <p className='mt-[1rem] text-[#5fb4a2] sm:text-[.8rem]'>{project.stack}</p>
          <Link to={project.live}>
           <button className='text-[.7rem] mt-[2rem] border-[1.4px] py-[.5rem] px-[1.2rem] border-black uppercase'>
          visit website
           </button>
          </Link>
        </div>
      </div>
        <div className='border-[1px] border-b mt-[1.5rem]'></div>
      </div>

      <h1 className='mt-[1rem] text-[1.6rem] font-[500]'>Project Background</h1>

      <p className='mt-[1.5rem] sm:text-[.8rem]
      ' data-aos = "fade-left">{project.projBack}</p>

      <h1 className='mt-[1rem] text-[1.6rem] font-[500]'>Static Previews</h1>

      <div
        className={`w-[320px] h-[200px] mx-auto pt-[1.5rem] border-black overflow-hidden mt-[2rem] sm:w-[650px] sm:h-[330px]`}
        style={{ backgroundColor: `${project.backg}` }}
         data-aos = "fade-down">
        <img src={project.image} alt="" className='w-[240px] h-[250px] mx-auto sm:w-[540px] sm:h-[380px]' />
      </div>

      <div
        className={`w-[320px] h-[200px] mx-auto pt-[1.5rem] border-black overflow-hidden mt-[1.5rem] sm:w-[650px] sm:h-[330px]`}
        style={{ backgroundColor: `${project.backg}` }}
      >
        <img src={project.staticImg} alt="" className='w-[240px] h-[250px] mx-auto sm:w-[540px] sm:h-[380px]' />
      </div>
      <div className='border-[1px] border-t mt-[2rem]'></div>
      <div className='flex items-center h-[140px]'>
        <div className='text-left flex-1'>
          <IoIosArrowBack size={30} className='opacity-[.5]' onClick={() => handleNavigation('prev', id)}/>
          
          <h1 className='text-[1.3rem]'>{previousProject.title}</h1>
          <p className='capitalize opacity-[.5] text-[.8rem]'>previous project</p>
        </div>

        <div className='border-[2px] border-r h-full '></div>

        <div className='text-right flex-1   py-[1rem]'>
        <IoIosArrowForward size={30} className='ml-auto opacity-[.5]' onClick={() => handleNavigation('next', id)}/>
          
          <h1 className='text-[1.3rem]'>{nextProject.title}</h1>
          <p className='capitalize opacity-[.5] text-[.8rem]'>next project</p>
        </div>
      </div>
      <div className='border-[1px] border-b '></div>


     <Contact />
    </section>
  );
}

export default ProjectDetail;
