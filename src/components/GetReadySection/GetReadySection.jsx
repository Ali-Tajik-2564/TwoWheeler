import React from 'react';

export default function GetReadySection() {
  return (
    <div className="w-full h-96 bg-hero-pattern bg-cover">
      <div className="w-full p-12 h-96  bg-gradient-to-r from-white/75 from-1% flex flex-col justify-center items-start text-bgPrimary space-y-14">
        <div className="font-bold text-4xl">
          <p> GET READY FOR YOUR </p>
          <p> SUMMER RIDE</p>
        </div>
        <div className="font-semibold text-xl ">
          <p>Save yourself up to 20% off</p>
          <p>on your purchase this summer</p>
        </div>
        <p className="font-semibold text-lg">Valid until August 31, 2022</p>
      </div>
    </div>
  );
}
