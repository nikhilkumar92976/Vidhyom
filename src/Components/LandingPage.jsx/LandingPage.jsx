import React from 'react'
import HeroSection from './HeroSection/HeroSection'
import ProblemSection from './ProblemSection/ProblemSection'
import SolutionSection from './SolutionSection/SolutionSection'
import HowItWorksSection from './HowItWorksSection/HowItWorksSection'
import FeatureSection from './FeatureSection/FeatureSection'
import AudienceSection from './AudienceSection/AudienceSection'
import AboutSection from './AboutSection/AboutSection'
import WhyVidhyomSection from './WhyVidhyomSection/WhyVidhyomSection'
import TestimonialsSection from './TestimonialsSection/TestimonialsSection'
import PricingSection from './PricingSection/PricingSection'
import CTASection from './CTASection/CTASection'
import FAQSection from './FAQSection/FAQSection'
import Footer from './Footer/Footer'

const LandingPage = () => {
  return (
    <div className='w-full min-h-screen'>
      {/* Hero Section - P0 Priority */}
      <HeroSection />

      {/* Problem Statement */}
      <ProblemSection />

      {/* Solution Overview */}
      <SolutionSection />

      {/* How It Works */}
      <HowItWorksSection />

      {/* Features */}
      <FeatureSection />

      {/* Target Audience */}
      <AudienceSection />

      {/* About & Mission */}
      <AboutSection />

      {/* Why Vidhyom (USP) */}
      <WhyVidhyomSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Pricing */}
      <PricingSection />

      {/* CTA Section */}
      <CTASection />

      {/* FAQ */}
      <FAQSection />

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default LandingPage
