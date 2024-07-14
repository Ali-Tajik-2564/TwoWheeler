import React from 'react';

export default function ArticleBox() {
  return (
    <div className="flex p-3   border-b border-b-bgPrimary/70 items-start justify-between space-x-3  group hover:sepia  duration-200">
      <img
        src="../Img/unsplash_zGzXsJUBQfs.png"
        alt=""
        className=" lg:h-40  lg:w-40 w-28 h-28 rounded-sm "
      />
      <div className="w-full h-full flex flex-col items-start justify-between lg:space-x-3 space-x-2 ">
        <div className="w-full  flex items-center justify-between">
          <p className="lg:text-3xl text-xl text-bgPrimary font-bold">
            Blog Title
          </p>
          <p className="lg:text-base text-sm text-bgPrimary font-normal">
            Blog date
          </p>
        </div>
        <p className="lg:text-lg md:text-base text-sm font-medium text-bgPrimary w-full group-hover:font-semibold lg:line-clamp-5 md:line-clamp-4 line-clamp-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id
          sagittis ultrices enim nibh et dolor mauris. Donec neque ac, morbi at
          nisl euismod in cursus. Dignissim ac eget nisi consequat tempor,
          lobortis. Sed eget interdum in sit at. Leo nisi, nunc a in a. Turpis
          nisl sit.....
        </p>
        <p className="md:text-sm text-xs font-semibold text-bgPrimary w-full text-right  ">
          Read More
        </p>
      </div>
    </div>
  );
}
