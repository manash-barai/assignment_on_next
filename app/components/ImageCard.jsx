import React from 'react';
import Image from 'next/image';

const ImageCard = ({ image, title, description }) => {
  return (
    <div className="group flex justify-center p-4 items-end rounded-lg shadow-md gap-16  transition duration-500">
  <p className="text-gray-600 text-4xl -leading-3 group-hover:text-gray-100 transition duration-500">
    Late Night Maggie <br /> Party for the boost
  </p>
  <div>
    <Image
      src={'/images/c_image.png'}
      alt={title}
      width={250}
      height={200}
      className="rounded-lg rotate-12 transition-transform duration-500 group-hover:rotate-[-12deg] hover:rotate-0"
      />
  </div>
</div>

  );
};

export default ImageCard;