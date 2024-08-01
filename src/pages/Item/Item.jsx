import React from 'react';
import { useRef } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import './Slider.css';
import { Link } from 'react-router-dom';
export default function Item() {
  return (
    <div className=" w-full h-full flex item-center justify-between p-5 bg-white space-x-4">
      {/* Slider  */}
      <div className="w-2/5 h-full  flex flex-col items-center justify-start space-y-16">
        <div className="w-full h-auto rounded-e-md">
          <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
            <SwiperSlide>
              <img
                src="../../Img/001_Ducati1199Panigale_BikeIconics_June2019_D8J_64606.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="../../Img/001_Ducati1199Panigale_BikeIconics_June2019_D8J_64604.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="../../Img/001_Ducati1199Panigale_BikeIconics_June2019_D8J_64602.png"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <button
          className="mx-auto w-52 h-12 p-2 text-center rounded-md border-2 border-textPrimary hover:bg-textPrimary/90 text-bgPrimary font-semibold text-lg duration-150 "
          onClick={() => history.go(-1)}>
          Back to Showroom
        </button>
      </div>
      {/* Slider  */}
      <div className="w-3/5 h-auto   px-16 py-7 space-y-4">
        {/* Info  */}
        <div className=" w-full h-9/10 flex flex-col  items-start justify-evenly space-y-10  text-bgPrimary  bg-[url('../../Img/image-39.png')] bg-contain  bg-center bg-opacity-75 bg-no-repeat ">
          <p className="text-3xl font-bold ">Ducati 1199 Panigale (2012)</p>
          <div className="w-full  flex items-center justify-between">
            <p className="text-lg font-normal">Status: Used</p>
            <p className="text-lg font-normal">Code: 12DU1199PSTRIU</p>
          </div>
          <p className="text-3xl font-bold ">$12,999</p>
          <p className="text-lg font-normal">
            Color(s) :
            <input className="bg-orange-900 rounded-full w-6 h-6 focus:ring-1 ring-gray-400 m-1 cursor-pointer" />
            <input className="bg-gray-900 rounded-full w-6 h-6 focus:ring-1 focus:ring-gray-400   m-1 cursor-pointer" />
          </p>
          <p className="text-lg font-normal">Stock: 3</p>
          <button className="ml-auto w-44 h-10 p-2 rounded-md bg-textPrimary hover:bg-textPrimary/90 text-bgPrimary font-semibold text-base ">
            Add to Card
          </button>
        </div>
        {/* Info  */}
        {/* Check others */}
        <div className="w-full flex flex-col items-center justify-center space-y-4">
          <p className="text-3xl font-bold">Check other motorcycles</p>
          <div className="w-full h-auto flex items-center justify-evenly">
            <div className="w-44 h-60 flex flex-col items-start justify-center space-y-2">
              {/* CheckoutBox */}
              <img
                src="../../Img/unsplash_7GeprSfqLQ.png"
                alt=""
                className="w-full h-full rounded-sm"
              />
              <p className="text-base font-medium">Yamaha R6 (2020)</p>
              <p className="text-base font-normal">$13,749</p>
            </div>
            {/* CheckoutBox */}
            <div className="w-44 h-60 flex flex-col items-start justify-center space-y-2">
              <img
                src="../../Img/unsplash_7GeprSfqLQ.png"
                alt=""
                className="w-full h-full rounded-sm"
              />
              <p className="text-base font-medium">Yamaha R6 (2020)</p>
              <p className="text-base font-normal">$13,749</p>
            </div>
            {/* CheckoutBox */}
            <div className="w-44 h-60 flex flex-col items-start justify-center space-y-2">
              <img
                src="../../Img/unsplash_7GeprSfqLQ.png"
                alt=""
                className="w-full h-full rounded-sm"
              />
              <p className="text-base font-medium">Yamaha R6 (2020)</p>
              <p className="text-base font-normal">$13,749</p>
            </div>
            {/* CheckoutBox */}
          </div>
        </div>
        {/* Check others */}
      </div>
    </div>
  );
}
