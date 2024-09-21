"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const HeroSection = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const texts = ["Singers", "Dancer", "Comedian"];
  const images = [
    "/images/singers.png",  // Replace with your image path for "Singers"
    "/images/dancer.png",   // Replace with your image path for "Dancer"
    "/images/comedian.png", // Replace with your image path for "Comedian"
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY; // Current scroll position
      const viewportHeight = window.innerHeight; // Height of the viewport

      // Calculate the new index based on scroll position
      const newIndex = Math.floor(scrollY / viewportHeight);
      
      // Determine the index based on a slower threshold
      const indexThreshold = scrollY % viewportHeight;

      // Update visible index if the scroll position passes a threshold for the next item
      if (indexThreshold < viewportHeight / 3 && newIndex < texts.length && newIndex !== visibleIndex) {
        setVisibleIndex(newIndex);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [visibleIndex]);

  return (
    <div className="px-28 py-20 h-[360vh] relative">
      <div className="flex gap-10 items-center sticky top-20">
        <div className="w-[70%] flex">
          <div className="w-[300px] relative text-8xl tracking-wide">
            <div className="absolute top-1/2 left-[260px] z-20 transform -translate-x-1/2 -translate-y-1/2">
              {texts.map((text, index) => (
                <div
                  key={index}
                  className={`text1 transform origin-left transition-opacity duration-500 ${
                    index === visibleIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{
                    transform: `rotate(${(index - visibleIndex) * 90}deg)`,
                    lineHeight: "0.0",
                  }}
                >
                  <h1>{text}</h1>
                </div>
              ))}
            </div>
          </div>

          {/* Image Display */}
              

             
          <div className="w-[600px] h-[600px] relative overflow-hidden ">
  {images.map((image, index) => (
    <Image
    style={{borderRadius:"50%"}}
      key={index}
      src={image}
      alt={texts[index]}
      layout="fill"
      objectFit="cover"
      objectPosition="center"
      className={`transition-transform duration-500 ease-in-out bg-gradient-to-r from-orange-600 to-purple-700 p-2  ${
        index === visibleIndex
          ? 'opacity-100 translate-y-0'
          : index === (visibleIndex + 1) % images.length
          ? 'opacity-0 -translate-y-20'
          : 'opacity-0 -translate-y-40'
      }`}
    />
  ))}

</div>
        </div>
        <div className="text">
          <h1 className="text-6xl">
            <span className="text-gray-600">
              Choose <br /> from{" "}
            </span>
            100+ <br /> Categories
          </h1>

          <button className="flex text-2xl items-center gap-1 mt-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-orange-400">
            Explore all categories
            <Image
              src={"/images/Vector 209.png"}
              alt=""
              width={20}
              height={10}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
