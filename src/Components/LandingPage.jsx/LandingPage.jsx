import React from 'react'
import HeroSection from './HeroSection/HeroSection'
import FeatureSection from './FeatureSection/FeatureSection'

const LandingPage = () => {
  return (
    <div className='w-full min-h-screen'>
      <HeroSection/>
       <FeatureSection/>
       <FeatureSection/>
       <FeatureSection/>
       <FeatureSection/>
    </div>
  )
}

export default LandingPage
