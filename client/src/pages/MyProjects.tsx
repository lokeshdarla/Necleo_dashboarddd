import React, { useEffect, useState } from 'react';
import ProjectMakeCard from '../components/ProjectMakeCard';
import { fetchPhotos } from '../api/getPhoto';
import { Photo } from '../constants';
import ProjectCard from '../components/ProjectCard';
import { fetchProjects, createProject, updateProject, deleteProject } from '../api/Projectapi';

const MyProjects = () => {
  const [data, setData] = useState<Photo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  const handleSubmit = (newProject: Photo) => {
    setData(prevData => [...prevData, newProject]);
    createProject(newProject);
    console.log("Data Added Successfully");
    console.log(data);
  }

  const handleDelete = async (id: string) => {
    try {
      await deleteProject(id);
      console.log("Data Deleted Successfully");
      setData(prevData => prevData.filter(project => project.id !== id));
      console.log(data);
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };


  const handleUpdate = async (id: string, updatedProject: Photo) => {
    try {
      await updateProject(id, updatedProject);
      console.log("Data Updated Successfully");
      setData(prevData =>
        prevData.map(project => (project.id === id ? updatedProject : project))
      );
      console.log(data);
    } catch (error) {
      console.error("Error updating project:", error);
    }
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const [responseData1, responseData2] = await Promise.all([
          fetchPhotos(),
          fetchProjects()
        ]);
        const combinedData = [...responseData1, ...responseData2];
        setData(combinedData);
      } catch (error) {
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  return (
    <div className='bg-gray-50 min-h-screen rounded-xl py-5 mt-20 min-w-full  items-center justify-center flex-1'>
      <div className='flex flex-col justify-end items-start gap-4 w-full'>
        <h1 className='text-left text-2xl px-10 font-[600]'>My Projects</h1>
        <div className='flex items-center justify-start gap-4'>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4'>
            <ProjectMakeCard onAddPhoto={handleSubmit} />
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
