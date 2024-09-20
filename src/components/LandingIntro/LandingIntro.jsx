import React from 'react';
import { Link } from 'react-router-dom';
export default function LandingIntro() {
  return (
    <div className="w-full h-auto flex md:flex-row flex-col items-center justify-between m-0   bg-gradient-to-r from-bgPrimary from-50% ">
      <div className="md:w-2/5 w-full h-full flex flex-col justify-between items-center text-textPrimary  lg:px-14 px-8 lg:space-y-20 space-y-8 py-5 md:bg-transparent bg-bgPrimary">
        <p className="lg:text-3xl text-2xl font-bold">
          Find your dream motorcycle here!
        </p>
        <p className="lg:text-lg text-md font-normal">
          We have 100+ collections of new and used motorcycles from big names
          such as Honda, Kawasaki, Yamaha, Ducati, etc. We will give the best
          price you can get and great quality motorcycle.
        </p>
        <Link to="./motorcycle-show">
          <button
            className="lg:text-xl text-lg font-bold  border-b border-textPrimary p-1
          ">
            Let’s find one
          </button>
        </Link>
      </div>
      <img
        src="./Versys-650-2-1.jpg"
        alt="landing-page-img"
        className="md:w-3/5 w-full h-auto m-0  md:-z-10  bg-contain md:opacity-1 opacity-85
          "
      />
    </div>
  );
}
