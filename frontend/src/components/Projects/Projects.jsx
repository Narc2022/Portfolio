import { Button, Typography } from '@mui/material';
import React from 'react';
import "./Projects.css";
import {AiOutlineProject} from 'react-icons/ai'
import { Delete } from '@mui/icons-material';

const ProjectCard = ({
  url,
  projectImage,
  projectTitle,
  description,
  technologies,
  isAdmin = false,
}) =>{
  return(
    <>
    <a href={url} className="projectCard" target='black'>
      <div>
        <img src={projectImage} alt="Project" />
        <Typography variant='h5'>{projectTitle}</Typography>
      </div>
      <div>
        <Typography variant='h4'>About Project</Typography>
      <Typography>{description}</Typography>
        <Typography variant='h6'>Tech Stack:{technologies}</Typography>
      </div>
      
    </a>
    {isAdmin && (
      <Button style={{color:"rgba(40,40,40,0.7)"}}>
        <Delete />
      </Button>
    )}
    </>
  )
}


const Projects = () => {
  const projects = [1,2,3];
  return <div className='projects'>
      <Typography variant='h3'>Projects 
      <AiOutlineProject />
      </Typography>
      <div className="projectsWrapper">
        {projects.map((project,index)=>(
          <ProjectCard 
             url="https://github.com/Narc2022"
             projectImage="https://picsum.photos/300/200/?blur=2"
             projectTitle="Sample Project"
             description="This is sample project"
             technologies="Mern Stack"
          />
        ))}
      </div>
    </div>
}

export default Projects;