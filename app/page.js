import React from 'react'
import HalfCircleCarousel from './components/HalfCircleCarousel'
import HeroSection from './components/HeroSection'
import MidddleSection from './components/MidddleSection'
import Gallery from './components/Gallery'
import Carousel from './components/Carousel'

export default function page() {
  return (
    <div>
     <HeroSection/>
     <Gallery/>
     <MidddleSection />
     <HalfCircleCarousel/>
     <Carousel/>
    </div>
  )
}
