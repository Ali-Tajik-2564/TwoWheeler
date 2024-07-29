import React from 'react';

export default function ProductBox() {
  return (
    <div className="text-textPrimary w-72 h-auto p-3 rounded-md bg-bgPrimary flex flex-col items-start justify-start space-y-3  hover:bg-bgPrimary/80">
      <img
        src="..\Img\kawasaki400Abs.png"
        alt=""
        className="w-full h-auto rounded-md   "
      />
      <div className="w-full h-auto flex items-start flex-col justify-between space-y-3">
        {/* header  */}
        <div className="w-full flex items-start justify-between">
          <p className="w-2/3 font-semibold text-base line-clamp-2 ">
            Suzuki GSX-R1000 (2004)
          </p>
          <p className="font-semibold text-sm">status</p>
        </div>
        {/* header  */}
        {/* price */}
        <p className="text-lg font-semibold">$6,899</p>
        {/* price */}
        {/* stock and color */}
        <div className="w-full flex items-start justify-between">
          <p className="font-semibold text-base ">stock : 12</p>
          <p className="font-semibold text-sm">colors : blue / white</p>
        </div>
        {/* stock and color */}
        {/* detail button  */}
        <button className="mx-auto w-32  p-1 rounded-md bg-textPrimary text-bgPrimary font-semibold text-base ">
          Detail
        </button>
        {/* detail button  */}
      </div>
    </div>
  );
}
