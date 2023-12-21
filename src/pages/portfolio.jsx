import React from 'react';
import Projects from '../projects';
import Project from '../components/project';
import Contact from '../components/contact';

const Portfolio = () => {
  return (
    <div>
      {Projects.map((project, id) => {
        return (
            <Project title={project.title} description={project.description} key={id} image={project.image} backg={project.backg} id={project.id}/>
        )
      })}
      <Contact />
    </div>
  );
}

export default Portfolio;
