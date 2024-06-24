import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdVisibility } from 'react-icons/md';
import { MdVisibilityOff } from 'react-icons/md';
export default function Login() {
  const [visibilityPassword, setVisibilityPassword] = useState(false);

  const handlePasswordShow = () => {
    if (visibilityPassword) {
      setVisibilityPassword(false);
    } else {
      setVisibilityPassword(true);
    }
  };
  const forgottenPassword = () => {
    console.log('forgot');
  };

  return (
    <div className="w-auto h-screen flex flex-row-reverse  items-start p-0 m-0 bg-register-page bg-current">
      {/* register form */}
      {/* form header  */}
      <div className="h-full lg:w-6/12 md:w-8/12 sm:w-10/12 w-full flex flex-col items-start justify-evenly lg:p-20  p-8 lg:bg-white   bg-white/85 sm:rounded-l-[80px] ">
        <div className="flex flex-col space-y-1">
          <p className="text-2xl text-bgPrimary font-medium">Login</p>
          <p className="text-base text-bgPrimary font-medium">
            New visitor?
            <Link to={'/register'} className="text-textPrimary">
              {' '}
              Create your account{' '}
            </Link>
            here
          </p>
        </div>
        {/* form header  */}
        {/* inputs */}

        <div className="w-full h-auto flex flex-col items-center justify-between space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full outline-none focus:outline-none ring-0 focus:ring-0 border-b border-bgPrimary/50 text-bgPrimary text-lg font-normal p-1 bg-transparent"
          />
          <div className="w-full flex flex-col items-center justify-start">
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
            <p className="text-sm font-normal ml-auto">
              Click
              <span
                className="text-textPrimary hover:cursor-pointer"
                onClick={forgottenPassword}>
                here{' '}
              </span>
              in case you forget your password
            </p>
          </div>
        </div>
        {/* inputs */}
        {/* terms and button */}

        <button className="mx-auto w-72 h-12 p-2 rounded-md bg-textPrimary hover:bg-textPrimary/90 text-bgPrimary font-semibold text-lg ">
          Login
        </button>
        {/* terms and button */}
      </div>
      {/* register form */}
    </div>
  );
}
