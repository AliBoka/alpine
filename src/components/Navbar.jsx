import React from "react";
import '../index.css'
const Navbar = () => {
  return (
    <div className="flex items-center w-full p-6  font-paytoneone text-white">
      <div className="flex justify-center h-16 w-36  bg-no-repeat items-center bg-bg-logo text-2xl pr-4 pb-2"
      
      >
          ALPINE
      </div>
      <div className="ml-14">
        <ul className="flex">
          <li className="px-4 cursor-pointer py-3">ABOUT US</li>
          <li className="px-4 cursor-pointer py-3">PRICING</li>
          <li className="px-4 cursor-pointer py-3">MOBILE</li>
          <li className="px-4 cursor-pointer py-3">BLOG</li>
        </ul>
    
      </div>
    </div>
  );
};

export default Navbar;
