import React from "react";

export interface Image {
  src: string;
  alt: string;
  title: string;
}

const ImageCard = ({ src, alt, title }: Image) => {
  return (
    <div className="flex flex-col items-center">
      <div
        className="relative shrink-0 rounded-lg overflow-hidden w-[300px] md:w-[350px] lg:w-[300px] h-[400px]"
      >
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      </div>
      <p className="mt-2 text-center text-sm font-medium">{title}</p>
    </div>
  );
};

export default ImageCard;