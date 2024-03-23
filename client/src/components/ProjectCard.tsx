import React from 'react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  imageUrl: string;
  author: string;
  description: string;
  linkTo: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imageUrl, author, description, linkTo }) => {
  return (
    <div className='h-auto md:h-70 bg-white w-full md:w-fit p-3 md:p-6 rounded-2xl flex flex-col items-center justify-center gap-4'>
      <div className='h-44 md:h-60 w-full md:w-80 flex items-center justify-center bg-[#FA782F66] rounded-2xl'>
        <img className='h-44 md:h-60 w-full md:w-80 rounded-2xl' src={imageUrl} alt="Add Icon" />
      </div>
      <div className='flex items-center justify-center flex-col'>
        <h2 className='text-xl md:text-2xl'>{author}</h2>
        <h3 className='text-sm md:text-base gap-2 flex'>{description}<Link to={linkTo} className='text-[#FA782F] text-sm md:text-base'>View</Link></h3>
      </div>
    </div>
  );
};

export default ProjectCard;
