import React from 'react';
import { Link } from 'react-router-dom';
import { FaDatabase } from "react-icons/fa";
import { RiAppsFill } from "react-icons/ri";
import { TbAppsFilled } from "react-icons/tb";
import { FaCirclePlay } from "react-icons/fa6";
import { FaCircleQuestion } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <div className='flex-col items-start flex justify-between pl-8 h-[90%] z-10 min-w-[280px] h-screen py-8'>
      <div className='flex-col items-center flex justify-center'>
      <div className='items-start flex justify-start pb-4'>
          <img className='h-8 ' src='logo.png' alt='Logo' />
      </div>
      <hr className='border border-gray-300 text-black'/>
      <div className=' items-center  flex justify-center  border-y-2 border-gray-300 w-full gap-5'>
        <div className='items-start flex justify-center flex-col py-5 gap-5'>
          <Link to="/my-projects" className=' items-center flex justify-center gap-5 text-[#FA782F] text-base font-[500]'>
            <FaDatabase size={20}/>
            My Projects
          </Link>
          <Link to="/sample-projects" className=' w-full items-center flex justify-center gap-5 text-[#C4C4C4]  text-base font-[500]'>
            <RiAppsFill size={20}/>
            Sample Projects
          </Link>
        </div>
       
      </div>
      <div className=' items-start  flex justify-center  border-b-2 border-gray-300 w-full gap-5'>
          <div className='items-start flex justify-center flex-col py-5 gap-5'>
            <Link to="/apps" className=' items-center flex justify-center gap-5 text-[#C4C4C4]  text-base font-[400]'>
              <TbAppsFilled size={20}/>
              Apps
            </Link>
            <Link to="/intro-to-necleo" className=' items-center flex justify-center gap-5 text-[#C4C4C4]  text-base font-[400]'>
              <FaCirclePlay size={20}/>
              Intro to Necleo
            </Link>
          </div>
        </div>
      </div>
      <div className='flex-col items-center flex justify-center'>
      <div className=' items-center  flex justify-center   w-full gap-5'>
        <div className='items-start flex justify-center flex-col py-5 gap-5'>
          <Link to="/" className='items-center flex justify-center gap-5 text-[#C4C4C4] text-base font-[500]'>
            <FaCircleQuestion size={23}/>
            Help & Support
          </Link>
          <Link to="/sample-projects" className='items-center flex justify-center gap-5 text-[#C4C4C4] text-base font-[500]'>
            <img  className='h-6' src='icons/exclamation.png'/>
            Sample Projects
          </Link>
          <button className='items-center flex justify-center gap-5  text-base font-[500]'>
          <img  className='h-7' src='icons/exit.png'/>
            Collapse
          </button>
        </div>
       
      </div>
     
      </div>
    </div>
  )
}

export default Sidebar;
