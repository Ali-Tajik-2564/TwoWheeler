import React from 'react';
import { Link } from 'react-router-dom';

export default function Headers() {
  return (
    <div className="w-full flex justify-between items-center px-4 h-20 bg-bgPrimary">
      <div className="w-44 text-textPrimary lg:text-2xl md:text-xl text-lg font-semibold  ">
        <Link to={'/'}>two wheelers</Link>
      </div>
      <ul className="flex flex-row-reverse justify-start items-center lg:space-x-8 space-x6 text-textPrimary md:text-base text-sm lg:font-semibold font-normal  ">
        <li className="p-6">
          <Link to={'/login'}>
            <button className="text-bgPrimary bg-textPrimary p-1 w-28  rounded-md  ">
              Login
            </button>
          </Link>
        </li>
        <li className="lg:p-6 p-4">
          <Link to={'/contact-us'}>Contact Us</Link>
        </li>
        <li className="lg:p-6 p-4">
          <Link to={'/blogs'}>Our Blog</Link>
        </li>
        <li className="lg:p-6 p-4">
          <Link to={'/motorcycle-show'}>Motorcycles</Link>
        </li>
        <li className="lg:p-6 p-4">
          <Link to={'/'}>Home</Link>
        </li>
      </ul>
    </div>
  );
}
