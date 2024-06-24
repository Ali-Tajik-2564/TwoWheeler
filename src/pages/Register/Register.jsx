import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdVisibility } from 'react-icons/md';
import { MdVisibilityOff } from 'react-icons/md';
export default function Register() {
  const [visibilityPassword, setVisibilityPassword] = useState(false);
  const [visibilityConfirmPassword, setVisibilityConfirmPassword] =
    useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  console.log(agreeTerms);
  const handlePasswordShow = () => {
    if (visibilityPassword) {
      setVisibilityPassword(false);
    } else {
      setVisibilityPassword(true);
    }
  };
  const handleConfirmPasswordShow = () => {
    if (visibilityConfirmPassword) {
      setVisibilityConfirmPassword(false);
    } else {
      setVisibilityConfirmPassword(true);
    }
  };
  const handleAgreeTerms = () => {
    if (agreeTerms) {
      setAgreeTerms(false);
    } else {
      setAgreeTerms(true);
    }
    console.log(agreeTerms);
  };

  return (
    <div className="w-auto h-screen flex flex-row-reverse  items-start p-0 m-0 bg-register-page bg-current">
      {/* register form */}
      {/* form header  */}
      <div className="h-full lg:w-6/12 md:w-8/12 sm:w-10/12 w-full flex flex-col items-start justify-evenly lg:p-20  p-8 lg:bg-white   bg-white/85 sm:rounded-l-[80px] ">
        <div className="flex flex-col space-y-1">
          <p className="text-2xl text-bgPrimary font-medium">
            Create an account
          </p>
          <p className="text-base text-bgPrimary font-medium">
            Already have an account?
            <Link to={'/login'} className="text-textPrimary">
              {' '}
              Login{' '}
            </Link>
            here
          </p>
        </div>
        {/* form header  */}
        {/* inputs */}

        <div className="w-full h-auto flex flex-col items-center justify-between space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full outline-none focus:outline-none ring-0 focus:ring-0 border-b border-bgPrimary/50 text-bgPrimary text-lg font-normal p-1 bg-transparent"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full outline-none focus:outline-none ring-0 focus:ring-0 border-b border-bgPrimary/50 text-bgPrimary text-lg font-normal p-1 bg-transparent"
          />
          <div className="w-full flex items-center border-b border-bgPrimary/50 p-1">
            <input
              type={visibilityPassword ? 'text' : 'password'}
              placeholder="Password"
              className="w-full outline-none focus:outline-none ring-0 focus:ring-0  text-bgPrimary text-lg font-normal  bg-transparent"
            />
            {visibilityPassword ? (
              <MdVisibility
                className="text-bgPrimary/50 w-6 h-6  hover:cursor-pointer"
                onClick={handlePasswordShow}
              />
            ) : (
              <MdVisibilityOff
                className="text-bgPrimary/50 w-6 h-6 hover:cursor-pointer"
                onClick={handlePasswordShow}
              />
            )}
          </div>
          <div className="w-full flex items-center border-b border-bgPrimary/50 p-1">
            <input
              type={visibilityConfirmPassword ? 'text' : 'password'}
              placeholder="Confirm Password"
              onClick={handleConfirmPasswordShow}
              className="w-full outline-none focus:outline-none ring-0 focus:ring-0   text-bgPrimary text-lg font-normal bg-transparent"
            />
            {visibilityConfirmPassword ? (
              <MdVisibility
                className="text-bgPrimary/50 w-6 h-6 hover:cursor-pointer"
                onClick={handleConfirmPasswordShow}
              />
            ) : (
              <MdVisibilityOff
                className="text-bgPrimary/50 w-6 h-6 hover:cursor-pointer"
                onClick={handleConfirmPasswordShow}
              />
            )}
          </div>
        </div>
        {/* inputs */}
        {/* terms and button */}
        <div className="flex item space-x-5 text-bgPrimary font-normal text-sm">
          <input
            type="checkbox"
            onClick={handleAgreeTerms}
            className="bg-transparent"
          />
          <p>I agree to store’s Terms and Conditions</p>
        </div>
        <button className="mx-auto w-72 h-12 p-2 rounded-md bg-textPrimary hover:bg-textPrimary/90 text-bgPrimary font-semibold text-lg ">
          Register Account
        </button>
        {/* terms and button */}
      </div>
      {/* register form */}
    </div>
  );
}
