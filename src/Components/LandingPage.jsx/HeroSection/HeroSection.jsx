import React from 'react'
import Navbar from './Navbar'
import Content from './Content'

const HeroSection = () => {
  return (
    <div className=" w-full min-h-screen relative overflow-hidden lg:pt-[14vh] bg-gradient-to-b from-[#f5f1ea] via-[#ede5d8] to-[#e4dbcd] ">

      {/* Soft glow effect */}
      <div className="absolute top-[-18%] left-1/2 -translate-x-1/2 w-[120%] h-[60%] bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.35),_transparent_80%)]" />

      <Navbar />
      <Content />
    </div>
  )
}

export default HeroSection
