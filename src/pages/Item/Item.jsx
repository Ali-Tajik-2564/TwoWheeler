import React from 'react';
import { useRef } from 'react';

import CheckOutItemBox from '../../components/CheckOutItemBox/CheckOutItemBox.jsx';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { Pagination, FreeMode } from 'swiper/modules';

import './Slider.css';
import { Link } from 'react-router-dom';
export default function Item() {
  return (
    <div className="flex flex-col items-start justify-center bg-white p-5 space-y-5">
      <div className=" w-full h-full flex md:flex-row flex-col item-center justify-between   space-x-4 space-y-4">
        {/* Slider  */}
        <div className="md:w-2/5 w-full h-full  flex flex-col items-center justify-start space-y-16">
          <div className="w-full h-auto  rounded-md">
            <Swiper
              pagination={true}
              modules={[Pagination]}
              className="mySwiper md:h-full h-auto md:w-full w-4/5 ">
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
            className="mx-auto w-52 h-12 p-2 md:block hidden text-center rounded-md border-2 border-textPrimary hover:bg-textPrimary/90 text-bgPrimary font-semibold text-lg duration-150 "
            onClick={() => history.go(-1)}>
            Back to Showroom
          </button>
        </div>
        {/* Slider  */}
        <div className="md:w-3/5 w-full h-auto   md:px-16 px-3 py-7 space-y-16">
          {/* Info  */}
          <div className=" w-full h-full flex flex-col  items-start justify-evenly space-y-10  text-bgPrimary  bg-[url('../../Img/image-39.png')] bg-contain  bg-center bg-opacity-75 bg-no-repeat ">
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
            <div className="w-full h-auto flex item-center justify-between space-x-4">
              <Link
                to="/Payment-info/2"
                className="ml-auto md:w-44 w-auto px-4 h-10 p-2 rounded-md bg-textPrimary hover:bg-textPrimary/90 text-bgPrimary font-semibold text-base ">
                Add to Card
              </Link>
              <button
                className="ml-auto md:w-44 w-auto px-4 h-10 p-2  md:hidden text-center rounded-md border-2 border-textPrimary hover:bg-textPrimary/90 text-bgPrimary font-semibold text-base duration-150 "
                onClick={() => history.go(-1)}>
                Back to Showroom
              </button>
            </div>
          </div>
          {/* Info  */}
        </div>{' '}
      </div>
      <div className="w-full h-auto flex flex-col items-center justify-center space-y-10  ">
        <p className="text-3xl font-bold">Check other motorcycles</p>
        <div className="w-full h-auto flex items-center justify-evenly mx-auto flex-wrap ">
          <Swiper
            slidesPerView={1}
            spaceBetween={70}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
            modules={[Pagination]}
            className="mySwiperTwo">
            <SwiperSlide>
              <CheckOutItemBox id="1" item={null} />
            </SwiperSlide>
            <SwiperSlide>
              <CheckOutItemBox id="1" item={null} />
            </SwiperSlide>
            <SwiperSlide>
              <CheckOutItemBox id="1" item={null} />
            </SwiperSlide>
            <SwiperSlide>
              <CheckOutItemBox id="1" item={null} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
