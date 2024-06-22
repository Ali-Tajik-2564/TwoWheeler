import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function Headers() {
  const [show, setShow] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="w-full flex justify-between items-center px-4 h-20 bg-bgPrimary">
      {/* logo */}
      <div className="w-44 text-textPrimary lg:text-2xl md:text-xl text-lg font-semibold  hover:brightness-90">
        <Link to={'/'}>two wheelers</Link>
      </div>
      {/* offcanvas button  */}
      <button
        onClick={handleShow}
        className="text-bgPrimary bg-textPrimary p-2   rounded-md  md:hidden hover:brightness-90">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="text-bgPrimary"
          className="w-6 h-6">
          <path
            fillRule="evenodd"
            d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {/* offcanvas button  */}

      {/* logo */}
      {/* menu under md size {offcanvas} */}
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement={'end'}
        name={'end'}
        className="bg-bgPrimary text-textPrimary">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Easy Access</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="mx-2 flex flex-col justify-center items-end space-y-8  text-textPrimary text-lg font-semibold   ">
            <li className="p-2 ">
              {/* login */}
              {isLogin && (
                <Link to={'/login'} onClick={handleClose}>
                  <button className="text-bgPrimary bg-textPrimary p-2 w-44  rounded-md  flex justify-between">
                    <Link
                      to={'/login'}
                      onClick={handleClose}
                      className="hover:text-bgPrimary/70">
                      Login{' '}
                    </Link>
                    <p className="px-1">/</p>

                    <Link
                      to={'/register'}
                      onClick={handleClose}
                      className="hover:text-bgPrimary/70">
                      Register
                    </Link>
                  </button>
                </Link>
              )}

              {/* login */}
              {/* profile */}
              {!isLogin && (
                <Link to={'/UserPanel'} onClick={handleClose}>
                  <img
                    src="./Img/profile.jpg"
                    className=" border-1 border-textPrimary w-20   rounded-full shadow-sm  hover:brightness-90 "></img>
                </Link>
              )}

              {/* profile */}
            </li>
            <li className=" p-4 hover:brightness-90" onClick={handleClose}>
              <Link to={'/contact-us'}>Contact Us</Link>
            </li>
            <li className=" p-4 hover:brightness-90" onClick={handleClose}>
              <Link to={'/blogs'}>Our Blog</Link>
            </li>
            <li className=" p-4 hover:brightness-90">
              <Link to={'/motorcycle-show'}>Motorcycles</Link>
            </li>
            <li className=" p-4 hover:brightness-90" onClick={handleClose}>
              <Link to={'/'}>Home</Link>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
      {/* menu under md size {offcanvas} */}

      {/* menu upper md size  */}

      <ul className="hidden md:flex flex-row-reverse justify-start items-center lg:space-x-8 space-x-2 text-textPrimary lg:text-base text-sm lg:font-semibold font-normal  ">
        <li className="p-4 ">
          {/* login */}
          {isLogin && (
            <button className="text-bgPrimary bg-textPrimary p-2 w-36  rounded-md   flex">
              <Link
                to={'/login'}
                onClick={handleClose}
                className="hover:text-bgPrimary/70">
                Login{' '}
              </Link>
              <p className="px-2">/</p>

              <Link
                to={'/register'}
                onClick={handleClose}
                className="hover:text-bgPrimary/70">
                Register
              </Link>
            </button>
          )}

          {/* login */}
          {/* profile */}
          {!isLogin && (
            <Link to={'/UserPanel'} onClick={handleClose}>
              <img
                src="./Img/profile.jpg"
                className=" border-1 border-textPrimary w-16   rounded-full shadow-sm  hover:brightness-90"></img>
            </Link>
          )}

          {/* profile */}
        </li>
        <li className=" p-4    min-w-28  hover:brightness-90">
          <Link to={'/contact-us'}>Contact Us</Link>
        </li>
        <li className=" p-4  min-w-28  hover:brightness-90">
          <Link to={'/blogs'}>Our Blog</Link>
        </li>
        <li className=" p-4 min-w-28 hover:brightness-90">
          <Link to={'/motorcycle-show'}>Motorcycles</Link>
        </li>
        <li className=" p-4 min-w-28 hover:brightness-90">
          <Link to={'/'}>Home</Link>
        </li>
      </ul>
      {/* menu upper md size  */}
    </div>
  );
}
