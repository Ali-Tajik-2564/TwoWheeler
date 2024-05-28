import React from 'react';
import { Link } from 'react-router-dom';
import LandingIntro from '../../components/LandingIntro/LandingIntro';
import GetReadySection from '../../components/GetReadySection/GetReadySection';

export default function Landing() {
  return (
    <div className="h-auto w-full">
      <LandingIntro />
      <GetReadySection />
    </div>
  );
}
