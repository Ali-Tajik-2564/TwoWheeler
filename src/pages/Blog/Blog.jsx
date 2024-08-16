import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import articlesQuery from '../../hooks/articlesQuery';

export default function Blog() {
  const articleID = useParams();
  const { data, isSuccess } = articlesQuery(articleID.id);

  return (
    <div className="bg-article-page bg-cover  w-full h-auto flex item-center justify-center py-5 ">
      <div className="md:w-4/5 w-10/12 h-auto bg-white/70  px-4 py-7   flex flex-col item-center space-y-10">
        <img
          src={`../${data[0]?.pic}`}
          alt=""
          className="w-full md:h-[40%]  rounded-md"
        />
        <div className="w-full h-full flex flex-col item-center  space-y-5 md:p-4 p-2">
          <p className="md:text-3xl text-xl font-semibold text-bgPrimary">
            {data[0]?.title}
          </p>
          <p className="md:text-xl text-lg font-semibold text-bgPrimary">
            {data[0]?.desc}
          </p>
          <p className="md:text-lg text-base font-medium text-bgPrimary ">
            {data[0]?.body}
          </p>
        </div>
      </div>
    </div>
  );
}
