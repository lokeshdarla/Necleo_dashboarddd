import React, { useEffect, useState } from 'react';
import ProjectMakeCard from '../components/ProjectMakeCard';
import { fetchPhotos } from '../api/getPhoto';
import { Photo } from '../constants';
import ProjectCard from '../components/ProjectCard';

const MyProjects = () => {
  const [data, setData] = useState<Photo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await fetchPhotos();
        setData(responseData);
      } catch (error) {
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='bg-gray-50 min-h-screen rounded-xl p-5 mt-20 min-w-full  items-center justify-center flex-1'>
      <div className='flex flex-col justify-end items-start gap-4 w-full'>
      <h1 className='text-left text-2xl px-10 font-[600]'>My Projects</h1>
      <div className='flex items-center justify-start gap-4'>
     
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4'>
      <ProjectMakeCard />
        {data.map((photo) => (
          <ProjectCard key={photo.id} linkTo={photo.download_url} imageUrl={photo.download_url} author={photo.author} description='this is description' />
        ))}
      </div>
    </div>

      </div>
    </div>
  );
};

export default MyProjects;
