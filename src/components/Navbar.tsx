import { useState } from 'react'
import {useNavigate } from 'react-router-dom';
// import { useStateContext } from '../context';
// import { CustomButton } from './';
// import { logo, menu, search, thirdweb } from '../assets';
import { IoMenu } from "react-icons/io5";
import { navlinks } from '../constants';
import { SiPolymerproject } from 'react-icons/si';
import { RxDividerVertical } from "react-icons/rx";

import DropdownButton from './UserDropdown';

const Navbar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState('dashboard');
  const [toggleDrawer, setToggleDrawer] = useState(false);

  return (
    <div className=" flex justify-between items-center mb-[35px] gap-6 w-full">
       {/* <div className=' items-center flex justify-center py-5'>
        <img className='h-8' src='logo.png' alt='Logo' />
      </div>
      <div className="p-3">
        <h1 className='flex items-center justify-center gap-3 text-base '>Free Trial <RxDividerVertical /><span className='text-sm'>2days left</span></h1>
        <button className='flex items-start justify-center gap-3 text-base text-[#FA782F]'>Extend free trail</button>
        <div className="flex-row items-center justify-end hidden gap-4 sm:flex">
        <DropdownButton/>
      </div>
      </div> */}
       <div className='items-center flex justify-center pl-15'>
          <img className='h-8 ' src='logo.png' alt='Logo' />
      </div>
      <div className='items-center flex justify-center py-5'>
        <div>
        <h1 className='flex items-center justify-center gap-3 text-base '>Free Trial <RxDividerVertical /><span className='text-sm'>2days left</span></h1>
        <button className='flex items-start justify-center gap-3 text-base text-[#FA782F]'>Extend free trail</button>
        </div>

        <div className="flex-row items-center justify-end hidden gap-4 sm:flex">
        <DropdownButton/>
      </div>
      </div>
     
    </div>
  )
}

export default Navbar
