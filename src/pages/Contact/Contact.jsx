import React, { useState } from 'react';
import { IoMdMail } from 'react-icons/io';
import Swal from 'sweetalert2';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
export default function Contact() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const messageSubmit = () => {
    if (name && email && message) {
      Swal.fire({
        title: 'your message submitted successfully',
        icon: 'success',
      }).then(() => {
        setName('');
        setEmail('');
        setMessage('');
      });
    } else {
      Swal.fire({
        title: 'please fill all inputs then submit',
        icon: 'warning',
      });
    }
  };
  return (
    <div className="w-full h-auto flex md:flex-row flex-col-reverse p-0 ">
      <img
        src="./../map.png"
        alt=""
        className="md:w-1/2 w-full  md:h-auto h-fit bg-contain"
      />
      <div className="md:w-1/2 w-full h-auto bg-white px-20 py-12 flex flex-col items-start justify-between space-y-5">
        <p className="text-3xl md-xl font-extrabold text-bgPrimary">
          Contact Us
        </p>
        <div className="w-full h-auto flex flex-col items-start justify-between md:space-y-6 space-y-4">
          <div className="flex items-center space-x-6">
            <IoLocationSharp className="text-rose-400 w-8 h-8 " />
            <p className="md:text-lg text-base font-normal text-bgPrimary/70 w-60">
              2005 Broken Dream Blvd Daytona Beach, FL 32122
            </p>
          </div>
          <div className="flex items-center space-x-6">
            <FaPhoneAlt className="text-green-400 w-8 h-8 " />
            <p className="md:text-lg text-base font-normal text-bgPrimary/70">
              (343)-7509-2453
            </p>
          </div>
          <div className="flex items-center space-x-6">
            <IoMdMail className="text-blue-400  w-8  h-8 " />
            <p className="md:text-lg text-base font-normal text-bgPrimary/70">
              twowheelers@xmail.com
            </p>
          </div>
        </div>
        <div className="w-full h-auto flex flex-col items-start justify-between md:space-y-5 space-y-3">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-2 text-lg font-medium text-bgPrimary/50 shadow-md border-2 border-bgPrimary/20   rounded-md outline-none ring-0 focus:ring-0 focus:outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Email"
            className="w-full p-2 text-lg font-medium text-bgPrimary/50 shadow-md border-2 border-bgPrimary/20   rounded-md outline-none ring-0 focus:ring-0 focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Message"
            className="w-full h-fit p-2 text-lg font-medium text-bgPrimary/50 shadow-md border-2 border-bgPrimary/20   rounded-md outline-none ring-0 focus:ring-0 focus:outline-none"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button
          onClick={messageSubmit}
          className="mr-auto w-36  p-1 rounded-md bg-textPrimary hover:bg-textPrimary/90 text-bgPrimary font-semibold text-lg ">
          Send
        </button>
      </div>
    </div>
  );
}
