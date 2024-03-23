import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  imageUrl: string;
  author: string;
  description: string;
  linkTo: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imageUrl, author, description, linkTo }) => {
  const [showModal, setShowModal] = useState(false);

  const handleViewClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className='h-auto bg-white w-full md:w-fit p-1 md:p-3 rounded-2xl flex flex-col items-center justify-center gap-4 mx-1'>
      <div className='h-44 w-full md:w-80 flex items-center justify-center bg-[#FA782F66] rounded-2xl'>
        <img className='h-44 w-full md:w-80 rounded-2xl' src={imageUrl} alt="Project" />
      </div>
      <div className='flex items-center justify-center flex-col'>
        <h2 className='text-sm md:text-md'>{author}</h2>
        <h3 className='text-sm md:text-md gap-2 flex'>{description}<button className='text-[#FA782F] text-sm md:text-base' onClick={handleViewClick}>View</button></h3>
      </div>
      {showModal && (
        <div id="authentication-modal" className={`fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-gray-700 bg-opacity-50`}>
          <div className="relative p-4 w-full max-w-md max-h-full">

            <div className="relative bg-white rounded-lg shadow">

              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Project Details
                </h3>
                <button
                  type="button"
                  className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={handleCloseModal}
                >
                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              {/* Modal body */}
              <div className="p-4 md:p-5">
                <form className="space-y-4" typeof='submit'>
                  <div>
                    <label htmlFor="heading" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Project Name</label>
                    <input type="text" name="heading" id="heading" value={author} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " placeholder="Project Title" required />
                  </div>
                  <div>
                    <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Project Description</label>
                    <input type="text" name="description" value={description} id="description" placeholder="Project Description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " required />
                  </div>
                  <div>
                    <label htmlFor="imageURL" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Project Image URL</label>
                    <input type="text" name="imageURL" value={imageUrl} id="imageURL" placeholder="Paste the Image URL" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " required />
                  </div>
                  <div className="mt-2">
                    <img src={imageUrl} alt="Preview" className="max-w-full h-auto" />
                  </div>
                  <div className='flex items-center justify-center gap-4'>
                    <button type="submit" className="w-full text-white bg-red-600  font-medium rounded-lg text-sm px-5 py-2.5 text-center">Delete</button>
                    <button type="submit" className="w-full text-white bg-[#FA782F]   font-medium rounded-lg text-sm px-5 py-2.5 text-center">Save</button>
                  </div>


                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
