import React from 'react';
import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
export default function Payment() {
  const [bankName, setBankName] = useState();
  console.log(bankName);
  return (
    <div className="w-full h-auto flex item-center justify-between p-12 bg-white">
      <div className="w-1/2 h-full flex flex-col items-start justify-between p-4 space-y-12">
        {/* payment method  */}
        <div className="flex w-full flex-col items-start space-y-3">
          <p className="text-2xl font-medium ">Payment Method</p>
          <div className="w-full h-auto flex justify-evenly items-center">
            <div className="w-full h-auto flex space-x-2 items-center ">
              <label htmlFor="input" className="text-base font-light">
                Credit Cart
              </label>
              <input type="radio" name="Payment-info" />
            </div>
            <div className="w-full h-auto flex space-x-2 items-end ">
              <img
                src="../../Img/Apple_Card.svg.png"
                alt=""
                className="bg-contain w-auto h-5"
                htmlFor="input"
              />

              <input type="radio" name="Payment-info" />
            </div>
            <div className="w-full h-auto flex space-x-2 items-end ">
              <img
                src="../../Img/PayPal.svg.png"
                alt=""
                className="bg-contain w-auto h-5"
                htmlFor="input"
              />

              <input type="radio" name="Payment-info" />
            </div>
          </div>
        </div>
        {/* payment method  */}
        {/* payment details  */}
        <div className="w-full h-full  flex flex-col items-start space-y-8">
          <p className="text-2xl font-medium ">Payment Details</p>

          <input
            type="text"
            placeholder="Name "
            className="focus:ring-0 focus:outline-none w-3/4 text-bgPrimary font-medium text-lg border-b-2 border-bgPrimary/30  bg-none"
          />
          <div className="flex w-full h-auto items-center justify-start">
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-basic"
                className=" focus:ring-0 focus:outline-none w-auto  h-8  border-none  bg-none text-bgPrimary/50 font-medium text-lg ring-0 outline-none "
                variant="none">
                {bankName ? (
                  <img src={bankName} alt="" className="h-8" />
                ) : (
                  'Select Bank Name'
                )}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  onClick={() =>
                    setBankName('../../Img/mastercard.256x153.png')
                  }>
                  <img
                    src="../../Img/mastercard.256x153.png"
                    alt=""
                    className="h-8"
                  />
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => setBankName('../../Img/PayPal.svg.png')}>
                  <img src="../../Img/PayPal.svg.png" alt="" className="h-4" />
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => setBankName('../../Img/visa.256x79.png')}>
                  <img src="../../Img/visa.256x79.png" alt="" className="h-4" />
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        {/* payment details  */}
      </div>

      {/* item info  */}
      <div className="w-96 h-auto relative rounded-2xl overflow-hidden Payment-Box-Shadow">
        <img
          src="../../Img/unsplash_7GeprSfqLQ.png"
          alt=""
          className="w-full h-auto bg-cover
        rounded-lg -z-20"
        />
        <div className="absolute  bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-slate-800  z-20 p-3">
          <div className="flex flex-col items-end justify-between w-full h-auto space-y-3"></div>
          <p className="text-white font-bold text-xl ">Your Order : </p>
          <p className="text-white font-bold text-xl ">
            Ducati 1199 Panigale (2012)
          </p>
          <p className="text-white font-bold text-lg">
            color : vivid white and black{' '}
          </p>
          <p className="text-textPrimary font-bold text-2xl">$12,999</p>
        </div>
        {/* item info  */}
      </div>
    </div>
  );
}
