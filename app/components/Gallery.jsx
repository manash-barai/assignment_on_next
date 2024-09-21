"use client"
import { useState } from 'react';
import Image from 'next/image';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('Photos');

  const photos = [
    '/images/kat.png', 
    '/images/ari.png', 
    '/images/kat.png',
    '/images/ari.png',
    '/images/zak.png',
    '/images/tur.png',
    '/images/zak.png',
    '/images/tur.png',
  ];

  const videos = [
    '/images/video1.png',
    '/images/video2.png',
    '/images/video3.png',
    '/images/video4.png',
  ];

  return (
    <div className='h-[93vh] overflow-hidden relative'>
              <div className="bottom-0 start-0 circleCrousalBg  absolute w-full z-10 h-20"></div>

    <div className="gallery-container ">
      <div className="flex gap-3 m-auto  justify-center mt-20 bg-slate-900 w-[200px] rounded-[50px] py-6">
        <button 
          className={` ${activeTab === 'Photos' ? ' bg-white px-5 py-1 text-black rounded-[50px]' : ''}`} 
          onClick={() => setActiveTab('Photos')}
        >
          Photos
        </button>
        <button 
          className={` ${activeTab !== 'Photos' ? ' bg-white px-5 py-1 text-black rounded-[50px]' : ''}`}
          onClick={() => setActiveTab('Videos')}
        >
          Videos
        </button>
      </div>
        <div className='w-[700px] overflow-hidden mx-auto mt-32'>

        
      <div className="flex flex-wrap gap-3">
        {activeTab === 'Photos' ? (
          photos.map((src, index) => (
            <div key={index} className="">
              <Image src={src} alt={`Photo ${index + 1}`} width={150} height={150} />
            </div>
          ))
        ) : (
          videos.map((src, index) => (
            <div key={index} className="">
              <Image src={src} alt={`Video ${index + 1}`} width={150} height={150} />
            </div>
          ))
        )}
      </div>
      </div>
    </div>
    </div>
  );
};

export default Gallery;
