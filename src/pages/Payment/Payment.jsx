import React from 'react';
import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
export default function Payment() {
  const [bankName, setBankName] = useState();
  console.log(bankName);
  const SubmitOrder = () => {};
  return (
    <div className="w-full h-auto flex flex-col-reverse lg:flex-row item-center justify-between lg:p-14 p-3 bg-white lg:space-y-0 space-y-5 lg:space-x-10">
      <div className="lg:w-2/5 md:w-4/5 w-full h-full flex flex-col items-start justify-between p-4 space-y-12">
        {/* payment method  */}
        <div className="flex w-full flex-col items-start space-y-3">
          <p className="text-2xl font-medium ">Payment Method</p>
          <div className="w-full h-auto flex flex-row   justify-evenly items-start">
            <div className="w-auto h-auto flex space-x-2 items-center ">
              <label htmlFor="input" className="text-base font-light">
                Credit Cart
              </label>
              <input type="radio" name="Payment-info" checked="true" />
            </div>
            <div className="w-auto h-auto flex space-x-2 items-end ">
              <img
                src="../../Img/Apple_Card.svg.png"
                alt=""
                className="bg-contain w-auto h-5"
                htmlFor="input"
              />

              <input type="radio" name="Payment-info" />
            </div>
            <div className="w-auto h-auto flex space-x-2 items-end ">
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
            className="focus:ring-0 focus:outline-none md:w-4/5 w-full text-bgPrimary font-medium text-lg border-b-2 border-bgPrimary/30  bg-none"
          />
          <div className="flex  md:w-4/5 w-full h-auto items-end justify-start border-b-2 border-bgPrimary/30 p-2">
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-basic"
                className=" focus:ring-0 focus:outline-none w-auto  h-8  border-none  bg-none text-bgPrimary/50 font-medium text-lg ring-0 outline-none "
                variant="none">
                {bankName ? (
                  <img src={bankName} alt="" className="h-8" />
                ) : (
                  'Bank Name'
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
            <input
              type="text"
              placeholder="Number "
              className="focus:ring-0 focus:outline-none w-full text-bgPrimary font-medium text-lg border-l border-bgPrimary/50  px-2  bg-none"
            />
          </div>
          <div className="flex w-full h-auto  items-start justify-between   ">
            <div className="flex flex-col items-start justify-start space-y-6 w-1/2">
              <p className="text-bgPrimary/70 font-medium text-xl">
                Expiration
              </p>
              <input
                type="date"
                name="Expiration Date"
                className="focus:ring-0 focus:outline-none  text-bgPrimary/70 font-medium text-lg border-b-2 border-bgPrimary/30  bg-none w-auto"
              />
            </div>

            <div className="flex flex-col items-start justify-start space-y-6 w-1/2">
              <p className="text-bgPrimary/70 font-medium text-xl">CVV</p>
              <input
                type="text"
                name="CVV"
                placeholder="nnn"
                className="focus:ring-0 focus:outline-none w-3/4 text-bgPrimary/70 font-medium text-lg border-b-2 border-bgPrimary/30  bg-none"
              />
            </div>
          </div>
        </div>
        {/* payment details  */}
        {/* payment RUle /  */}
        <p className="text-bgPrimary font-medium text-base line-clamp-2">
          By clicking “Confirm Payment”, you agree to our store regulations.
        </p>
        {/* payment RUle /  */}
        {/* payment buttons */}
        <div className="flex flex-row   items-start justify-between   w-full h-auto ">
          <button
            onClick={SubmitOrder}
            className=" md:w-48 w-auto px-4 p-2 rounded-md bg-textPrimary hover:bg-textPrimary/90 text-bgPrimary font-semibold text-base  text-center">
            Confirm Payment
          </button>
          <button
            className=" md:w-48 w-auto px-4  p-2  text-center rounded-md border-1 border-textPrimary hover:bg-textPrimary/90 text-bgPrimary font-Bold text-base duration-150 "
            onClick={() => history.go(-1)}>
            Cancel
          </button>
        </div>
        {/* payment buttons */}
      </div>

      {/* item info  */}
      <div className="lg:w-2/5 w-96  h-auto relative rounded-2xl overflow-hidden Payment-Box-Shadow  max-lg:mx-auto">
        <img
          src="../../Img/unsplash_7GeprSfqLQ.png"
          alt=""
          className="w-full h-auto bg-cover
        rounded-lg -z-20 "
        />
        <div className="absolute  bottom-0 left-0 w-full h-auto bg-gradient-to-t from-slate-800  z-20 p-3">
          <div className="flex flex-col items-start justify-start w-full h-auto space-y-4">
            <p className="text-white font-bold text-xl ">Your Order : </p>
            <p className="text-white font-bold text-xl ">
              Ducati 1199 Panigale (2012)
            </p>
            <p className="text-white font-bold text-lg">
              color : vivid white and black{' '}
            </p>
            <p className="text-textPrimary font-bold text-2xl">$12,999</p>
          </div>
        </div>
        {/* item info  */}
      </div>
    </div>
  );
}
