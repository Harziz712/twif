import React, { useState } from "react";

export interface Image {
  src: string;
  alt: string;
  title: string;
  hoverSrc: string;
}

const ImageCard = ({ src, alt, title, hoverSrc }: Image) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <div
        className="relative shrink-0 rounded-lg overflow-hidden bg-gray-200 w-[300px] md:w-[350px] lg:w-[300px] h-[400px]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={isHovered ? hoverSrc : src}
          alt={alt}
          className={`w-full h-full object-cover transition-transform duration-300 ${isHovered ? "scale-100 object-contain" : "scale-100 "}`}
        />
      </div>
      <p className="mt-2 text-center text-sm font-medium">{title}</p>
    </div>
  );
};

export default ImageCard;