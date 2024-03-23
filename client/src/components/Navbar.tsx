import { useState } from 'react'
import {useNavigate } from 'react-router-dom';

// import { useStateContext } from '../context';
// import { CustomButton } from './';
// import { logo, menu, search, thirdweb } from '../assets';
import { RxDividerVertical } from "react-icons/rx";

import DropdownButton from './UserDropdown';
import React from 'react';

const Navbar = () => {

  return (
    <div className="flex md:justify-end justify-end  items-center gap-6  fixed bg-white w-full">
     
      <div className='items-center flex justify-center pt-3'>
        <div>
        <h1 className='flex items-center justify-center gap-3 text-base '>Free Trial <RxDividerVertical /><span className='text-sm'>2days left</span></h1>
        <button className='flex items-start justify-center gap-3 text-base text-[#FA782F]'>Extend free trail</button>
        </div>

        <div className="flex-row items-center justify-end gap-4 flex">
        <DropdownButton/>
      </div>
      </div>
     
    </div>
  )
}

export default Navbar
