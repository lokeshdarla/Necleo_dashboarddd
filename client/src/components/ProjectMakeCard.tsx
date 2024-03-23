import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import { Photo } from '../constants';


interface ProjectFormData {
  imageURL: string;
  heading: string;
  description: string;
}


interface AddPhotoFormProps {
  onAddPhoto: (newPhoto: Photo) => void;
}



const ProjectMakeCard: React.FC<AddPhotoFormProps> = ({onAddPhoto}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [formData, setFormData] = useState<ProjectFormData>({
    imageURL: '',
    heading: '',
    description: '',
  });
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    const newPhoto: Photo = {
      id: Date.now().toString(),
      author: formData.heading,
      url: formData.imageURL || '', 
      download_url: formData.imageURL,
      title: formData.heading,
      description: formData.description,
      width: 0,
      height: 0,
    };
    onAddPhoto(newPhoto);
    setFormData({
      imageURL: '',
      heading: '',
      description: '',
    });
    setImagePreview(null);
    closeModal();
  };
  
  



  return (
    <div className='h-[265px] bg-white w-fit p-3 rounded-2xl flex flex-col items-center justify-center gap-4'>
      <button onClick={openModal}>
        <div className='h-44 w-80 flex items-center justify-center bg-[#FA782F66] rounded-2xl'>
          <img className='h-12' src="icons/addicon.png" alt="" />
        </div>
      </button>
      <div className='flex items-center justify-center flex-col'>
        <h2>Create a new project</h2>
        <h3 className='text-sm'>or try a <Link to='/sample-projects' className='text-[#FA782F] text-sm'>sample project</Link></h3>
      </div>
      {modalIsOpen && (
        <div id="authentication-modal" className={`fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-gray-700 bg-opacity-50`}>
          <div className="relative p-4 w-full max-w-md max-h-full">
            {/* Modal content */}
            <div className="relative bg-white rounded-lg shadow">
              {/* Modal header */}
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Create a new project
                </h3>
                <button
                  type="button"
                  className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={closeModal}
                >
                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              {/* Modal body */}
              <div className="p-4 md:p-5">
                <form className="space-y-4" onSubmit={handleSubmit} typeof='submit'>
                  <div>
                    <label htmlFor="heading" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Project Name</label>
                    <input type="text" name="heading" id="heading" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Project Title" required onChange={handleChange} />
                  </div>
                  <div>
                    <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Project Description</label>
                    <input type="text" name="description" id="description" placeholder="Project Description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required onChange={handleChange} />
                  </div>
                  <div>
                    <label htmlFor="imageURL" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Project Image URL</label>
                    <input type="text" name="imageURL" id="imageURL" placeholder="Paste the Image URL" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required onChange={handleChange} />
                  </div>
                  {formData.imageURL && (
                    <div className="mt-2">
                      <img src={formData.imageURL} alt="Preview" className="max-w-full h-auto" />
                    </div>
                  )}
                  <button type="submit" className="w-full text-white bg-[#FA782F]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Create a new project</button>
                  <div className="text-sm font-medium text-gray-500">
                    or try  <a href="#" className="text-[#FA782F] hover:underline dark:text-blue-500">a sample project</a>
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

export default ProjectMakeCard;
