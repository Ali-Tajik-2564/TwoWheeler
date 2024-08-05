import React from 'react';
import { Link } from 'react-router-dom';

export default function CheckOutItemBox(id, item) {
  return (
    <>
      <Link to="/item/2'">
        <div className="w-52 h-60 flex flex-col items-start justify-center space-y-2 group m-4 p-2">
          <img
            src="../../Img/unsplash_7GeprSfqLQ.png"
            alt=""
            className="w-full h-full rounded-sm"
          />
          <p className="text-base font-medium group-hover:font-semibold">
            Yamaha R6 (2020)
          </p>
          <p className="text-base font-normal group-hover:font-semibold">
            $13,749
          </p>
        </div>
      </Link>
    </>
  );
}
