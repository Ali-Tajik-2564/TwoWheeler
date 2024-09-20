import React from 'react';
import { Link } from 'react-router-dom';
export default function NotFound() {
  return (
    <div className="w-full h-auto flex md:flex-row flex-col items-center justify-between m-0   bg-gradient-to-r from-white from-50% ">
      <div className="md:w-2/5  w-full h-full flex flex-col justify-between items-center text-bgPrimary  lg:px-20 px-8 lg:space-y-24 space-y-12 py-5 md:bg-transparent ">
        <div className="flex flex-col items-start justify-between gap-1 mr-auto">
          <p className="lg:text-3xl text-2xl font-extrabold">Oops...</p>
          <p className="lg:text-xl text-lg font-medium">Page not found</p>
        </div>
        <p className="lg:text-lg text-md font-normal">
          Unfortunately, the page you’re looking for is either under
          maintenance, unaccessible, or there’s a server problem in our site.
          Please go back to home page.
        </p>
        <Link to="./">
          <button
            className="lg:text-xl text-lg font-bold  border-b border-bgPrimary p-1
      ">
            Go back to Home
          </button>
        </Link>
      </div>
      <img
        src=".././image-23.png "
        alt="landing-page-img"
        className="md:w-3/5 w-full md:h-screen h-fit m-0  md:-z-10  bg-contain md:opacity-1 opacity-85
      "
      />
    </div>
  );
}
