import React from 'react'
import Banner from './Banner';
import Reviews from './Reviews';
import AboutUs from './AboutUs';
import FeatureAndBenefits from './FeatureAndBenefits';
import HowItWorks from './HowItWorks';
import Line from './Line';

function Home() {
  return (
    <div>
        <Banner/>
        <FeatureAndBenefits/>
        <Line/>
        <HowItWorks/>
        <Line/>
        <Reviews/>
        <AboutUs/>
    </div>
  )
}

export default Home