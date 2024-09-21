import React from 'react'
import HalfCircleCarousel from './components/HalfCircleCarousel'
import HeroSection from './components/HeroSection'
import MidddleSection from './components/MidddleSection'

export default function page() {
  return (
    <div>
     <HeroSection/>
     <MidddleSection />
     <HalfCircleCarousel/>
    </div>
  )
}
