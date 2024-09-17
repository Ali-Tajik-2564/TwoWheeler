import React from 'react';

export default function WhyUs() {
  return (
    <div className="w-full h-auto bg-bgPrimary xl:p-14 lg:p-8  p-4 flex md:flex-row flex-col-reverse items-center justify-between md:space-x-16 ">
      <img
        src="./Img/Rectangle.jpg"
        alt=""
        className=" lg:h-auto md:h-80 h-96  md:w-auto w-full    rounded-xl md:m-0 my-6"
      />
      <div className="flex flex-col lg:space-y-9 space-y-4 items-start justify-center text-textPrimary">
        <p className="xl:text-4xl lg:text-2xl text-lg font-bold">Why us?</p>
        <p className=" xl:text-lg lg:text-base text-sm font-medium">
          Since 2019, twowheelers sells hundreds of motorcycles that are hot for
          the roads for a reasonable price. From low engine size to bigger
          engine, we have all. Want to enjoy the sunset on the road or you’re
          just a speed freak who likes to race against your friends on the
          racetrack? You’ll find the motorcycle that suits you.
        </p>
        <p className="xl:text-lg lg:text-base text-sm font-medium">
          Our employees are the best on the field with many experiences on a
          motorcycle and tons of knowledge about it, so come visit us and do not
          hesitate to ask us questions. We welcome those who are new with a
          motorcycle and wonder how it feels to explore places on a motorcycle.
        </p>
      </div>
    </div>
  );
}
