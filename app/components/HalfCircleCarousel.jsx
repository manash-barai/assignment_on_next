"use client";
import React, { useState } from "react";
import "./HalfCircleCarousel.css";
import Image from "next/image";

const HalfCircleCarousel = () => {
  const [rotation, setRotation] = useState(3600);
  const [count, setCount] = useState(1);

  const handleNext = () => {
    setRotation((prevRotation) => prevRotation + 45); // Increment rotation
    if (count === 8) {
      setCount(1);
    } else {
      setCount((pre) => pre + 1);
    }
  };

  const handlePrevious = () => {
    setRotation((prevRotation) => prevRotation - 45);
    if (count === 1) {
      setCount(8);
    } else {
      setCount((pre) => pre - 1);
    }
  };

  return (
    <div className="h-[120vh] w-full overflow-hidden  mb-16 relative">
      <div className="bottom-0 start-0 circleCrousalBg  absolute w-full z-10 h-20"></div>
      <div className="absolute top-[65%] left-[50%] w-[450px]   z-10 transform -translate-x-1/2 flex justify-center gap-4 items-center flex-col">
      
        <button className={ `  text-white ${count%2===0?'under_circle_button1':'under_circle_button2'} py-1 px-5 rounded-lg`}>{count%2===0?" 5 Members":"5 Members"} </button>


      <h1  key={count}  className={`text-4xl text-gray-100 textAnimation`}>{count%2===0?"Tech Titans ":"Design Dynamos "}</h1> 

      <p className=" flex text-center"> The artists behind the visuals. These design superheroes bring ideas to life, painting our projects with creativity and imagination</p>


      <button className="text-[#58D1D3] flex items-center gap-2">Our design team is growing. Apply Now   <Image src={'/images/Group 1321314281.png'} alt="" width={20} height={20}/>  </button>
    
      </div>

      <div className="relative top-96">
        <button className="previous top-8" onClick={handlePrevious}>
          {" <-"}
        </button>
        <button className="next top-8" onClick={handleNext}>
          {"->"}
        </button>
      </div>
      <div
        className="circle top-96"
        style={{ transform: `rotate(${rotation}deg)` }}
      >

       
        <div className={`item item-1 ${count === 1 ? "active" : ""}`}>
          <div
            className={`w-full h-full ${
              count === 1
                ? "flex justify-center items-center relative rounded "
                : "imageContainer flex justify-center items-center relative rounded-full"
            } `}
            style={{ transform: `rotate(-${rotation}deg)` }}
          >
            <Image
              className={`${count === 1 ? " rounded-md" : "rounded-full "}`}
              src={"/images/c_image.png"}
              alt="i"
              layout="fill"
              objectPosition="center"
            />{" "}
          </div>
        </div>

        <div className={`item item-2 ${count === 2 ? "active" : ""}`}>
          <div
            className={`w-full h-full ${
              count === 2
                ? "flex justify-center items-center relative rounded "
                : "flex justify-center items-center relative rounded-full"
            } `}
            style={{ transform: `rotate(-${rotation}deg)` }}
          >
            <Image
              className={`${
                count === 2 ? "-mt-[50px] rounded-md" : "rounded-full"
              }`}
              src={"/images/c_image.png"}
              alt="i"
              layout="fill"
              objectPosition="center"
            />{" "}
          </div>
        </div>

        <div className={`item item-3 ${count === 3 ? "active" : ""}`}>
          <div
            className={`w-full h-full ${
              count === 3
                ? "flex justify-center items-center relative rounded "
                : "flex justify-center items-center relative rounded-full"
            } `}
            style={{ transform: `rotate(-${rotation}deg)` }}
          >
            <Image
              className={`${count === 3 ? " rounded-md" : "rounded-full"}`}
              src={"/images/c_image.png"}
              alt="i"
              layout="fill"
              objectPosition="center"
            />{" "}
          </div>
        </div>

        <div className={`item item-4 ${count === 4 ? "active" : ""}`}>
          <div
            className={`w-full h-full ${
              count === 4
                ? "flex justify-center items-center relative rounded "
                : "flex justify-center items-center relative rounded-full"
            } `}
            style={{ transform: `rotate(-${rotation}deg)` }}
          >
            <Image
              className={`${
                count === 4 ? "-mt-[50px] rounded-md" : "rounded-full"
              }`}
              src={"/images/c_image.png"}
              alt="i"
              layout="fill"
              objectPosition="center"
            />{" "}
          </div>
        </div>

        <div className={`item item-5 ${count === 5 ? "active" : ""}`}>
          <div
            className={`w-full h-full ${
              count === 5
                ? "flex justify-center items-center relative rounded "
                : "flex justify-center items-center relative rounded-full"
            } `}
            style={{ transform: `rotate(-${rotation}deg)` }}
          >
            <Image
              className={`${count === 5 ? " rounded-md" : "rounded-full"}`}
              src={"/images/c_image.png"}
              alt="i"
              layout="fill"
              objectPosition="center"
            />{" "}
          </div>
        </div>

        <div className={`item item-6 ${count === 6 ? "active" : ""}`}>
          <div
            className={`w-full h-full ${
              count === 6
                ? "flex justify-center items-center relative rounded "
                : "flex justify-center items-center relative rounded-full"
            } `}
            style={{ transform: `rotate(-${rotation}deg)` }}
          >
            <Image
              className={`${
                count === 6 ? " -mt-[50px] rounded-md" : "rounded-full"
              }`}
              src={"/images/c_image.png"}
              alt="i"
              layout="fill"
              objectPosition="center"
            />{" "}
          </div>
        </div>

        <div className={`item item-7 ${count === 7 ? "active" : ""}`}>
          <div
            className={`w-full h-full ${
              count === 7
                ? "flex justify-center items-center relative rounded "
                : "flex justify-center items-center relative rounded-full"
            } `}
            style={{ transform: `rotate(-${rotation}deg)` }}
          >
            <Image
              className={`${count === 7 ? " rounded-md" : "rounded-full"}`}
              src={"/images/c_image.png"}
              alt="i"
              layout="fill"
              objectPosition="center"
            />{" "}
          </div>
        </div>

        <div className={`item item-8 ${count === 8 ? "active" : ""}`}>
          <div
            className={`w-full h-full ${
              count === 8
                ? "flex justify-center items-center relative rounded "
                : "flex justify-center items-center relative rounded-full"
            } `}
            style={{ transform: `rotate(-${rotation}deg)` }}
          >
            <Image
              className={`${
                count === 8 ? "-mt-[50px] rounded-md" : "rounded-full"
              }`}
              src={"/images/c_image.png"}
              alt="i"
              layout="fill"
              objectPosition="center"
            />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HalfCircleCarousel;
