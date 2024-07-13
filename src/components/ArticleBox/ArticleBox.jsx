import React from 'react';

export default function ArticleBox() {
  return (
    <div className="flex p-3  border-b border-b-bgPrimary/70 items-start justify-between space-x-3 group hover:sepia  duration-200">
      <img
        src="../Img/unsplash_zGzXsJUBQfs.png"
        alt=""
        className="h-40 w-40 rounded-sm "
      />
      <div className="w-full h-full flex flex-col items-start justify-between space-y-3 ">
        <div className="w-full  flex items-center justify-between">
          <p className="text-3xl text-bgPrimary font-bold">Blog Title</p>
          <p className="text-base text-bgPrimary font-normal">Blog date</p>
        </div>
        <p className="text-lg font-medium text-bgPrimary w-full group-hover:font-semibold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id
          sagittis ultrices enim nibh et dolor mauris. Donec neque ac, morbi at
          nisl euismod in cursus. Dignissim ac eget nisi consequat tempor,
          lobortis. Sed eget interdum in sit at. Leo nisi, nunc a in a. Turpis
          nisl sit.....
        </p>
        <p className="text-base font-semibold text-bgPrimary w-full text-right  ">
          Read More
        </p>
      </div>
    </div>
  );
}
