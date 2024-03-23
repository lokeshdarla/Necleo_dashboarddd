import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaDatabase } from "react-icons/fa";
import { RiAppsFill } from "react-icons/ri";
import { TbAppsFilled } from "react-icons/tb";
import { FaCirclePlay } from "react-icons/fa6";
import { FaCircleQuestion } from "react-icons/fa6";
import { HiMenuAlt1 } from "react-icons/hi";
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const closeSidebar = (event) => {
      if (isMenuOpen && !event.target.closest(".sidebar")) {
        setIsMenuOpen(false);
      }
    };

    document.body.addEventListener("click", closeSidebar);

    return () => {
      document.body.removeEventListener("click", closeSidebar);
    };
  }, [isMenuOpen]);

  return (
    <div className="relative">
      {isMenuOpen && (
        <aside className='sidebar-open'>
          <div className='flex-col bg-white items-start flex justify-between pl-8 h-[100%] z-10 min-w-[280px] py-8'>
            <div className='flex-col items-center flex justify-center'>
              <div className='items-start flex justify-start pb-4'>
                <img className='h-8' src='/logo.png' alt='Logo' />
              </div>
              <hr className='border border-gray-300 text-black' />
              <div className='items-center flex justify-center border-y-2 border-gray-300 w-full gap-5'>
                <div className='items-start flex justify-center flex-col py-5 gap-5'>
                  <NavLink
                    to="/my-projects"

                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "items-center flex justify-center gap-5 text-[#FA782F] text-base font-[500]" : "items-center flex justify-center gap-5 text-[#C4C4C4] text-base font-[500]"
                    }
                  >
                    <FaDatabase size={20} />
                    My Projects
                  </NavLink>
                  <NavLink
                    to="/sample-projects"

                    className={({ isActive }) =>
                      isActive ? "items-center flex justify-center gap-5 text-[#FA782F] text-base font-[500]" : "items-center flex justify-center gap-5 text-[#C4C4C4] text-base font-[500]"
                    }
                  >
                    <RiAppsFill size={20} />
                    Sample Projects
                  </NavLink>
                </div>
              </div>
              <div className='items-start flex justify-center border-b-2 border-gray-300 w-full gap-5'>
                <div className='items-start flex justify-center flex-col py-5 gap-5'>
                  <Link to="/apps" className='items-center flex justify-center gap-5 text-[#C4C4C4]  text-base font-[400]'>
                    <TbAppsFilled size={20} />
                    Apps
                  </Link>
                  <Link to="/intro" className='items-center flex justify-center gap-5 text-[#C4C4C4]  text-base font-[400]'>
                    <FaCirclePlay size={20} />
                    Intro to Necleo
                  </Link>
                </div>
              </div>
            </div>
            <div className='flex-col items-center flex justify-center'>
              <div className='items-center flex justify-center w-full gap-5'>
                <div className='items-start flex justify-center flex-col py-5 gap-5'>
                  <Link to="/" className='items-center flex justify-center gap-5 text-[#C4C4C4] text-base font-[500]'>
                    <FaCircleQuestion size={23} />
                    Help & Support
                  </Link>
                  <Link to="/sample-projects" className='items-center flex justify-center gap-5 text-[#C4C4C4] text-base font-[500]'>
                    <img className='h-6' src='icons/exclamation.png' alt='Sample Projects' />
                    Sample Projects
                  </Link>
                  <button onClick={() => setIsMenuOpen(false)} className='items-center flex justify-center gap-5 text-base font-[500]'>
                    <img className='h-7' src='icons/exit.png' alt='Collapse' />
                    Collapse
                  </button>
                </div>
              </div>
            </div>
          </div>
        </aside>
      )}
      <div
        className={`fixed top-0 left-0 z-40 w-full h-full ${isMenuOpen ? "block" : "hidden"
          } bg-black opacity-50`}
      />
      <div className='fixed top-5 left-5 z-50 cursor-pointer flex items-center justify-center gap-4'>
        <HiMenuAlt1
          size={30}
          color='black'
          onClick={() => setIsMenuOpen(true)}
        />
        <img className='hidden md:block h-7' src='/logo.png' alt='Logo' />
      </div>
    </div>
  );
}

export default Sidebar;
