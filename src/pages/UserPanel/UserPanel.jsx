import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';
export default function UserPanel() {
  const profileEdit = () => {
    console.log('edited');
  };
  return (
    <div className="w-full h-auto flex flex-col item-center justify-normal p-6 space-y-10">
      <button
        onClick={profileEdit}
        className=" md:w-48 w-auto ml-auto px-4 p-2 rounded-md bg-textPrimary hover:bg-textPrimary/90 text-bgPrimary font-semibold text-base  text-center">
        Edit Profile
      </button>
      {/* LG profile */}

      <div className="w-full h-auto lg:flex justify-between item-start py-10 mb-5  hidden">
        <ul className="w-1/4 flex flex-col items-start justify-start space-y-6">
          <Link to="" className="w-full h-auto">
            <li className="flex items-center justify-between w-full h-auto border-b border-bgPrimary text-bgPrimary font-medium text-lg p-2 hover:text-bgPrimary/50 hover:border-bgPrimary/50">
              <p>My Account</p>
              <IoIosArrowForward />
            </li>
          </Link>
          <Link to="" className="w-full h-auto">
            <li className="flex items-center justify-between w-full h-auto border-b border-bgPrimary text-bgPrimary font-medium text-lg p-2 hover:text-bgPrimary/50 hover:border-bgPrimary/50">
              <p>Change Password</p>
              <IoIosArrowForward />
            </li>
          </Link>
          <Link to="" className="w-full h-auto">
            <li className="flex items-center justify-between w-full h-auto border-b border-bgPrimary text-bgPrimary font-medium text-lg p-2 hover:text-bgPrimary/50 hover:border-bgPrimary/50">
              <p>Order History</p>
              <IoIosArrowForward />
            </li>
          </Link>
          <Link to="" className="w-full h-auto">
            <li className="flex items-center justify-between w-full h-auto border-b border-bgPrimary text-bgPrimary font-medium text-lg p-2 hover:text-bgPrimary/50 hover:border-bgPrimary/50">
              <p>Edit Photo</p>
              <IoIosArrowForward />
            </li>
          </Link>
        </ul>
        <img
          src="../../Img/profile.jpg"
          alt=""
          className="rounded-full w-64 h-auto bg-contain "
        />
        <div className="flex flex-col items-start justify-between space-y-5 h-auto w-1/3 ">
          <div className="flex items-center w-full justify-between space-x-3">
            <label
              htmlFor="input"
              className="text-bgPrimary font-semibold text-sm w-1/3">
              Full Name{' '}
            </label>

            <input
              type="text"
              placeholder="Number "
              className="focus:ring-0 focus:outline-none w-full text-bgPrimary/50 rounded-md font-medium text-base border border-bgPrimary/50  p-1  bg-white"
              disabled
              value="Ali Tajik"
            />
          </div>
          <div className="flex items-center w-full justify-between space-x-3">
            <label
              htmlFor="input"
              className="text-bgPrimary font-semibold text-sm w-1/3">
              Email{' '}
            </label>

            <input
              type="text"
              placeholder="Number "
              className="focus:ring-0 focus:outline-none w-full text-bgPrimary/50 rounded-md font-medium text-base border border-bgPrimary/50  p-1  bg-white"
              disabled
              value="ali.1385.tajik.a@gmail.com"
            />
          </div>
          <div className="flex items-center w-full justify-between space-x-3">
            <label
              htmlFor="input"
              className="text-bgPrimary font-semibold text-sm min-w-2/4">
              Phone Number
            </label>

            <input
              type="text"
              placeholder="Number "
              className="focus:ring-0 focus:outline-none w-full text-bgPrimary/50 rounded-md font-medium text-base border border-bgPrimary/50  p-1  bg-white"
              disabled
              value="09123204263"
            />
          </div>
        </div>
      </div>
      {/* LG profile */}
      {/* MD Profile  */}
      <div className="w-full h-auto max-lg:flex flex-col justify-center item-center py-10 mb-5  hidden space-y-8">
        <img
          src="../../Img/profile.jpg"
          alt=""
          className="rounded-full w-64 h-auto bg-contain mx-auto"
        />
        <div className="flex items-center justify-between space-x-4 md:flex-row flex-col space-y-10 md:space-y-0">
          <div className="md:w-1/2 w-full flex flex-col items-start justify-between space-y-5 h-auto  ">
            <div className="flex items-center w-full justify-between space-x-3">
              <label
                htmlFor="input"
                className="text-bgPrimary font-semibold text-sm w-1/3">
                Full Name{' '}
              </label>

              <input
                type="text"
                placeholder="Number "
                className="focus:ring-0 focus:outline-none w-full text-bgPrimary/50 rounded-md font-medium text-base border border-bgPrimary/50  p-1  bg-white"
                disabled
                value="Ali Tajik"
              />
            </div>
            <div className="flex items-center w-full justify-between space-x-3">
              <label
                htmlFor="input"
                className="text-bgPrimary font-semibold text-sm w-1/3">
                Email{' '}
              </label>

              <input
                type="text"
                placeholder="Number "
                className="focus:ring-0 focus:outline-none w-full text-bgPrimary/50 rounded-md font-medium text-base border border-bgPrimary/50  p-1  bg-white"
                disabled
                value="ali.1385.tajik.a@gmail.com"
              />
            </div>
            <div className="flex items-center w-full justify-between space-x-3">
              <label
                htmlFor="input"
                className="text-bgPrimary font-semibold text-sm min-w-2/4">
                Phone Number
              </label>

              <input
                type="text"
                placeholder="Number "
                className="focus:ring-0 focus:outline-none w-full text-bgPrimary/50 rounded-md font-medium text-base border border-bgPrimary/50  p-1  bg-white"
                disabled
                value="09123204263"
              />
            </div>
          </div>
          <ul className="md:w-1/2 w-full flex flex-col items-start justify-start space-y-6">
            <Link to="" className="w-full h-auto">
              <li className="flex items-center justify-between w-full h-auto border-b border-bgPrimary text-bgPrimary font-medium text-lg p-2 hover:text-bgPrimary/50 hover:border-bgPrimary/50">
                <p>My Account</p>
                <IoIosArrowForward />
              </li>
            </Link>
            <Link to="" className="w-full h-auto">
              <li className="flex items-center justify-between w-full h-auto border-b border-bgPrimary text-bgPrimary font-medium text-lg p-2 hover:text-bgPrimary/50 hover:border-bgPrimary/50">
                <p>Change Password</p>
                <IoIosArrowForward />
              </li>
            </Link>
            <Link to="" className="w-full h-auto">
              <li className="flex items-center justify-between w-full h-auto border-b border-bgPrimary text-bgPrimary font-medium text-lg p-2 hover:text-bgPrimary/50 hover:border-bgPrimary/50">
                <p>Order History</p>
                <IoIosArrowForward />
              </li>
            </Link>
            <Link to="" className="w-full h-auto">
              <li className="flex items-center justify-between w-full h-auto border-b border-bgPrimary text-bgPrimary font-medium text-lg p-2 hover:text-bgPrimary/50 hover:border-bgPrimary/50">
                <p>Edit Photo</p>
                <IoIosArrowForward />
              </li>
            </Link>
          </ul>
        </div>
      </div>
      {/* MD Profile  */}
    </div>
  );
}
