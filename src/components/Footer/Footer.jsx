import React from 'react';
import { FaYoutube } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
export default function Footer() {
  return (
    <>
      <div className="mt-auto">
        <div className="w-full flex justify-between items-center flex-col  bg-bgPrimary p-4   space-y-16">
          <div className=" w-full flex flex-col sm:flex-row-reverse  sm:justify-evenly justify-center  sm:space-y-0 space-y-8">
            <ul className="flex flex-col space-y-2 text-textPrimary">
              <li className="text-2xl">STORE HOURS</li>
              <li>Weekdays: 8 AM - 3 PM</li>
              <li>Saturday: 8 AM - 2 PM</li>
              <li>Sunday/National Holiday: Closed</li>
            </ul>
            <ul className="flex flex-col space-y-2 text-textPrimary">
              <li className="text-2xl">two wheelers</li>
              <li className="flex flex-col space-y-2">
                <p>2005 Broken Dream Blvd</p>
                <p> Daytona Beach, FL 32122</p>
              </li>
              <li>(343)-7509-2453</li>
            </ul>
          </div>
          <div className="w-full flex lg:flex-row flex-col  item-center justify-between  text-textPrimary space-y-5 ">
            <p className="text-lg flex lg:items-end justify-center">
              ©2021 TwoWheelers.com. All rights reserved
            </p>
            <ul className=" flex flex-row-reverse  justify-evenly items-center text-3xl ">
              <li className="mx-3">
                <FaYoutube />
              </li>
              <li className="mx-3">
                <FaLinkedin />
              </li>
              <li className="mx-3">
                <FaInstagram />
              </li>
              <li className="mx-3">
                <FaFacebookF />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
