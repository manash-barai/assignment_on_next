'use client'
import Image from 'next/image';
import { useState } from 'react';

const Carousel = () => {
  const slides = [
    {
      image: '/images/dancer.png', // Ensure the path is correct
      title: 'Nora Fatehi for an event',
      description: 'Nora Fatehi for an event hosted by XYZ performed at Pune.',
      date: '14 March 2023',
    },
    {
      image: '/images/ari.png',
      title: 'Another Event',
      description: 'Description of another event here.',
      date: '22 March 2023',
    },
    {
      image: '/images/dancer.png',
      title: 'Third Event',
      description: 'Third event description.',
      date: '25 March 2023',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  const nextSlide = () => {
    if (!isSliding) {
      setIsSliding(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
        setIsSliding(false);
      }, 500); // Same duration as CSS animation
    }
  };

  const prevSlide = () => {
    if (!isSliding) {
      setIsSliding(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
        setIsSliding(false);
      }, 500); // Same duration as CSS animation
    }
  };

  return (
    <div className="carousel-container relative w-full h-[93vh] bg-gradient-to-b from-transparent to-black overflow-hidden mt-20 py-20 ">
      {/* Headline */}
      <div className="headline absolute top-10 left-0 right-0 h-[50px] bg-dark flex items-center justify-center text-white text-lg z-10">
        <h1 className='text-center text-5xl'>
      Recent shows made star- <br /> studded via StarClinch</h1>
      </div>

      {/* Carousel Wrapper */}
      <div className="carousel-wrapper flex justify-center items-center h-full mt-24">
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="absolute left-60 z-10 bg-gray-700 p-3 border border-gray-600 rounded-full text-white"
        >
                   <Image src={'/images/left.png'  } alt='' width={20} height={20}/>

        </button>

        {/* Carousel Content */}
        <div className='homeFill overflow-hidden'>

        <div className={`carousel-slide bg-red-600 flex relative  items-center ${isSliding ? 'slide' : ''}`}>
          <Image
            src={slides[currentIndex].image}
            alt={slides[currentIndex].title}
           width={400}
           height={400}
           
            />
            </div>
        </div>

          <div key={currentIndex} className="carousel-info text-white ml-8 textAnimation">
            <h3 className="text-3xl mb-2">{slides[currentIndex].title}</h3>
            <p className="text-lg">{slides[currentIndex].description}</p>
            <p className="text-sm mt-2 text-gray-400">
              📅 {slides[currentIndex].date}
            </p>
          </div>
        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-60 z-10 bg-gray-700 p-3 border border-gray-600 rounded-full text-white"
        >
          <Image src={'/images/right.png'  } alt='' width={20} height={20}/>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
