"use client";

import { ShoppingCartIcon, TrolleyIcon } from "@phosphor-icons/react";
import React from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";

interface Product {
  id: number;
  title: string;
  priceRange: string;
  imageSrc: string;
  alt: string;
}

const ProductCard = ({ id, title, priceRange, imageSrc, alt }: Product) => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative w-full aspect-[4/5] overflow-hidden bg-gray-100">
        <img
          src={imageSrc}
          alt={alt}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-4 space-y-3">
        <h3 className="text-lg md:text-xl font-semibold text-gray-900 line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-600 text-sm md:text-base">{priceRange}</p>
    <div className="flex justify-center items-center gap-6">
        <button className="w-full bg-gray-700 text-white py-2.5 px-4 rounded-md hover:bg-gray-900 active:bg-gray-900 transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2">
            Buy Now
        </button>
        <Tooltip delayDuration={300}>
            <TooltipTrigger asChild>
                <ShoppingCartIcon fill="fill" size="30" className="cursor-pointer hover:text-gray-700 transition-colors" />
            </TooltipTrigger>
            <TooltipContent>
                <p>Add to cart</p>
            </TooltipContent>
        </Tooltip>
    </div>
      </div>
    </div>
  );
};

export default ProductCard;