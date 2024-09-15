import React from 'react';

import CheckOutItemBox from '../../components/CheckOutItemBox/CheckOutItemBox.jsx';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { Pagination } from 'swiper/modules';

import './Slider.css';
import { Link, useParams } from 'react-router-dom';
import { productQuery } from '../../hooks/productQuery.jsx';
import brandQuery from '../../hooks/brandQuery.jsx';

export default function Item() {
  const urlParam = useParams();
  const { data: BrandData } = brandQuery();
  const { data: productData, isFetched } = productQuery();
  let product = productData?.filter((product) => product.id === urlParam.id);
  let brand;
  {
    isFetched &&
      (brand = BrandData?.filter((brand) => brand.name === product[0]?.brand));
  }

  return (
    <div className="flex flex-col items-start justify-center bg-white p-5 space-y-5">
      {isFetched ? (
        <>
          <div className=" w-full h-full flex md:flex-row flex-col item-center justify-between   space-x-4 space-y-4">
            {/* Slider  */}
            <div className="md:w-2/5 w-full h-full  flex flex-col items-center justify-start space-y-16">
              <div className="w-full h-auto  rounded-md">
                <Swiper
                  pagination={true}
                  modules={[Pagination]}
                  className="mySwiper md:h-full h-auto md:w-full w-4/5 ">
                  {product[0]?.pics.map((pic) => (
                    <SwiperSlide>
                      <img src={`../../${pic}`} alt="" />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <button
                className="mx-auto w-52 h-12 p-2 md:block hidden text-center rounded-md border-2 border-textPrimary hover:bg-textPrimary/90 text-bgPrimary font-semibold text-lg duration-150 "
                onClick={() => history.go(-1)}>
                Back to Showroom
              </button>
            </div>
            {/* Slider  */}
            <div className="md:w-3/5 w-full h-auto relative  md:px-16 px-3 py-7 space-y-16">
              {/* Info  */}
              <img
                src={brand[0]?.icon}
                alt=""
                className="absolute   opacity-80 bg-contain w-auto h-auto"
              />
              <div className="w-full h-full relative">
                <div
                  className={`w-full h-full flex flex-col  items-start justify-evenly space-y-10  text-bgPrimary  bg-[url('${brand[0]?.icon}')] bg-contain  bg-center bg-opacity-75 bg-no-repeat`}>
                  <p className="text-3xl font-bold ">
                    {product[0]?.brand} {product[0]?.name} (
                    {product[0]?.dateOfProduction})
                  </p>
                  <div className="w-full  flex items-center justify-between">
                    <p className="text-lg font-normal">
                      Status: {product[0]?.status}
                    </p>
                    <p className="text-lg font-normal">
                      Code: {product[0]?.code}
                    </p>
                  </div>
                  <p className="text-3xl font-bold ">${product[0]?.price}</p>
                  <p className="text-lg font-normal">
                    Color(s) :
                    <input className="bg-orange-900 rounded-full w-6 h-6 focus:ring-1 ring-gray-400 m-1 cursor-pointer" />
                    <input className="bg-gray-900 rounded-full w-6 h-6 focus:ring-1 focus:ring-gray-400   m-1 cursor-pointer" />
                  </p>
                  <p className="text-lg font-normal">
                    Stock: {product[0]?.stock}
                  </p>
                  <div className="w-full h-auto flex item-center justify-between space-x-4">
                    <Link
                      to={`/Payment-info/${product[0]?.id}`}
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
        </>
      ) : (
        <div className="w-full h-screen text-bgPrimary flex items-center justify-center font-semibold text-2xl">
          Loading ....
        </div>
      )}
    </div>
  );
}
