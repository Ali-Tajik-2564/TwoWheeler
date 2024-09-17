import React from 'react';
import { Link } from 'react-router-dom';
import LandingIntro from '../../components/LandingIntro/LandingIntro';
import GetReadySection from '../../components/GetReadySection/GetReadySection';
import WhyUs from '../../components/WhyUs/WhyUs';
import ShortCutLink from '../../components/ShortCutLink/ShortCutLink';

export default function Landing() {
  return (
    <div className="h-auto w-full">
      <LandingIntro />
      <GetReadySection />
      <WhyUs />
      <ShortCutLink />
    </div>
  );
}
