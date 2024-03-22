import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdArrowDropDown } from "react-icons/md";


const DropdownButton = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

 

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleLogout=()=>{
    localStorage.removeItem("accessToken")
    navigate("/auth");
  }

  return (
    <div className="relative inline-block">
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className={`font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center`}
        type="button"
        onClick={toggleDropdown}
      >
        <div className="flex items-center space-x-4">
          <img className="w-[50px] h-[50px] rounded-full" src='https://media.vanityfair.com/photos/6481dc94bafc6505d771230f/1:1/w_4000,h_4000,c_limit/1495240060' alt="Author Avatar" />
          <MdArrowDropDown size={30}/>
        </div>
      </button>

      {isDropdownOpen && (
        <div
          id="dropdown"
          className="absolute z-10 top-full right-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
        >
          <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownDefaultButton">
            <li>
              <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100 ">
                Profile
              </Link>
            </li>
            <li>
              <button onClick={handleLogout} className="block  px-4 py-2 hover:bg-gray-100 w-full text-start">
                Log Out
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
