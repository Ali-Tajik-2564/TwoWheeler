import React from 'react';
import { Link } from 'react-router-dom';
export default function ShortCutLink() {
  return (
    <div className="w-full h-auto py-8 md:space-x-1 md:space-y-0 space-y-10  flex md:flex-row flex-col items-center justify-evenly  font-bold text-3xl text-textPrimary ">
      <Link to={'/motorcycle-show'} className="w-full h-auto ">
        <div className="lg:w-80 lg:h-64 md:w-64 md:h-48 w-96 h-80 rounded-md  bg-show-room-link hover:brightness-110 delay-200 bg-cover  flex items-center justify-center mx-auto">
          Show Room
        </div>
      </Link>
      <Link to={'/blogs'} className="w-full h-auto">
        <div className="lg:w-80 lg:h-64 md:w-64 md:h-48 w-96 h-80 rounded-md hover:brightness-110 delay-200 bg-blogs-link bg-cover flex items-center justify-center  mx-auto">
          Blogs
        </div>
      </Link>
      <Link to={'/Payment-info'} className="w-full h-auto">
        <div className="lg:w-80 lg:h-64 md:w-64 md:h-48 w-96 h-80 rounded-md hover:brightness-110 delay-200 bg-payment-link bg-cover flex items-center justify-center  mx-auto">
          Payment
        </div>
      </Link>
    </div>
  );
}
